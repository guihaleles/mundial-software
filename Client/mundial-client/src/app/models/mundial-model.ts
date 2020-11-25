export class MundialModel {
  public Id?: Number;

  public CreationDate: Date;

  public ExclusionDate?: Date;

  constructor(creationDate: Date)
  {
    this.ExclusionDate = new Date(0);
    this.CreationDate = creationDate;
  }
}
