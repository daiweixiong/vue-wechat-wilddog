import Wilddog from 'wilddog'
import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'
const api = new Wilddog('https://dai919920.wilddogio.com/')
const store = new EventEmitter()

export default store

var now = new Date()
var data = {
    // 登录用户
    user: {
        id: 1,
        name: 'Myself',
        img: '2.jpg'
    },

    // 用户列表
    userList: [
        {
            id: 2,
            name: '示例介绍',
            img: '8.jpg'
        },
        {
            id: 3,
            name: 'webpack',
            img: '3.jpg'
        },
        {
            id: 4,
            name: 'wilddog',
            img: '6.jpg'
        },
        {
            id: 7,
            name: 'vuex',
            img: '5.jpg'
        }
    ],

    // 会话列表
    sessionList: [
        {
            userId: 2,
            messages: [
                {
                    text: 'Hello，这是一个基于vue的WeChat',
                    date: now
                },
                {
                    text: '技术栈:vue+wilddog+webpack+vuex+es6...,欢迎来到vue的世界',
                    date: now
                },
                {
                    text: 'Make your project easy and fast with modern tools',
                    date: now
                },
                {
                    text: '项目地址: https://github.com/....',
                    date: now
                }
            ]
        },
        {
            userId: 3,
            messages: [{
                text: 'No matter how far you may fly, never forget where you come from.',
                date: now
            }]
        },
        {
            userId: 4,
            messages: [{
                text: 'Make your project easy and fast with modern tools',
                date: now
            }]
        },
        {
            userId: 5,
            messages: [{
                text: 'Make your project easy and fast with modern tools',
                date: now
            }]
        },
        {
            userId: 6,
            messages: [{
                text: 'Make your project easy and fast with modern tools',
                date: now
            }]
        },
        {
            userId: 7,
            messages: [{
                text: 'Make your project easy and fast with modern tools',
                date: now
            }]
        }
    ],
}
//监听节点dwx,有变化则触发事件
api.child('dwx').on('value', snapshot => {
    const item = snapshot.val()
    const index = item.sessionIndex
    const meg = item.message
    data.sessionList[index].messages.push({
        text: meg,
        date: new Date(),
        self: true
    })
    store.emit('update')
})

store.setItem = message => {
    api.child('dwx').set(message)
}

 store.fetch = () => {
    return data
}




