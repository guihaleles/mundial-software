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
                throw e;
            }
           
        }

        public IEnumerable<Salesman> GetAllValidSalesmanByNumber(int number)
        { 
            try
            {
                var salesmanList = _context.Salesmans
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
                var salesmanList = _context.Salesmans
                                    .Where(x => x.Number == number)
                                    .ToList(); 
                return salesmanList;
            }
            catch(Exception e)
            {   
                throw e;
            }
            
        }

        public IEnumerable<Salesman> GetSalesmanById(int id)
        { 
            try
            {
                var salesmanList = _context.Salesmans
                                    .Where(x => x.Id == id)
                                    .ToList(); 
                return salesmanList;
            }
            catch(Exception e)
            {   
                throw e;
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
                throw e;
            }
        }

        public bool DeleteSalesman(int id)
        {
            try
            {
                var itenToExclud = _context.Salesmans.Where(x => x.Id == id).Single();

                itenToExclud.ExclusionDate = DateTime.UtcNow;
               
                var numberOfItens = _context.SaveChanges();
                
                return numberOfItens > 0 ? true : false;

            }
            catch(Exception e)
            {
                throw e;
            }
        }
    }
}
