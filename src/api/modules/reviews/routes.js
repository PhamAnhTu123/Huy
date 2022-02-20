import ReviewHandler from './handler';

export default class ReviewRoutes {
  constructor(server) {
    this.handler = new ReviewHandler(server);
    const routes = this.bindRoutes();
    server.route(routes);
  }

  bindRoutes() {
    const routes = [
      {
        method: 'POST',
        path: '/api/v1/orders',
        options: this.handler.addOne,
      },
      {
        method: 'GET',
        path: '/api/v1/orders',
        options: this.handler.getMany,
      },
      {
        method: 'Get',
        path: '/api/v1/bussinesses/{id}/orders',
        options: this.handler.getReviewOfBussiness,
      },
    ];
    return routes;
  }
}
