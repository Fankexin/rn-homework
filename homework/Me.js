import React, { Component } from 'react'
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    AsyncStorage,
    TouchableOpacity
} from 'react-native';
import { Grid, Icon } from '@ant-design/react-native';
import ImagePicker from 'react-native-image-picker';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

const width = Dimensions.get('window').width;
// width 450
// 给的图上屏宽 640 px
function length(x) {
    return x * width / 640;
}

const options = {
    title: '请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
export default class Me extends Component {
    constructor() {
        super();
        this.state = {
            img: '',
            username: ''
        }
        this.getData();
    }
    storeData = (value) => {
        AsyncStorage.setItem('imgUrl', JSON.stringify(value));
    }
    getData = () => {
        AsyncStorage.getItem('imgUrl')
            .then((value) => {
                this.setState({
                    img: JSON.parse(value)
                });
            });
        AsyncStorage.getItem('user')
            .then((value) => {
                this.setState({
                    username: JSON.parse(value).username
                });
            });
    }
    takephoto = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    img: source
                });
                this.storeData(source);
            }
        });
    }
    leave = () => {
        let a =  {"pwd": "", "status": "","token": "123456789","username": ""};
        AsyncStorage.setItem('user', '');
        Actions.login();
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ width: '100%', height: length(225), backgroundColor: '#f23030', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Button onPress={() => { this.takephoto() }}>
                            <Image style={styles.pic} source={this.state.img ? this.state.img : require('../assets/images/me.png')} />
                        </Button>
                    </View>

                    <View style={{ width: '100%', height: length(145), backgroundColor: '#f23030', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={{ fontSize: length(26), color: '#ffffff' }}>{this.state.username ? this.state.username : "BINNU DHILLON"}</Text>
                    </View>
                    <View style={{ height: length(465), width: '100%', marginBottom: length(10), backgroundColor: '#ffffff' }}>
                        <View style={styles.tit}>
                            <Icon style={{ marginLeft: length(20), marginRight: length(20) }} color='#cecece' name='smile' />
                            <Text style={styles.text}>我的个人中心</Text>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.piece}>
                                <View style={styles.cen}>
                                    <Icon color='#cecece' name='setting' />
                                </View>
                                <View style={styles.cen}>
                                    <Text style={styles.text1}>账户管理</Text>
                                </View>
                            </View>
                            <View style={styles.piece}>
                                <View style={styles.cen}>
                                    <Icon color='#cecece' name='environment' />
                                </View>
                                <View style={styles.cen}>
                                    <Text style={styles.text1}>收货地址</Text>
                                </View>
                            </View>
                            <View style={styles.piece}>
                                <View style={styles.cen}>
                                    <Icon color='#cecece' name='solution' />
                                </View>
                                <View style={styles.cen}>
                                    <Text style={styles.text1}>我的信息</Text>
                                </View>
                            </View>
                            <View style={styles.piece}>
                                <View style={styles.cen}>
                                    <Icon color='#cecece' name='profile' />
                                </View>
                                <View style={styles.cen}>
                                    <Text style={styles.text1}>我的订单</Text>
                                </View>
                            </View>
                            <View style={styles.piece}>
                                <View style={styles.cen}>
                                    <Icon color='#cecece' name='qrcode' />
                                </View>
                                <View style={styles.cen}>
                                    <Text style={styles.text1}>我的二维码</Text>
                                </View>
                            </View>
                            <View style={styles.piece}>
                                <View style={styles.cen}>
                                    <Icon color='#cecece' name='database' />
                                </View>
                                <View style={styles.cen}>
                                    <Text style={styles.text1}>我的积分</Text>
                                </View>
                            </View>
                            <View style={styles.piece}>
                                <View style={styles.cen}>
                                    <Icon color='#cecece' name='star' />
                                </View>
                                <View style={styles.cen}>
                                    <Text style={styles.text1}>我的收藏</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: length(360), width: '100%', backgroundColor: '#ffffff' }}>
                        <View style={styles.tit}>
                            <Icon style={{ marginLeft: length(20), marginRight: length(20) }} color='#cecece' name='tag' />
                            <Text style={styles.text}>E族生活</Text>
                        </View>
                        <View style={styles.box1}>
                            <View style={styles.piece}>
                                <View style={styles.cen}>
                                    <Icon color='#cecece' name='tool' />
                                </View>
                                <View style={styles.cen}>
                                    <Text style={styles.text1}>居家维修保养</Text>
                                </View>
                            </View>
                            <View style={styles.piece}>
                                <View style={styles.cen}>
                                    <Icon color='#cecece' name='car' />
                                </View>
                                <View style={styles.cen}>
                                    <Text style={styles.text1}>出行接送</Text>
                                </View>
                            </View>
                            <View style={styles.piece}>
                                <View style={styles.cen}>
                                    <Icon color='#cecece' name='user' />
                                </View>
                                <View style={styles.cen}>
                                    <Text style={styles.text1}>我的受赠人</Text>
                                </View>
                            </View>
                            <View style={styles.piece}>
                                <View style={styles.cen}>
                                    <Icon color='#cecece' name='inbox' />
                                </View>
                                <View style={styles.cen}>
                                    <Text style={styles.text1}>我的住宿优惠</Text>
                                </View>
                            </View>
                            <View style={styles.piece}>
                                <View style={styles.cen}>
                                    <Icon color='#cecece' name='eye' />
                                </View>
                                <View style={styles.cen}>
                                    <Text style={styles.text1}>我的活动</Text>
                                </View>
                            </View>
                            <View style={styles.piece}>
                                <View style={styles.cen}>
                                    <Icon color='#cecece' name='form' />
                                </View>
                                <View style={styles.cen}>
                                    {/* <Text style={styles.text1} onPress={()=>Actions.publish()}>我的发布</Text> */}
                                    <Button onPress={() => Actions.pub()}>
                                        <Text style={styles.text1}>我的发布</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* <View style={{ height: length(95), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Text style={{ color: '#767676', fontSize: length(18) }}>BINNU DHILLON | 退出</Text>
                    </View> */}
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{
                                width: '80%',
                                height: 40,
                                backgroundColor: '#f23030',
                                marginTop: 30,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 30
                            }}
                            onPress={this.leave}>
                            <Text style={{ color: '#fff' }}>{this.state.username}  退出</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    pic: {
        width: length(154),
        height: length(154),
        borderRadius: length(77),
        borderWidth: length(3),
        borderColor: '#ffffff',
        marginTop: length(55)
    },
    tit: {
        height: length(80),
        width: '100%',
        borderBottomColor: '#eeeeee',
        borderBottomWidth: length(1),
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: '#727171',
        fontSize: length(24)
    },
    text1: {
        color: '#727171',
        fontSize: length(24),
        marginTop: length(15)
    },
    box: {
        width: '100%',
        height: length(385),
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: length(40),
        marginBottom: length(10)
    },
    box1: {
        width: '100%',
        height: length(280),
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: length(40),
        marginBottom: length(10)
    },
    piece: {
        marginBottom: length(40),
        width: length(213)
    },
    cen: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})