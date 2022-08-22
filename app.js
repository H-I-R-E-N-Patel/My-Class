import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import DefaultRoute from './routes/defaultRoute.js';
import cors from 'cors';
import nodemon from 'nodemon';

const initializeMiddlewares = ()=>{
  app.use(
    cors({
      origin: true,
      methods: 'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE',
      allowedHeaders: 'Authorization, X-Custom-Header,*',
      credentials: false,
    })
  );
  app.options('*', cors());
}
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

const initializeRoutes = () => {
  const routes = [
    new DefaultRoute(),
    
  ]

  routes.forEach((route) => {
    app.use('/', route.router);
  });
}

function startServer(port) {
  initializeMiddlewares();
  initializeRoutes();
  app.listen(port, function(){
    console.log("Server is running on port " + port);
  }) 
}
startServer(3000);