import { Sender } from '../../src/app/entities/sender';

export function makeSender() {
  return new Sender({
    email: 'teste@gmail.com',
    password: 'sadaskasjd',
    firstName: 'Nome',
    lastName: 'Sobrenome',
    streetName: 'Rua um',
    city: 'Teresina',
    neighborhood: 'Vermelha',
    uf: 'PI',
    zipCode: '64080-105',
  });
}
