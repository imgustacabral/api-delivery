import { makeProduct } from '../../../test/factories/product.factory';
import { makeSender } from '../../../test/factories/sender.factory';
import { makeRecipient } from '../../../test/factories/recipient.factory';
import { Order } from './order';

describe('Order', () => {
  it('should be able to create a Order', () => {
    const order = new Order({
      sender: makeSender(),
      recipient: makeRecipient(),
      products: [makeProduct()],
    });

    expect(order).toBeTruthy;
  });

  it('should be able to create a Order with more than one product', () => {
    const order = new Order({
      sender: makeSender(),
      recipient: makeRecipient(),
      products: [makeProduct(), makeProduct()],
    });

    expect(order.products).toHaveLength(2);
  });
});
