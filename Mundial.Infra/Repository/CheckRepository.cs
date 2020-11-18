using System;
using System.Collections.Generic;
using Mundial.Infra.Model;
using System.Linq;
namespace Mundial.Infra.Repository
{
    public class CheckRepository
    {
        private readonly MundialContext _context;
        public CheckRepository(MundialContext context)
        {
            _context = context;
        }

        public bool CheckDataBase()
        {  
            try
            {
                bool v = _context.Database.CanConnect();
                return v;

            }
            catch(Exception e)
            {
                return false;
            }
           
        }
    }
}
