import { MundialModel } from './abstract/mundial-model';

export class Product extends MundialModel {

    public Name: string;

    public Type: string;

    public Observation: string;

    public Value: number;

    constructor(creationDate: Date,number:number, name:string, type:string, observation:string, value:number, 
        Id?: number, exclusionDate?: Date)
    {
      super(creationDate, number, exclusionDate, Id);
  
      this.Name = name;
      this.Type = type;
      this.Observation = observation;
      this.Value = value;

    }
  

}
