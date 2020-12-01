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




    }
}
