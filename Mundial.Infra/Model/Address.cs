using System;

namespace Mundial.Infra.Model
{
    public class Address: MundialModel
    {
        public string City {get; set;}

        public string Street {get; set;}

        public string Neighborhood {get; set;}

        public int HouseNumber {get; set;}

        public string Complement {get; set;}

        public string CEP {get; set;}
    }
}
