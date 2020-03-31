import React, { Component } from 'react'
import {
    View,
    Text,
    ToastAndroid,
    SafeAreaView
} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import { Grid, Icon } from '@ant-design/react-native';
export default class Publish extends Component {
    constructor() {
        super();
        this.state = {
            tits: [],
            page: 1,
            isloading: true
        }
        this.fetchData(this.state.page);
    }
    fetchData = (page) => {
        this.setState({ isloading: true })
        fetch('https://cnodejs.org/api/v1/topics?limit=11&page=' + page)
            .then((res) => res.json())
            .then((res) => {
                this.setState({ isloading: false });
                res.data.forEach(item => {
                    item.num = Math.random() > 0.5 ? '已回复' : '待回复',
                        item.title = item.title.length > 15 ? item.title.slice(0, 15) + '...' : item.title,
                        item.create_at = item.create_at.slice(0, 10)
                }
                );
                this.setState({ tits: res.data });
            });
    }
    prev = () => {
        if (this.state.page === 1) {
            ToastAndroid.show('已经到头了', 1000);
        } else {
            this.setState({
                page: --this.state.page
            });
            this.fetchData(this.state.page);
        }
    }
    next = () => {
        this.setState({
            page: ++this.state.page
        });
        this.fetchData(this.state.page);
    }
    render() {
        return (
            <SafeAreaView>
                <View style={{ width: '100%', height: 50, justifyContent: 'space-between', backgroundColor: '#f23030', flexDirection: 'row', alignItems: 'center' }}>
                    <Icon style={{ marginLeft: 10 }} color='#fff' name='left' onPress={() => Actions.pop()} />
                    <Text style={{ fontSize: 20, color: '#fff', marginLeft: 150, marginRight: 150 }}>我的发布</Text>
                    <Icon style={{ marginRight: 10 }} color='#fff' name='ellipsis' />
                </View>
                <View style={{ marginTop: 6 }}>
                    {
                        this.state.tits.map((item) => (
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height: 46,
                                paddingLeft: 6,
                                backgroundColor: '#fff',
                                borderBottomColor: '#f5f5f5',
                                borderBottomWidth: 1,
                                borderBottomStyle: 'dashed'
                            }}>
                                <Text style={{ fontSize: 15, color: '#333333' }}>{item.title}</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: 160,
                                    paddingRight: 14
                                }}>
                                    <Text style={{ fontSize: 15, color: '#333333', marginRight: 20 }}>{item.create_at}</Text>
                                    <Text style={item.num === '待回复' ? { color: 'red', fontSize: 15 } : { fontSize: 15, color: '#333333' }}>{item.num}</Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    paddingTop: 20,
                    paddingBottom: 20,
                    paddingLeft: 6,
                    paddingRight: 6
                }}>
                    <Button
                        onPress={this.prev}
                        style={{
                            width: 105,
                            height: 35,
                            borderRadius: 20,
                            textAlignVertical: 'center',
                            backgroundColor: 'red',
                            color: '#fff'
                        }}
                    >上一页</Button>
                    <Text>第{this.state.page}页</Text>
                    <Button
                        onPress={this.next}
                        style={{
                            width: 105,
                            height: 35,
                            borderRadius: 20,
                            textAlignVertical: 'center',
                            backgroundColor: 'red',
                            color: '#fff'
                        }}
                    >下一页</Button>
                </View>
                {
                    this.state.isloading
                        ? <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 20,marginTop:10 }}>正在获取数据...</Text></View>
                        : null
                }
            </SafeAreaView>
        )
    }
}
