using System;
using System.Collections.Generic;
using Mundial.Infra.Model;
using System.Linq;
using Microsoft.EntityFrameworkCore;
namespace Mundial.Infra.Repository
{
    public class ProductRepository: BaseRepository<Product>
    {
        private readonly DbSet<Product> _Productcontext;

        public ProductRepository(MundialContext context) : base(context)
        {
            _Productcontext = context.Set<Product>();
        }


        public override IQueryable<Product> GetItensSearchingAllColumns(string value)
        { 
            try
            {
                return _Productcontext.Where(x => (x.Name.Contains(value) ||
                x.Number.ToString().Contains(value) || x.Type.Contains(value))
                && x.ExclusionDate == null);
            }
            catch(Exception e)
            { 
                throw e;
            }
            
        }


    }
}
