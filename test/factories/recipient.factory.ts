import { Recipient } from '../../src/app/entities/recipient';

export function makeRecipient() {
  return new Recipient({
    firstName: 'Nome',
    lastName: 'Sobrenome',
    streetName: 'Rua um',
    city: 'Teresina',
    neighborhood: 'Vermelha',
    uf: 'PI',
    zipCode: '64080-105',
  });
}
