import { MundialModel } from './abstract/mundial-model';

export class Salesman extends MundialModel {

  public Name : string;

  constructor(creationDate: Date,number:number, name:string, Id?: number, exclusionDate?: Date,  )
  {
    super(creationDate, number, exclusionDate, Id);

    this.Name = name;
  }

  static objectToSalesman(item: any): Salesman{
    return new Salesman(item.creationDate, item.number, item.name, item.id, item.exclusionDate)
  }

  static objectsToSalesman(itens: any[]): Salesman[]{
    let salesmanArray:Salesman[] = [];
    console.log(itens);
    
    itens.forEach((item)=> {
      salesmanArray.push(new Salesman(item.creationDate, item.number,
         item.name, item.id, item.exclusionDate))
    })

    return salesmanArray;
  }


}
