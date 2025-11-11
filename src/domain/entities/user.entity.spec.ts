import { DocumentNumber } from '../value-objects/document-number.vo';
import { Email } from '../value-objects/email.vo';
import { User } from './user.entity';

describe('User', () => {
  it('should create a user with all properties', () => {
    const email = new Email('test@example.com');
    const documentNumber = new DocumentNumber('051.499.355-30');
    const user = new User({
      id: '1',
      name: 'John Doe',
      email: email,
      phoneArea: '11',
      phone: '99999-9999',
      documentNumber: documentNumber,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    expect(user.id).toBe('1');
    expect(user.name).toBe('John Doe');
    expect(user.email.getValue()).toBe('test@example.com');
  });
});
