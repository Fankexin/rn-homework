import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    TextInput,
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import { Grid, Icon } from '@ant-design/react-native';
import Swiper from 'react-native-swiper';
import Button from 'react-native-button';
const width = Dimensions.get('window').width;
// width 450
// 给的图上屏宽 640 px
function length(x) {
    return x * width / 640;
}
export default class Home extends Component {
    render() {
        return (
            <>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{
                        height: length(75),
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f23030',
                        width: "100%"
                    }}>
                        <View style={{
                            width: length(595),
                            height: length(55),
                            flexDirection: 'row',
                        }}
                        >
                            <View style={{
                                height: length(55),
                                width: length(525),
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: '#fbb8b8',
                                borderRadius: length(28)

                            }}>
                                <Icon
                                    style={{
                                        marginLeft: length(25),
                                        marginRight: length(20)
                                    }}
                                    color='#fff' name='search' />
                                <TextInput
                                    style={{
                                        height: length(50),
                                        width: "90%",
                                        padding: 0,
                                        fontSize: length(22)
                                    }}
                                    placeholderTextColor='#fff'
                                    placeholder="请输入您要搜索的关键字"
                                />
                            </View>
                            <Icon
                                style={{
                                    lineHeight: length(55),
                                    marginLeft: length(25)
                                }}
                                color='#fff' size='lg' name='shopping-cart' />
                        </View>
                    </View>
                    <ScrollView style={{ flex: 1 }}>
                        <Swiper
                            autoplay={true}
                            dot={<View style={{ backgroundColor: '#ffffff', width: length(16), height: length(16), borderRadius: length(8), marginLeft: length(11), marginRight: length(11), marginBottom: -20 }} />}
                            activeDot={<View style={{ backgroundColor: '#f23030', width: length(16), height: length(16), borderRadius: length(8), marginLeft: length(11), marginRight: length(11), marginBottom: -20 }} />}

                            style={{
                                height: length(273)
                            }}>
                            <View>
                                <Image style={{ height: length(273), width: length(640) }} source={require('../assets/images/服务01.png')} />
                            </View>
                            <View>
                                <Image style={{ height: length(273), width: length(640) }} source={require('../assets/images/服务02.png')} />
                            </View>
                            <View>
                                <Image style={{ height: length(273), width: length(640) }} source={require('../assets/images/服务01.png')} />
                            </View>
                        </Swiper>
                        <View>
                            <View style={styles.chose}>
                                <Image style={styles.pic} source={require('../assets/images/服务03.png')} />
                                <Text style={styles.text1}>居家维修保养</Text>
                                <Icon color='#cecece' name='right' />
                            </View>
                            <View style={styles.chose}>
                                <Image style={styles.pic} source={require('../assets/images/服务04.png')} />
                                <Text style={styles.text1}>住宿优惠</Text>
                                <Icon color='#cecece' name='right' />
                            </View>
                            <View style={styles.chose}>
                                <Image style={styles.pic} source={require('../assets/images/服务05.png')} />
                                <Text style={styles.text1}>出行接送</Text>
                                <Icon color='#cecece' name='right' />
                            </View>
                            <View style={styles.chose}>
                                <Image style={styles.pic} source={require('../assets/images/服务06.png')} />
                                <Text style={styles.text1}>E族活动</Text>
                                <Icon color='#cecece' name='right' />
                            </View>
                        </View>
                        <View style={{ width: '100%', marginTop: length(35), flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Button style={styles.btn}>
                                发布需求
                            </Button>
                        </View>
                        <View style={{ width: '100%', marginTop: length(60), marginBottom: length(30), flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text>©E族之家 版权所有</Text>
                        </View>

                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
}
const styles = StyleSheet.create({
    chose: {
        marginTop: length(10),
        backgroundColor: '#fff',
        width: '100%',
        height: length(120),
        flexDirection: 'row',
        alignItems: 'center'
    },
    pic: {
        height: length(120),
        width: length(130),
        marginLeft: length(10),
        marginRight: length(30)
    },
    text1: {
        color: '#333333',
        fontSize: length(22),
        width: length(415)
    },
    btn: {
        width: length(544),
        height: length(68),
        backgroundColor: '#f23030',
        lineHeight: length(68),
        color: '#fff',
        fontSize: length(22),
        borderRadius: length(10)
    },
    text2: {
        fontSize: length(16),
        color: '#767676'
    }
})