import { Address } from './address';
import { MundialModel } from './mundial-model';

export class File extends MundialModel {
  public Number: Number;

  public CreationFileDate: Date;

  public Name: String;

  public CustomerAddressId: Number;

  public CustomerAddress: Address;

  public PhoneNumber: String;

  public Profession: String;

  public Salary: Number;

  public WorkAddressId: Number;

  public WorkAddress: Address;

  public CPF: Number;

  public RG: Number;

  public Work: String;

  public DateOfBirth: Date;

  public PartnerName: String;

  public PartnerWork: String;

  public PartnerPhone: String;

  public PartnerSalary: Number;

  public ParentsObservation: String;

  public OthersStores: String;

  public FriendName: String;

  public FriendsPhone: String;

  public FileObservation: String;

  constructor(
    CreationDate: Date,
    Number: Number,
    CreationFileDate: Date,
    Name: String,
    CustomerAddressId: Number,
    CustomerAddress: Address,
    PhoneNumber: String,
    Profession: String,
    Salary: Number,
    WorkAddressId: Number,
    WorkAddress: Address,
    CPF: Number,
    RG: Number,
    Work: String,
    DateOfBirth: Date,
    PartnerName: String,
    PartnerWork: String,
    PartnerPhone: String,
    PartnerSalary: Number,
    ParentsObservation: String,
    OthersStores: String,
    FriendName: String,
    FriendsPhone: String,
    FileObservation: String
  ) {
    super(CreationDate);

    this.Number = Number;

    this.CreationFileDate = CreationFileDate;

    this.Name = Name;

    this.CustomerAddressId = CustomerAddressId;

    this.CustomerAddress = CustomerAddress;

    this.PhoneNumber = PhoneNumber;

    this.Profession = Profession;

    this.Salary = Salary;

    this.WorkAddressId = WorkAddressId;

    this.WorkAddress = WorkAddress;

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
