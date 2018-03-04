import { ISearchable } from "./isearchable";

export class Athlete implements ISearchable {
  athleteId: Number;
  firstname: string;
  lastname: string;

  name: string;
}
