import { Product } from '../entities/product';

export abstract class ProductsRepository {
  abstract create(product: Product): Promise<void>;
}
