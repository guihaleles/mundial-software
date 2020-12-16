using System;
using System.Collections.Generic;

namespace Mundial.Infra.Model
{
    public class ServiceOrder: MundialModel
    {
        public int? SalesmanId {get; set;}
        
        public Salesman Salesman {get; set;}

        public int? FileId {get; set;}

        public File File {get; set;}

        public string Patient {get; set;}
        
        public IEnumerable<Installment> Installments {get; set;} 

        public string CreditCard {get; set;}

        public float? EsfericOD {get; set;}

        public float? CilindricOD {get; set;}

        public float? AxisOD {get; set;}

        public float? DNPOD {get; set;}

        public float? ACOOD {get; set;}

        public float? EyelidOD {get; set;}

        public float? EsfericOE {get; set;}

        public float? CilindricOE {get; set;}

        public float? AxisOE {get; set;}

        public float? DNPOE {get; set;}

        public float? ACOOE {get; set;}

        public float? EyelidOE {get; set;}
        
        public float? Vertical {get; set;}

        public float? Horizontal {get; set;}

        public float? Diagonal {get; set;}

        public float? Ponte {get; set;}

        public string Observation {get; set;}
    }
}
