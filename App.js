import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Dimensions,
  AsyncStorage,
  StatusBar,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import { Router, Scene, Tabs,Actions} from 'react-native-router-flux';
import { Grid, Icon } from '@ant-design/react-native';
import Home from './homework/Home';
import Sort from './homework/Sort';
// import Shop from './homework/Shop';
import Login from './homework/Login';
import Me from './homework/Me';
import Publish from './homework/Publish';
import SplashScreen from 'react-native-splash-screen';
import SwiperPage from './homework/SwiperPage';
import Register from './homework/register';

const width = Dimensions.get('window').width;
// width 450
// 给的图上屏宽 640 px
function length(x) {
  return x * width / 640;
}
const App = () => {
  let now = 0;
  let [isLogin, setLogin] = useState(false);
  let [isInstall, setInstall] = useState(true);
  let init = () => {
    AsyncStorage.getItem('isInstall')
      .then(res => {
        console.log('isinstall', res)
        if (res) {
          setInstall(false);
        }
      })
    AsyncStorage.getItem('user')
      .then(res => {
        let user = JSON.parse(res)
        console.log(user)
        if (!user) {
          SplashScreen.hide();
        }
        if (user && user.token) {
          setLogin(true);
          SplashScreen.hide();
        }
        if (user.status == '1' || user.status == '2') {
          SplashScreen.hide();
        }
        console.log("isLogin" + isLogin);
      })

  }
  function onBackAndroid() {
    // console.log(Actions.currentScene);
    // console.log(isLogin);
    if (Actions.currentScene != 'home' && Actions.currentScene != '_home' && Actions.currentScene != 'login' && Actions.currentScene != 'register') {
      Actions.pop();
      return true;
    } else {
      if (new Date().getTime() - now < 2000) {
        BackHandler.exitApp();
      } else {
        ToastAndroid.show('再按一次退出应用', 1000);
        now = new Date().getTime();
        return true;
      }
    }
  }
  useEffect(() => {
    init();
    BackHandler.addEventListener('hardwareBackPress', onBackAndroid);
  })
  let afterInstall = () => {
    console.log('after install')
    setInstall(false)
  }
  if (isInstall) {
    return <View style={{ flex: 1 }}>
      <SwiperPage afterInstall={afterInstall} />
    </View>
  }
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#f23030" barStyle="light-content" />
        <Router>
          {/* 仅一页可以写单标签，嵌套的话写双标签 */}
          <Scene key='root'>
            {/* 实现Tabs */}
            {/* key就是给页面的标签，供Actions使用 */}
            <Tabs key="tabbar"
              hideNavBar
              activeTintColor='#f23333'
              inactiveTintColor="#666666"
            >

              <Scene key="home" hideNavBar title='首页'
                icon={
                  ({ focused }) => <Icon
                    color={focused ? '#f23333' : '#666666'}
                    name='home'
                  />
                }
                component={Home}
              >
              </Scene>

              <Scene key="sort" title='商品分类' hideNavBar
                icon={
                  ({ focused }) => <Icon
                    color={focused ? '#f23333' : '#666666'}
                    name='appstore'
                  />
                }
                // hideDrawerButton
                component={Sort}
              >
              </Scene>
              <Scene key="me" title='个人中心' hideNavBar
                icon={
                  ({ focused }) => <Icon
                    color={focused ? '#f23333' : '#666666'}
                    name='user'
                  />
                }
              >
                <Scene key='me' component={Me} />
                <Scene key='pub' hideTabBar component={Publish} />
                <Scene key='login' hideTabBar component={Login} />
                <Scene key='register' hideTabBar component={Register} />
              </Scene>
            </Tabs>
            <Scene initial={!isLogin} key="lrin" hideNavBar>
              <Scene key='login' component={Login} />
              <Scene key='register' component={Register} />
            </Scene>
          </Scene>
        </Router>
      </SafeAreaView>
    </>
  );

};


export default App;
