import { randomUUID } from 'node:crypto';
import { DocumentNumber } from '../value-objects/document-number.vo';
import { Email } from '../value-objects/email.vo';

interface UserProps {
  id: string;
  name: string;
  email: Email;
  phoneArea: string;
  phone: string;
  documentNumber?: DocumentNumber;
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  private props: UserProps;

  constructor(props: UserProps) {
    this.props = {
      ...props,
      id: props.id ?? randomUUID(),
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  get id(): string {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get email(): Email {
    return this.props.email;
  }

  get phoneArea(): string {
    return this.props.phoneArea;
  }

  get phone(): string {
    return this.props.phone;
  }

  get documentNumber(): DocumentNumber | undefined {
    return this.props.documentNumber;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }
}
