import { Email } from './email.vo';

describe('Email', () => {
  it('should create a valid email', () => {
    const email = new Email('test@example.com');
    expect(email.getValue()).toBe('test@example.com');
  });

  it('should throw an error for invalid email', () => {
    expect(() => new Email('invalid-email')).toThrow('E-mail inválido');
  });

  it('should convert email to lowercase', () => {
    const email = new Email('TEST@EXAMPLE.COM');
    expect(email.getValue()).toBe('test@example.com');
  });
});
