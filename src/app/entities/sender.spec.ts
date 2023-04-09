import { Sender } from './sender';

describe('Sender', () => {
  it('should be able to create a sender', () => {
    const sender = new Sender({
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

    expect(sender).toBeTruthy;
  });
});
