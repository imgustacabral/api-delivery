import { Product } from 'src/app/entities/product';
import { ProductsRepository } from 'src/app/repositories/products.repository';

export class InMemoryProductsRepository implements ProductsRepository {
  public products: Product[] = [];
  async create(order: Product): Promise<void> {
    this.products.push(order);
  }
}
