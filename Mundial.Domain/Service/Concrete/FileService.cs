using System;
using System.Collections.Generic;
using System.Linq;
using Mundial.Infra.Model;
using Mundial.Infra.Repository;

namespace Mundial.Domain.Service.Concrete
{
    public class FileService: BaseService<File>
    {
    
        private readonly FileRepository _fileRepository;
        public FileService(FileRepository fileRepository): base(fileRepository)
        {
            _fileRepository = fileRepository;
            name = "Ficha";
        }        

    }
}
