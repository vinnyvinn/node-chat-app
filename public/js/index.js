var socket = io();

socket.on('connect',function(){
    console.log('Connected to a server');

    socket.emit('createMessage',{
       from:'vinnyvinny',
       text:'victory belongs to Jesus'
    });

});
socket.on('disconnect',function(){
    console.log('Disconnected from the server');
});

socket.on('newMessage',(message) =>{
   console.log('newMessage',message);
});
