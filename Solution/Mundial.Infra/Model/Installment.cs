using System;

namespace Mundial.Infra.Model
{
    public class Installment: MundialModel
    {
        public int ServiceOrderId {get; set;}
        public int ProductId {get; set;}
        public Product Product {get; set;}
        public float OriginalValue {get; set;}
        public float NewValue {get; set;}
        public int DivisionNumber {get; set;}
        public float PaidValue {get; set;}
        public string Observation {get; set;}
    }
}