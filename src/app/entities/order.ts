import { randomUUID } from 'node:crypto';
import { Product } from './product';
import { Recipient } from './recipient';
import { Sender } from './sender';

export interface IOrder {
  sender: Sender;
  recipient: Recipient;
  products: Product[];
}

export class Order {
  private props: IOrder;
  private _id: string;

  private validateProductQuantity(products: Product[]) {
    return products.length > 0;
  }
  constructor(props: IOrder, id?: string) {
    const isValidProductQuantity = this.validateProductQuantity(props.products);

    if (!isValidProductQuantity) {
      throw new Error('An order should have at least one product');
    }
    this.props = { ...props };
    this._id = id ?? randomUUID();
  }

  public get id() {
    return this._id;
  }

  public get sender() {
    return this.props.sender;
  }

  public get recipient() {
    return this.props.recipient;
  }

  public get products() {
    return this.props.products;
  }
}
