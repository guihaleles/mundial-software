using System;

namespace Mundial.Infra.Model
{
    public class Customer: MundialModel
    {
        public string Name {get; set;}
        public File CustomerFile {get; set;}
        public string OtherInformations {get; set;}        
    }
}
