import { randomUUID } from 'node:crypto';
import { IProduct } from './product';
import { Recipient } from './recipient';
import { Sender } from './sender';

export interface IOrder {
  sender: Sender;
  recipient: Recipient;
  products: IProduct[];
}

export class Order {
  private props: IOrder;
  private _id: string;
  constructor(props: IOrder, id?: string) {
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
