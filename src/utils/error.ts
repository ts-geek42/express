interface ServerErrorPayload {
  code: number;
  message: string;
  cause?: any;
}

export class ServerError extends Error {
  code: number;
  message: string;
  cause: any;

  constructor({ code, message, cause }: ServerErrorPayload) {
    super();
    this.code = code;
    this.message = message;
    this.cause = cause;
  }
}

export default ServerError;
