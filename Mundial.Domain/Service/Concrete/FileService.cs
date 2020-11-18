using System;
using System.Collections.Generic;
using System.Linq;
using Mundial.Infra.Model;

namespace Mundial.Domain.Service.Concrete
{
    public class FileService
    {
        public FileService(){}
        
        public IEnumerable<File> GetFile(string search)
        {
            return Enumerable.Range(1, 5).Select(index => new File
            {
                DateOfBirth = DateTime.Now.AddDays(index),
                Name = "Nome",
                Number =index
            })
            .ToArray();
        }

    }
}
