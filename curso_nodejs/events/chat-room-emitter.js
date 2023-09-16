import EventEmitter from 'events';

class ChatRoom extends EventEmitter{
    join(user){
        console.log(`${user} joined to the chat room`);
        this.emit('join', user);
    }
    sendMessage(user, message){
        console.log(`${user} sent a message: ${message}`);
        this.emit('message', user, message);
    }
}

const chatRoom = new ChatRoom();

chatRoom.on('join', (user) => {
    console.log(`Welcome ${user}`);
});

chatRoom.on('message', (user, message) => {
    //console.log(`New message from ${user}: ${message}`);
});


chatRoom.join('Jhon');
chatRoom.join('Carla');

chatRoom.sendMessage('Jhon', 'Hello');
chatRoom.sendMessage('Carla', 'Hello');
chatRoom.sendMessage('Carla', 'How are you?');
chatRoom.sendMessage('Jhon', 'I am fine');
chatRoom.sendMessage('Jhon', 'And you?');
chatRoom.sendMessage('Carla', 'I am fine too');