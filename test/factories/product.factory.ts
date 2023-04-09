import { Product } from '../../src/app/entities/product';

export function makeProduct() {
  return new Product({
    name: 'Product',
    price: '129.90',
  });
}
