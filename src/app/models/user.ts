import { IHasId } from "./IHasId";

export class User implements IHasId {

  constructor()
  constructor(id: Number, name: string)
  constructor(id?: Number, name?: string) {
    this.ID = id;
    this.name = name;
  }

  ID: Number;
  name: string = "";
}
