import { MundialModel } from './abstract/mundial-model';

export class File extends MundialModel {

  public CreationFileDate: Date;

  public Name: string;

  // public CustomerAddressId: number;

  // public CustomerAddress? Address;
  public City?: string;

  public Street?: string; 

  public Neighborhood?: string; 

  public HouseNumber?: number; 

  public Complement?: string; 

  public CEP?: string;

  public PhoneNumber?: string;

  public Profession?: string;

  public Salary?: number;

  // public WorkAddressId?: number;

  // public WorkAddress?: Address;

  public WorkCity?: string;

  public WorkStreet?: string; 

  public WorkNeighborhood?: string; 

  public WorkNumber?: number; 

  public WorkComplement?: string; 

  public WorkCEP?: string;

  public CPF?: number;

  public RG?: string;

  public Work?: string;

  public DateOfBirth?: Date;

  public PartnerName?: string;

  public PartnerWork?: string;

  public PartnerPhone?: string;

  public PartnerSalary?: number;

  public ParentsObservation?: string;

  public OthersStores?: string;

  public FriendName?: string;

  public FriendsPhone?: string;

  public FileObservation?: string;

  constructor(
    Id: number,
    CreationDate: Date,
    ExclusionDate: Date,
    Number: number,
    CreationFileDate: Date,
    Name: string,
    // CustomerAddressId?: number,
    // CustomerAddress?: Address,
    City?: string,
    Street?: string,   
    Neighborhood?: string,  
    HouseNumber?: number,   
    Complement?: string,
    CEP?: string,
    PhoneNumber?: string,
    Profession?: string,
    Salary?: number,
    // WorkAddressId?: number,
    // WorkAddress?: Address,
    WorkCity?: string,
    WorkStreet?: string,   
    WorkNeighborhood?: string,  
    WorkNumber?: number,   
    WorkComplement?: string,
    WorkCEP?: string,
    CPF?: number,
    RG?: string,
    Work?: string,
    DateOfBirth?: Date,
    PartnerName?: string,
    PartnerWork?: string,
    PartnerPhone?: string,
    PartnerSalary?: number,
    ParentsObservation?: string,
    OthersStores?: string,
    FriendName?: string,
    FriendsPhone?: string,
    FileObservation?: string
  ) {
    super(CreationDate, Number, ExclusionDate,Id);

    this.Number = Number;

    this.CreationFileDate = CreationFileDate;

    this.Name = Name;

    // this.CustomerAddressId = CustomerAddressId;

    // this.CustomerAddress = CustomerAddress;

    this.City = City;

    this.Street = Street; 

    this.Neighborhood = Neighborhood;  

    this.HouseNumber = HouseNumber; 

    this.Complement = Complement;

    this.CEP = CEP;

    this.PhoneNumber = PhoneNumber;

    this.Profession = Profession;

    this.Salary = Salary;

    // this.WorkAddressId = WorkAddressId;

    // this.WorkAddress = WorkAddress;

    this.WorkCity = WorkCity;

    this.WorkStreet = WorkStreet; 

    this.WorkNeighborhood = WorkNeighborhood;  

    this.WorkNumber = WorkNumber; 

    this.WorkComplement = WorkComplement;

    this.WorkCEP = WorkCEP;

    this.CPF = CPF;

    this.RG = RG;

    this.Work = Work;

    this.DateOfBirth = DateOfBirth;

    this.PartnerName = PartnerName;

    this.PartnerWork = PartnerWork;

    this.PartnerPhone = PartnerPhone;

    this.PartnerSalary = PartnerSalary;

    this.ParentsObservation = ParentsObservation;

    this.OthersStores = OthersStores;

    this.FriendName = FriendName;

    this.FriendsPhone = FriendsPhone;

    this.FileObservation = FileObservation;
  }

  
}
