import Wilddog from 'wilddog'
import { EventEmitter } from 'events'
const api = new Wilddog('https://dai919920.wilddogio.com/')
const store = new EventEmitter()
export default store
//监听节点dwx,有变化则触发事件
api.child('dwx').on('value', snapshot => {
    const item = snapshot.val()
    const index = item.sessionIndex
    const meg = item.message
    store.emit('update',{
        text: meg,
        date: new Date(),
        self: true,
        index:index
    })
})
store.setItem = message => {
    api.child('dwx').set(message)
}




