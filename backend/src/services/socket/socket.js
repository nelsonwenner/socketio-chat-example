const init = (socket) => {

  socket.on('connection', (socket) => {
    console.log(`Init connection: ID ${socket.id}`);
  });

}

export default init;