import { DocumentNumber } from './document-number.vo';

describe('DocumentNumber', () => {
  it('should create a valid CPF', () => {
    const cpf = new DocumentNumber('794.705.460-67');
    expect(cpf).toBeInstanceOf(DocumentNumber);
  });

  it('should create a valid CNPJ', () => {
    const cnpj = new DocumentNumber('12.345.678/0001-95');
    expect(cnpj).toBeInstanceOf(DocumentNumber);
  });

  it('should throw an error for invalid CPF', () => {
    expect(() => new DocumentNumber('123.456.789-00')).toThrow(
      'Número de documento inválido',
    );
  });

  it('should throw an error for invalid CNPJ', () => {
    expect(() => new DocumentNumber('12.345.678/0001-00')).toThrow(
      'Número de documento inválido',
    );
  });

  it('should throw an error for invalid length', () => {
    expect(() => new DocumentNumber('123456')).toThrow(
      'Número de documento inválido',
    );
  });
});
