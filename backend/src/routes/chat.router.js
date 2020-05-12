import router from './config.router';

export default [

  router.get('/', (req, res) => res.send({status: 'Server is up and running.'}).status(200)),

]