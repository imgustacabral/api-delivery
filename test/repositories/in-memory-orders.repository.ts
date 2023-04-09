import { Order } from 'src/app/entities/order';
import { OrdersRepository } from 'src/app/repositories/orders.repository';

export class InMemoryOrdersRepository implements OrdersRepository {
  public orders: Order[] = [];
  async create(order: Order): Promise<void> {
    this.orders.push(order);
  }
}
