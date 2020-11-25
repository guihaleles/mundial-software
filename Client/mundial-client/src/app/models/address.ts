import { MundialModel } from './mundial-model';

export class Address extends MundialModel {
  public City: String;

  public Street: String;

  public Neighborhood: String;

  public HouseNumber: Number;

  public Complement: String;

  public CEP: String;


	constructor(City: String, Street: String,  Neighborhood: String, HouseNumber: Number,
              Complement: String,  CEP: String, CreationDate: Date)
  {

    super(CreationDate);

    this.City = City;
    this.Street = Street;
    this.CEP = CEP;
    this.Neighborhood = Neighborhood;
    this.HouseNumber = HouseNumber;
    this.Complement = Complement;
  }

}
