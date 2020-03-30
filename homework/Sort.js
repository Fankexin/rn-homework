import React, { Component } from 'react'
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
const width = Dimensions.get('window').width;
// width 450
// 给的图上屏宽 640 px
function length(x) {
    return x * width / 640;
}
const styles = StyleSheet.create({
    tab1: {
        color: 'red',
        fontSize: length(20)
    },
    tab2: {
        color: '#333',
        fontSize: length(20)
    },
    content1: {
        width: length(294),
        height: length(420),
        backgroundColor: '#fff',
        marginBottom: length(10)
    },
    text1: {
        fontSize: length(18),
        color: '#666',
        paddingLeft: length(18),
        paddingTop: length(3)
    },
    text2: {
        fontSize: length(18),
        color: '#f23030',
        paddingLeft: length(18),
        paddingTop: length(20)
    }
})
export default class Sort extends Component {
    render() {
        return (
            <>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{
                        height: length(70),
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff',
                        width: "100%"
                    }}>
                        <View style={{
                            height: length(50),
                            width: length(550),
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#eeeeee',
                            borderRadius: length(4)
                        }}>
                            <TextInput
                                style={{
                                    height: length(50),
                                    width: "90%",
                                    padding: 0,
                                    paddingLeft: length(20)
                                }}
                                placeholder="请输入商品名称"
                            />
                            <Icon color='#a0a0a0' name='search' />
                        </View>
                    </View>

                    <View
                        style={{
                            height: length(70),
                            width: "100%",
                            borderBottomColor: "#dedede",
                            borderBottomWidth: length(2),
                            backgroundColor: '#fff',
                            flexDirection: 'row',
                            alignItems: "center",
                            justifyContent: 'space-around'
                        }}
                    >
                        <Text style={styles.tab1}>综合</Text>
                        <Text style={styles.tab2}>销量</Text>
                        <Text style={styles.tab2}>新品</Text>
                        <Text style={styles.tab2}>价格</Text>
                        <Text style={styles.tab2}>信用</Text>
                    </View>

                    <ScrollView style={{ flex: 1 }}>
                        <View
                            style={{
                                width: "100%",
                                height: '100%',
                                padding: length(16),
                                flexDirection: 'row',
                                // alignItems: "center",
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                marginBottom: length(100)
                            }}
                        >
                            <View style={styles.content1}>
                                <Image source={require('../assets/o1.png')} style={{ height: length(300), width: length(294) }} />
                                <Text style={styles.text1}>Oishi/上好佳玉米卷20包膨化休</Text>
                                <Text style={styles.text1}>闲食品Oishi/上好佳</Text>
                                <Text style={styles.text2}>36.00</Text>
                            </View>
                            <View style={styles.content1}>
                                <Image source={require('../assets/o2.png')} style={{ height: length(300), width: length(294) }} />
                                <Text style={styles.text1}>Oishi/上好佳玉米卷20包膨化休</Text>
                                <Text style={styles.text1}>闲食品Oishi/上好佳</Text>
                                <Text style={styles.text2}>36.00</Text>
                            </View>
                            <View style={styles.content1}>
                                <Image source={require('../assets/o1.png')} style={{ height: length(300), width: length(294) }} />
                                <Text style={styles.text1}>Oishi/上好佳玉米卷20包膨化休</Text>
                                <Text style={styles.text1}>闲食品Oishi/上好佳</Text>
                                <Text style={styles.text2}>36.00</Text>
                            </View>
                            <View style={styles.content1}>
                                <Image source={require('../assets/o2.png')} style={{ height: length(300), width: length(294) }} />
                                <Text style={styles.text1}>Oishi/上好佳玉米卷20包膨化休</Text>
                                <Text style={styles.text1}>闲食品Oishi/上好佳</Text>
                                <Text style={styles.text2}>36.00</Text>
                            </View>
                            <View style={styles.content1}>
                                <Image source={require('../assets/o1.png')} style={{ height: length(300), width: length(294) }} />
                                <Text style={styles.text1}>Oishi/上好佳玉米卷20包膨化休</Text>
                                <Text style={styles.text1}>闲食品Oishi/上好佳</Text>
                                <Text style={styles.text2}>36.00</Text>
                            </View>
                            <View style={styles.content1}>
                                <Image source={require('../assets/o2.png')} style={{ height: length(300), width: length(294) }} />
                                <Text style={styles.text1}>Oishi/上好佳玉米卷20包膨化休</Text>
                                <Text style={styles.text1}>闲食品Oishi/上好佳</Text>
                                <Text style={styles.text2}>36.00</Text>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
}
