import Service from '../../core/Service';
import Order from '../../../database/models/Order';

export default class ReviewService extends Service {
  constructor() {
    super();
    this.model = Order;
  }

  async createReview(payload, userId) {
    const order = await this.model.create({
      ...payload,
      user: userId,
    });
    return order;
  }

  async getReviewOfBussiness(id, query) {
    query.filter = {
      ...query.filter,
      bussiness: id,
    };
    const orders = await this.model.queryBuilder(query, ['user']);
    return orders;
  }
}
