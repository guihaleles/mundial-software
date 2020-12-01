import { MundialModel } from './mundial-model';

export class Salesman extends MundialModel {

  public Number : Number;

  public Name : String;

  constructor(creationDate: Date,number:Number, name:String, Id?: Number, exclusionDate?: Date,  )
  {
    super(creationDate, exclusionDate, Id);

    this.Number = number;

    this.Name = name;
  }

  static objectToSalesman(item: any): Salesman{
    return new Salesman(item.creationDate, item.number, item.name, item.id, item.exclusionDate)
  }

  static objectsToSalesman(itens: any[]): Salesman[]{
    let salesmanArray:Salesman[] = [];
    
    itens.forEach((item)=> {
      salesmanArray.push(new Salesman(item.creationDate, item.number,
         item.name, item.id, item.exclusionDate))
    })

    return salesmanArray;
  }

}
