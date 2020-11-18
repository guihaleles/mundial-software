using System;
using System.Collections.Generic;
using System.Linq;
using Mundial.Infra.Model;
using Mundial.Infra.Repository;

namespace Mundial.Domain.Service.Concrete
{
    public class SalesmanService
    {
        private readonly SalesmanRepository _salesmanRepository;
        public SalesmanService(SalesmanRepository salesmanRepository)
        {
            _salesmanRepository = salesmanRepository;
        }
        
        public IEnumerable<Salesman> GetSalesmen(string search)
        {
            return _salesmanRepository.GetAllSalesman();
            // return Enumerable.Range(1, 5).Select(index => new Salesman
            // {
            //     CreationDate = DateTime.Now.AddDays(index),
            //     Name = "Nome",
            //     Number =index
            // })
            // .ToArray();
        }


    }
}
