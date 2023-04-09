import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/Replace';

export interface ISender {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  zipCode: string;
  streetName: string;
  neighborhood: string;
  city: string;
  uf: string;
  createdAt: Date;
}
export class Sender {
  private props: ISender;
  private _id: string;
  constructor(props: Replace<ISender, { createdAt?: Date }>, id?: string) {
    this.props = { ...props, createdAt: props.createdAt ?? new Date() };
    this._id = id ?? randomUUID();
  }

  public get id() {
    return this._id;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get email() {
    return this.props.email;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get password() {
    return this.props.password;
  }

  public set firstName(firstName: string) {
    this.props.firstName = firstName;
  }

  public get firstName() {
    return this.props.firstName;
  }

  public set lastName(lastName: string) {
    this.props.lastName = lastName;
  }

  public get lastName() {
    return this.props.lastName;
  }

  public set zipCode(zipCode: string) {
    this.props.zipCode = zipCode;
  }

  public get zipCode() {
    return this.props.zipCode;
  }

  public set streetName(streetName: string) {
    this.props.streetName = streetName;
  }

  public get streetName() {
    return this.props.streetName;
  }

  public set neighborhood(neighborhood: string) {
    this.props.neighborhood = neighborhood;
  }

  public get neighborhood() {
    return this.props.neighborhood;
  }

  public set city(city: string) {
    this.props.city = city;
  }

  public get city() {
    return this.props.city;
  }

  public set uf(uf: string) {
    this.props.uf = uf;
  }

  public get uf() {
    return this.props.uf;
  }

  public get createdAt() {
    return this.props.createdAt;
  }
}
