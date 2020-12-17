import { MundialModel } from './abstract/mundial-model';
import { Product } from './product';

export class Installment extends MundialModel {
    public ServiceOrderId?: number;
    public ProductId?: number;
    public Product?: Product 
    public OriginalValue?: number;
    public NewValue?: number; 
    public DivisionNumber?: number; 
    public PaidValue?: number; 
    public Observation?: string;

    constructor(creationDate: Date,number:number,Id?: number, exclusionDate?: Date,
        serviceOrderID?: number, productId?:number, product?: Product,
        originalValue?:number, newValue?: number,divisionNumber?: number, 
        paidValue?:number,observation?:string )
    {
      super(creationDate, number, exclusionDate, Id);
      this.ServiceOrderId = serviceOrderID;
      this.ProductId = productId;
      this.Product = product;
      this.OriginalValue = originalValue;
      this.NewValue = newValue;
      this.DivisionNumber = divisionNumber;
      this.PaidValue = paidValue;
      this.Observation = observation;
    }
}
