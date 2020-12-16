using System;
using System.Collections.Generic;
using Mundial.Infra.Model;
using System.Linq;
using Microsoft.EntityFrameworkCore;
namespace Mundial.Infra.Repository
{
    public class InstallmentRepository: BaseRepository<Installment>
    {
        private readonly DbSet<Installment> _Installmentcontext;

        public InstallmentRepository(MundialContext context) : base(context)
        {
            _Installmentcontext = context.Set<Installment>();
        }

        public override IQueryable<Installment> GetItensSearchingAllColumns(string value)
        {
            throw new Exception("Not implemented");
        }  
    }
}
