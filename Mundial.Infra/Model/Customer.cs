using System;

namespace Mundial.Infra.Model
{
    public class Customer
    {
        public int FileNumber {get; set;}

        public DateTime CreationDate {get; set;}

        public string Name { get; set; }

        public Address CustomerAddress {get; set;}

        public DateTime? DateOfBirth { get; set; }
     
        public int? CPF {get; set;}

        public int ID {get; set;}

        public string PhoneNumber {get; set;}

        public string Profession {get; set;}

        public string Salary {get; set;}

        public string Work {get; set;}

        public string OtherInformations {get; set;}        
    }
}
