using System;

namespace Mundial.Infra.Model
{
    public class ServiceOrder
    {
        public int Number {get; set;}

        public Salesman Salesman {get; set;}

        public Customer Customer {get; set;}

        public string Patient {get; set;}

        public Product Product {get; set;}

        public string CreditCard {get; set;}

        public float EsfericOD {get; set;}

        public float CilindricOD {get; set;}

        public float AxisOD {get; set;}

        public float DNPOD {get; set;}

        public float ACOOD {get; set;}

        public float EyelidOD {get; set;}

        public float EsfericOE {get; set;}

        public float CilindricOE {get; set;}

        public float AxisOE {get; set;}

        public float DNPOE {get; set;}

        public float ACOOE {get; set;}

        public float EyelidOE {get; set;}
        
        public float Vertical {get; set;}

        public float Horizontal {get; set;}

        public float Diagonal {get; set;}

        public float Ponte {get; set;}
    }
}
