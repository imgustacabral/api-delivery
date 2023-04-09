import { makeProduct } from '../../../test/factories/product.factory';
import { makeSender } from '../../../test/factories/sender.factory';
import { makeRecipient } from '../../../test/factories/recipient.factory';
import { Order } from './order';

describe('Order', () => {
  it('should be able to create a order', () => {
    const order = new Order({
      sender: makeSender(),
      recipient: makeRecipient(),
      products: [makeProduct()],
    });

    expect(order).toBeTruthy;
  });

  it('should not be able to create a order without a product', () => {
    expect(() => {
      new Order({
        sender: makeSender(),
        recipient: makeRecipient(),
        products: [],
      });
    }).toThrow();
  });

  it('should be able to create a order with more than one product', () => {
    const order = new Order({
      sender: makeSender(),
      recipient: makeRecipient(),
      products: [makeProduct(), makeProduct()],
    });

    expect(order.products).toHaveLength(2);
  });
});
