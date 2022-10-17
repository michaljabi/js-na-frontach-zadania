export class BaseHttpError extends Error {
  code: number;
  name: string;
  constructor(message: string, code: number, name: string) {
    super(message);
    this.code = code;
    this.name = name;
  }
}

