export class MundialModel {
  public Id?: Number;

  public CreationDate: Date;

  public ExclusionDate?: Date;

  public Number?: Number;



  constructor(creationDate: Date, number?: Number, exclusionDate?: Date, Id?: Number )
  {
    this.Id = Id;
    this.Number = number;
    this.ExclusionDate = exclusionDate;
    this.CreationDate = creationDate;
  }

 
}
