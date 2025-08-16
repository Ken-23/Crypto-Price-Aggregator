export class SuccessResponse<T = any> {
  message: string;
  success: boolean;
  data: T;

  constructor(message: string, data: T) {
    this.message = message;
    this.success = true;
    this.data = data;
  }
}
