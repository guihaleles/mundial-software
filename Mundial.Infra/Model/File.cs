using System;

namespace Mundial.Infra.Model
{
    public class File: MundialModel
    {
        public DateTime CreationFileDate {get; set;}

        public string Name { get; set; }

        // public int? CustomerAddressId {get; set;}

        public string City {get; set;}

        public string Street {get; set;}

        public string Neighborhood {get; set;}

        public int? HouseNumber {get; set;}

        public string Complement {get; set;}

        public string CEP {get; set;}
        
        // public Address CustomerAddress {get; set;}

        public string PhoneNumber {get; set;}

        public string Profession {get; set;}

        public float? Salary {get; set;}

        // public int? WorkAddressId {get; set;}

        public string WorkCity {get; set;}

        public string WorkStreet {get; set;}

        public string WorkNeighborhood {get; set;}

        public int? WorkNumber {get; set;}

        public string WorkComplement {get; set;}

        public string WorkCEP {get; set;}

        // public Address WorkAddress {get; set;}
     
        public int? CPF {get; set;}

        public string RG {get; set;}

        public string Work {get; set;}

        public DateTime? DateOfBirth { get; set; }

        public string PartnerName {get; set;}

        public string PartnerWork {get; set;}

        public string PartnerPhone {get; set;}

        public float? PartnerSalary {get; set;}

        public string ParentsObservation {get; set;}

        public string OthersStores {get; set;}

        public string FriendName {get; set;}

        public string FriendsPhone {get; set;}

        public string FileObservation {get; set;}

    }
}
