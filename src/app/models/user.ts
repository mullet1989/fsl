import { IHasId } from "./IHasId";

export class User implements IHasId {

  constructor()
  constructor(id: Number, email: string)
  constructor(id?: Number, email?: string) {
    this.ID = id;
    this.email = email;
  }

  ID: Number;
  email: string = "";
}
