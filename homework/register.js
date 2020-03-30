import React, { Component } from 'react';
import { View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import { myFetch } from './utils'
export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            pwd: '',
            pwdA: '',
            isloading: false
        }
    }
    userhandle = (text) => {
        this.setState({ username: text });
    }
    pwdhandle = (text) => {
        this.setState({ pwd: text })
    }
    pwdagain = (text) => {
        this.setState({ pwdA: text })
    }
    login = () => {
        if (this.state.username != '' && this.state.pwd != '' && this.state.pwdA != '') {
            if (this.state.pwd != this.state.pwdA) {
                Alert.alert('密码不一致');
            }
            else {
                this.setState({ isloading: true })
                myFetch.post('/login', {
                    username: this.state.username,
                    pwd: this.state.pwd
                }
                ).then(res => {
                    if (res.data.status == '1') {
                        Alert.alert('账户已存在!!!');
                    }
                    else if (res.data.status == '2') {
                        Alert.alert('连接错误');
                    }
                    else {
                        AsyncStorage.setItem('user', JSON.stringify(res.data))
                            .then(() => {
                                this.setState({ isloading: false })
                                Actions.login();
                            })
                    }

                    console.log(res.data);
                })
            }

        }
        else{
            Alert.alert('存在输入项为空！');
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View
                    style={{ alignItems: 'center' }}>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                        }}>
                        <Icon name="user" color="red" />
                        <TextInput placeholder="用户名"
                            onChangeText={this.userhandle}
                        />
                    </View>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                        }}>
                        <Icon name="profile" color="red" />
                        <TextInput
                            onChangeText={this.pwdhandle}
                            placeholder="密码"
                            secureTextEntry={true}
                        />
                    </View>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                        }}>
                        <Icon name="profile" color="red" />
                        <TextInput
                            onChangeText={this.pwdagain}
                            placeholder="确认密码"
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity
                        style={{
                            width: '80%',
                            height: 40,
                            backgroundColor: '#f23030',
                            marginTop: 30,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={this.login}>
                        <Text style={{ color: '#fff' }}>注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: '80%',
                            height: 40,
                            backgroundColor: '#f23030',
                            marginTop: 30,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => Actions.pop()}>
                        <Text style={{ color: '#fff' }}>返回登录页</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}