export class DocumentNumber {
  private readonly value: string;

  constructor(documentNumber: string) {
    const cleanDoc = this.cleanDocument(documentNumber);

    if (!this.isValid(cleanDoc)) {
      throw new Error('Número de documento inválido');
    }

    this.value = cleanDoc;
  }

  private cleanDocument(documentNumber: string): string {
    return documentNumber.replace(/[^\d]/g, '');
  }

  private isValid(documentNumber: string): boolean {
    if (documentNumber.length === 11) {
      return this.isValidCPF(documentNumber);
    }

    if (documentNumber.length === 14) {
      return this.isValidCNPJ(documentNumber);
    }

    return false;
  }

  private isValidCPF(cpf: string): boolean {
    // Verifica se todos os d�gitos s�o iguais
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }

    // Valida primeiro d�gito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digit = 11 - (sum % 11);
    if (digit >= 10) digit = 0;
    if (digit !== parseInt(cpf.charAt(9))) {
      return false;
    }

    // Valida segundo d�gito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    digit = 11 - (sum % 11);
    if (digit >= 10) digit = 0;
    if (digit !== parseInt(cpf.charAt(10))) {
      return false;
    }

    return true;
  }

  private isValidCNPJ(cnpj: string): boolean {
    // Verifica se todos os d�gitos s�o iguais
    if (/^(\d)\1+$/.test(cnpj)) {
      return false;
    }

    // Valida primeiro d�gito verificador
    let sum = 0;
    let weight = 5;
    for (let i = 0; i < 12; i++) {
      sum += parseInt(cnpj.charAt(i)) * weight;
      weight = weight === 2 ? 9 : weight - 1;
    }
    let digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (digit !== parseInt(cnpj.charAt(12))) {
      return false;
    }

    // Valida segundo d�gito verificador
    sum = 0;
    weight = 6;
    for (let i = 0; i < 13; i++) {
      sum += parseInt(cnpj.charAt(i)) * weight;
      weight = weight === 2 ? 9 : weight - 1;
    }
    digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (digit !== parseInt(cnpj.charAt(13))) {
      return false;
    }

    return true;
  }

  getValue(): string {
    return this.value;
  }

  isCPF(): boolean {
    return this.value.length === 11;
  }

  isCNPJ(): boolean {
    return this.value.length === 14;
  }

  getFormatted(): string {
    if (this.isCPF()) {
      return this.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    if (this.isCNPJ()) {
      return this.value.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        '$1.$2.$3/$4-$5',
      );
    }

    return this.value;
  }
}
