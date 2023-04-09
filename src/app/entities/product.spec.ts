import { Product } from './product';

describe('Product', () => {
  it('should be able to create a Product', () => {
    const product = new Product({
      name: 'Product',
      price: '129.90',
    });

    expect(product).toBeTruthy;
  });
});
