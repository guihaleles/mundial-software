using System;
using System.Collections.Generic;
using System.Linq;
using Mundial.Infra.Model;

namespace Mundial.Domain.Service.Concrete
{
    public class SalesmanService
    {
        public SalesmanService(){}
        
        public IEnumerable<Salesman> GetSalesmen(string search)
        {
            return Enumerable.Range(1, 5).Select(index => new Salesman
            {
                CreationDate = DateTime.Now.AddDays(index),
                Name = "Nome",
                Number =index
            })
            .ToArray();
        }

    }
}
