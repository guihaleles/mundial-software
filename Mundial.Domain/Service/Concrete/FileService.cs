using System;
using System.Collections.Generic;
using System.Linq;
using Mundial.Infra.Model;
using Mundial.Infra.Repository;

namespace Mundial.Domain.Service.Concrete
{
    public class FileService
    {
    
        private readonly FileRepository _fileRepository;
        public FileService(FileRepository fileRepository)
        {
            _fileRepository = fileRepository;
        }
        
        public IEnumerable<File> GetAllFile()
        {
            var itens = _fileRepository.GetAllFiles();
            switch (itens.Count())
            {
                case 0:
                    throw new Exception("Nenhuma ficha cadastrada");
                default:
                    return itens;
            }         

        }

        public File GetValidFileByNumber(int number)
        {
            var itens =  _fileRepository.GetAllValidFilesByNumber(number);

            switch (itens.Count())
            {
                case 0:
                    throw new Exception("Nenhuma ficha cadastrada com esse número");
                case 1:
                    return itens.First();
                default:
                    throw new Exception("Existem " + itens.Count().ToString() + 
                    " fichas cadastradas com o mesmo número");               
            }
           
        }

        public string PutFile (File item)
        {
           var itens =  _fileRepository.GetAllValidFilesByNumber(item.Number);

           if(itens.Count() > 0)
           {
               throw  new Exception("Já existe uma ficha com esse número");
           }
           else
           {
               if(_fileRepository.PutFile(item))
               {
                   return "Ficha cadastrada com sucesso";
               }
               else
               {
                   throw new Exception("Erro ao cadastrar ficha");
               }
           }
        }

        public string UpdateFile (File item)
        {
            int oldItemId = item.Id.GetValueOrDefault();            

            var newItem = SetFileIdsToNULL(item);
            var itens =  _fileRepository.GetValidFileById(oldItemId);

            if(itens.Count() == 0)
            {
               throw  new Exception("Não existe nanhuma ficha com esse id");
            }
            else
            {
                if(_fileRepository.UpdateFile(item,oldItemId))
                {
                   return "Ficha atualizada com sucesso";
                }
                else
                {
                   throw new Exception("Erro ao atualizar ficha");
                }
            }
           
        }

        public string DeleteFile (int id)
        {
            var itens =  _fileRepository.GetFileById(id);

            if(itens.Count() == 0)
            {
                throw  new Exception("Não existe nanhuma ficha com esse id");
            }
            else
            {
                if(_fileRepository.DeleteFile(id))
                {
                   return "Ficha deletada com sucesso";
                }
                else
                {
                   throw new Exception("Erro ao deletar ficha");
                }
            }
           
        }

        private File SetFileIdsToNULL(File item)
        {
            item.Id = null;
            item.WorkAddressId = null;
            item.CustomerAddressId = null;
            
            if( item.CustomerAddress != null)
            {
                item.CustomerAddress.Id= null;
            }

            if( item.WorkAddress != null)
            {    
                item.WorkAddress.Id = null;
            }

            return item;

        }

    }
}
