export class MundialModel {
  public Id?: Number;

  public CreationDate: Date;

  public ExclusionDate?: Date;

  constructor(creationDate: Date, exclusionDate?: Date, Id?: Number )
  {
    this.Id = Id;
    this.ExclusionDate = exclusionDate;
    this.CreationDate = creationDate;
  }
}
