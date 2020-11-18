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
                bool v = _context.Database.CanConnect();

                return _context.Salesmens
                            .Where(x => x.ExclutionDate == null)
                            .ToList();

            }
            catch(Exception e)
            {
                return new List<Salesman>();
            }
           
        }
    }
}
