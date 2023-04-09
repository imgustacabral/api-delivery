import { Sender } from '../entities/sender';

export abstract class SendersRepository {
  abstract create(sender: Sender): Promise<void>;
}
