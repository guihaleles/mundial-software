import { MundialModel } from './mundial-model';

export class Salesman extends MundialModel {

  public Number : Number;

  public Name : String;

  constructor(creationDate: Date,number:Number, name:String)
  {
    super(creationDate);

    this.Number = number;

    this.Name = name;
  }
}
