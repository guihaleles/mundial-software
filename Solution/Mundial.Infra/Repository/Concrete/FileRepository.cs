using System;
using System.Collections.Generic;
using Mundial.Infra.Model;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using LinqKit;

namespace Mundial.Infra.Repository
{
    public class FileRepository: BaseRepository<File>
    {
        private readonly DbSet<File> _Filecontext;

        public FileRepository(MundialContext context) : base(context)
        {
            _Filecontext = context.Set<File>();
        }

        public override IQueryable<File> GetItensSearchingAllColumns(string value)
        {           
            try
            {
                var predicate = PredicateBuilder.New<File>();

                //Todo: colocar um switch com a maioria dos campos e uma escolha vinda do front
                predicate.Or(x => x.Id.ToString().Contains(value));
                predicate.Or(x => x.Name.Contains(value));
                predicate.Or(x => x.City.Contains(value));
                predicate.Or(x => x.Neighborhood.Contains(value));
                predicate.Or(x => x.Street.Contains(value));
                predicate.And(x => x.ExclusionDate == null);
                
                return _Filecontext.Where(predicate);
            }
            catch(Exception e)
            { 
                throw e;
            }
         
        }
    }
}


