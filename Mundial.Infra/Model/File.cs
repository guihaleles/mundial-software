using System;

namespace Mundial.Infra.Model
{
    public class File
    {
        public int Number {get; set;}

        public DateTime CreationDate {get; set;}

        public string Name { get; set; }

        public Address CustomerAddress {get; set;}

        public string PhoneNumber {get; set;}

        public string Profession {get; set;}

        public string Salary {get; set;}
        
        public Address WorkAddress {get; set;}
     
        public int? CPF {get; set;}

        public int ID {get; set;}

        public string Work {get; set;}

        public DateTime? DateOfBirth { get; set; }

        public string Partner {get; set;}

        public string PartnerWork {get; set;}

        public string PartnerPhone {get; set;}

        public float PartnerSalary {get; set;}

        public string ParentsObservation {get; set;}

        public string OthersStores {get; set;}

        public string Friend {get; set;}

        public string FriendsPhone {get; set;}

    }
}
