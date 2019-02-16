var socket = io();

socket.on('connect',function(){
    console.log('Connected to a server');


});
socket.on('disconnect',function(){
    console.log('Disconnected from the server');
});

socket.on('newMessage',(message) =>{
   console.log('newMessage',message);

   var li = $('<li></li>');
   li.text(`${message.from} : ${message.text}`)
    $('#messages').append(li);
});

$('#message-form').on('submit',function (e) {
    e.preventDefault();

    socket.emit('createMessage',{
        from:'User',
        text:$('[name=message]').val()
    },function () {
        
    });
});
