
/**
 * IAuthPayload defines structure for
 * authentication payloads from JWT
 *
 * @export
 * @interface IAuthPayload
 */
export interface IAuthPayload {
  email: string
  token: string
}

export class JSONWebToken implements IAuthPayload {

  private _email: string;
  private _token: string;

  get email() {
    return this._email
  }
  get token() {
    return this._token
  }

  constructor(email?: string, token?: string);
  constructor(email: string, token: string) {
    this._email = email;
    this._token = token;
  }
}
