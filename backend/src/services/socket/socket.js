import User from '../../app/models/User';

const init = (wss) => {

  wss.on('connection', (socket) => {
    console.log(`Init connection: ID ${socket.id}`);

    socket.on('join', ({name, room}) => {
      const { user } = User.addUser(socket.id, name, room);
      
      socket.join(user.room);

      socket.emit('message', { user: 'admin', text: `${user.name} Welcome to the room ${user.room}` });

      socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined!`});

    });
    
    socket.on('sendMessage', (message, callback) => {
      const user = User.getUser(socket.id);

      wss.to(user.room).emit('message', {user: user.name, text: message});

      callback();
    })

    socket.on('disconnect', () => {
      console.log('[x] User desconected!')
    });
  
  });
}

export default init;