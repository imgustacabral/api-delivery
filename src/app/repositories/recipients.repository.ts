import { Recipient } from '../entities/recipient';

export abstract class SendersRepository {
  abstract create(recipient: Recipient): Promise<void>;
}
