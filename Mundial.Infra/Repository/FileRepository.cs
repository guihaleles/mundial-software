using System;
using System.Collections.Generic;
using Mundial.Infra.Model;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Mundial.Infra.Repository
{
    public class FileRepository: BaseRepository<File>
    {
        private readonly DbSet<File> _Filecontext;

        public FileRepository(MundialContext context) : base(context)
        {
            _Filecontext = context.Set<File>();
        }



    }
}
