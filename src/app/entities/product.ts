import { randomUUID } from 'node:crypto';

export interface IProduct {
  name: string;
  price: string;
}

export class Product {
  private props: IProduct;
  private _id: string;
  constructor(props: IProduct, id?: string) {
    this.props = { ...props };
    this._id = id ?? randomUUID();
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get price() {
    return this.props.price;
  }

  public set price(price: string) {
    this.props.price = price;
  }
}
