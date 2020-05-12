import wss from '../../App';

wss.socket.on('connection', (socket) => {

  console.log(`\n[X] Client connected...`);

  socket.on('disconnect', () => {
    console.log(`\n[X] Client disconnected!!`);
  })

});