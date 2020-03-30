import React, { Component } from 'react';
import {Text,View} from 'react-native';
import Msg from '../components/Msg';

//类型断言：可以确定地指定一个值的类型
//形式：
//<Type>值 在jsx中不能用
//值as类型

// interface Person{
//     name:String;
//     age:Number;
// }
// let user1:Person={name:'a',age:10}
// let user1 = {} as Person;
// user1.name='liu';
// user1.age=19;
// user1.job='aaa';

//联合类型 或者 any类型
// function getLength(p1:string|number):number{
//     return (p1 as string).length
// }

//类定义
//es5
//创建一个Person类，有name和age属性，调用的时候传入
// function Person(name:string,age:number){
//     this.name=name;
//     this.age=age;
// }
// let user = new Person('zhang',20);
// console.log(user);

// class Person{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.age=age;
//         this.name=name;
//     }
//     sayName(){
        
//     }
// }

// class Worker extends Person{
//     //静态属性
//     static money:number;
//     private job:string='程序员';
//     constructor(name:string,age:number,job:string){
//         super(name,age);
//         // this.job=job
//     }
// }
// Worker.money=2000;
// let user = new Worker('zhang',20,'程序员');
// console.log(user.job);

// function identity<T>(arg:T):T{
//     return arg;
// }
// console.log(identity<string>('params1'))

// function getMsg<U>(msg:U):U[]{
//     return [msg];
// }
// console.log(getMsg(100));

// interface GenericIdentityFn<T>{
//     (arg:T):T;
// }

// let myIdentity:GenericIdentityFn<number>=function(arg){
//     return 100;
// }

interface Props{
    name:string;
    data:{
        id:string,
        title:string
    }
}

interface State{
    title:string
}

function helloWorld(target:any){
    console.log('hello world');
}
@helloWorld
class HelloWorldClass{
    
}
export default class Demo01 extends Component<Props,State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            title:'typescript'
        }
    }
    componentDidMount(){
        this.setState({title:'100'})
    }
    render() {
        return (
            <View>
                <Text>{this.props.name}</Text>
            </View>
        )
    }
}

