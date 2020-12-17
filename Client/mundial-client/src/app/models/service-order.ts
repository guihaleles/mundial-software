
import { MundialModel } from './abstract/mundial-model';
import { Installment } from './installment';
import { Salesman } from './salesman';
import { File } from './file';

export class ServiceOrder extends MundialModel{
    
    public SalesmanId?: number; 

    public Salesman?: Salesman;

    public FileId?: number; 

    public File?: File; 

    public Patient?: string; 

    public Installments?: Array<Installment>;

    public CreditCard?: string; 

    public  EsfericOD?: number;

    public  CilindricOD?: number;  

    public  AxisOD?: number; 

    public  DNPOD?: number; 

    public  ACOOD?: number; 

    public  EyelidOD?: number; 

    public  EsfericOE?: number; 

    public  CilindricOE?: number; 

    public  AxisOE?: number; 

    public  DNPOE?: number; 

    public  ACOOE?: number; 

    public  EyelidOE?: number; 

    public  Vertical?: number; 

    public  Horizontal?: number; 

    public  Diagonal?: number; 

    public  Ponte?: number; 

    public  Observation?: string; 

    constructor(
      creationDate: Date,

      number:number, 
      
      id?: number, 
      
      exclusionDate?: Date, 
      
      file?: File,

      fileId?: number, 

      salesman?: Salesman,

      salesmanId?: number,  

      patient?: string, 

      installments?: Array<Installment>,  

      creditCard?: string, 

      esfericOD?: number,

      cilindricOD?: number,  

      axisOD?: number, 

      dNPOD?: number, 

      aCOOD?: number, 

      eyelidOD?: number, 

      esfericOE?: number, 

      cilindricOE?: number, 

      axisOE?: number, 

      dNPOE?: number, 

      aCOOE?: number, 

      eyelidOE?: number, 

      vertical?: number, 

      horizontal?: number, 

      diagonal?: number, 

      ponte?: number, 

      observation?: string, 

    ){
        super(creationDate, number, exclusionDate,id);

        
      this.File = file;

      this.Salesman = salesman;

      this.SalesmanId = salesmanId; 

      this.FileId = fileId;  

      this.Patient = patient,
      
      this.Installments = installments,

      this.CreditCard = creditCard; 

      this.EsfericOD = esfericOD;

      this.CilindricOD = cilindricOD  

      this.AxisOD = axisOD; 

      this.DNPOD = dNPOD; 

      this.ACOOD = aCOOD;

      this.EyelidOD = eyelidOD; 

      this.EsfericOE= esfericOE; 

      this.CilindricOE = cilindricOE; 

      this.AxisOE = axisOE; 

      this.DNPOE = dNPOE, 

      this.ACOOE = aCOOE; 

      this.EyelidOE = eyelidOE; 

      this.Vertical = vertical; 

      this.Horizontal = horizontal; 

      this.Diagonal = diagonal; 

      this.Ponte = ponte;

      this.Observation = observation; 

     
    }
}
