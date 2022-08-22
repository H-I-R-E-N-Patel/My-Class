import express from 'express';
import DefaultController from '../controllers/defaultController.js';
import API from '../constants/end-points.js'
class DefaultRoute{
  router = express.Router();
  defaultController = new DefaultController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(
      `${API.API}/test`,
      this.defaultController.first
    );
  }

}

export default DefaultRoute;