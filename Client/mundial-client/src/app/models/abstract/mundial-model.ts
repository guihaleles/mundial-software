export abstract class MundialModel {
  public Id?: number;

  public CreationDate: Date;

  public ExclusionDate?: Date;

  public Number?: number;



  constructor(creationDate: Date, number?: number, exclusionDate?: Date, Id?: number )
  {
    this.Id = Id;
    this.Number = number;
    this.ExclusionDate = exclusionDate;
    this.CreationDate = creationDate;
  }


}
