using System;
using System.Collections.Generic;
using System.Linq;
using Mundial.Infra.Model;
using Mundial.Infra.Repository;

namespace Mundial.Domain.Service.Concrete
{
    public class SalesmanService: BaseService<Salesman>
    {
        private readonly SalesmanRepository _salesmanRepository;
        public SalesmanService(SalesmanRepository salesmanRepository): base(salesmanRepository)
        {
            _salesmanRepository = salesmanRepository;
        }
        
    }
}
