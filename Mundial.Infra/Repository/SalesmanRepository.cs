using System;
using System.Collections.Generic;
using Mundial.Infra.Model;
using System.Linq;
namespace Mundial.Infra.Repository
{
    public class SalesmanRepository
    {
        private readonly MundialContext _context;
        public SalesmanRepository(MundialContext context)
        {
            _context = context;
        }

        public IEnumerable<Salesman> GetAllSalesman()
        {  
            try
            {
                var salesmanList = _context.Salesmans
                                    .Where(x => x.Id > 0)
                                    .ToList();
                return salesmanList;
            }
            catch(Exception e)
            {
                return new List<Salesman>();
            }
           
        }

        public IEnumerable<Salesman> GetAllSalesmanByNumber(int number)
        { 
            try
            {
                var salesmanList = _context.Salesmans
                                    .Where(x => x.Number == number)
                                    .ToList(); 
                return salesmanList;
            }
            catch(Exception e)
            {
                return new List<Salesman>();
            }
            
        }
        
        public bool PutSalesman(Salesman item)
        {
            try
            {
                _context.Salesmans.Add(item);
               
                var numberOfItens = _context.SaveChanges();
                
                return numberOfItens > 0 ? true : false;

            }
            catch(Exception e)
            {
                return false;
            }
        }
    }
}
