using System;
using System.Collections.Generic;
using Mundial.Infra.Model;
using System.Linq;
using Microsoft.EntityFrameworkCore;
namespace Mundial.Infra.Repository
{
    public class ServiceOrderRepository: BaseRepository<ServiceOrder>
    {
        private readonly DbSet<ServiceOrder> _ServiceOrdercontext;

        public ServiceOrderRepository(MundialContext context) : base(context)
        {
            _ServiceOrdercontext = context.Set<ServiceOrder>();
        }

        public override IQueryable<ServiceOrder> GetItensSearchingAllColumns(string value)
        {
            throw new Exception("Not implemented");
        }

        public IEnumerable<ServiceOrder> GetAllValidServiceOrdersByFileId(int fileId)
        {
            try
            {
                return _ServiceOrdercontext.Where(x => x.FileId == fileId);
            }
            catch(Exception e)
            {
                throw e;
            }
            
        }  
    }
}
