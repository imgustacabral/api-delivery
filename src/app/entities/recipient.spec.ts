import { Recipient } from './recipient';

describe('Recipient', () => {
  it('should be able to create a Recipient', () => {
    const sender = new Recipient({
      firstName: 'Nome',
      lastName: 'Sobrenome',
      streetName: 'Rua um',
      city: 'Teresina',
      neighborhood: 'Vermelha',
      uf: 'PI',
      zipCode: '64080-105',
    });

    expect(sender).toBeTruthy;
  });
});
