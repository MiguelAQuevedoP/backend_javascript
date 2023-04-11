const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('res',(data,secondData) => {
    console.log(data)
    console.log(secondData)
})

customEmitter.emit('res','Hello World',{name: 'Miguel'})
customEmitter.emit('res',[10, 20, 30, 40],'numbers')
customEmitter.emit('res', {nikename: 'zakySadMan'}, ['a', 'b'])