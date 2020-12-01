using System;
using System.Collections.Generic;
using Mundial.Infra.Model;
using System.Linq;
using Microsoft.EntityFrameworkCore;
namespace Mundial.Infra.Repository
{
    public class SalesmanRepository: BaseRepository<Salesman>
    {
        private readonly DbSet<Salesman> _SalesMancontext;

        public SalesmanRepository(MundialContext context) : base(context)
        {
            _SalesMancontext = context.Set<Salesman>();
        }

        public IEnumerable<Salesman> GetAllValidSalesmanByNumber(int number)
        { 
            try
            {
                var salesmanList = _SalesMancontext
                                    .Where(x => x.Number == number && x.ExclusionDate == null)
                                    .ToList(); 
                return salesmanList;
            }
            catch(Exception e)
            {   
                throw e;
            }
            
        }

        public IEnumerable<Salesman> GetAllSalesmanByNumber(int number)
        { 
            try
            {
                var salesmanList = _SalesMancontext
                                    .Where(x => x.Number == number)
                                    .ToList(); 
                return salesmanList;
            }
            catch(Exception e)
            {   
                throw e;
            }
            
        }


    }
}
