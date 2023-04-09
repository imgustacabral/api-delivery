import { InMemoryProductsRepository } from '../../../../test/repositories/in-memory-products.repository';
import { makeProduct } from '../../../../test/factories/product.factory';
import { CreateProduct } from './create-product';

describe('Create Product', () => {
  it('should be able to create a Product', async () => {
    const productsRepository = new InMemoryProductsRepository();
    const createProduct = new CreateProduct(productsRepository);

    await createProduct.execute(makeProduct());
    expect(productsRepository.products).toHaveLength(1);
  });
});
