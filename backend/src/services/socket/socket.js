import wss from '../../App';

wss.socket('connect', (socket) => {

  console.log(`\n[X] Client connected...`);

});