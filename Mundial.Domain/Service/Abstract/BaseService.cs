using System;
using System.Collections.Generic;
using System.Linq;
using Mundial.Infra.Model;
using Mundial.Infra.Repository;

namespace Mundial.Domain.Service.Concrete
{
    public abstract class BaseService<T> where T : MundialModel
    {
        private readonly BaseRepository<T> _baseRepository;

        public string name {get; set;} = "Item";
        public BaseService(BaseRepository<T> baseRepository)
        {
            _baseRepository = baseRepository;
        }
        
        public virtual IEnumerable<T> GetAll()
        {
            var itens = _baseRepository.GetAll();
            switch (itens.Count())
            {
                case 0:
                    throw new Exception($"Não existe nenhum cadastro de {name}");
                default:
                    return itens;
            }         

        }

        public virtual IEnumerable<T> GetAllValid()
        {
            var itens = _baseRepository.GetAllValidItens();
            switch (itens.Count())
            {
                case 0:
                    throw new Exception($"Não existe nenhum cadastro de {name}");
                default:
                    return itens;
            }         

        }

        
        public virtual bool Update(T item)
        {
            int oldItemId = item.Id.GetValueOrDefault();            

            var newItem = item;
            newItem.Id = null;

            var itens =  _baseRepository.GetItenById(oldItemId);

            if(itens.Count() == 0)
            {
               throw  new Exception($"Não existe nenhum cadastro de {name} com esse id");
            }
            else
            {
                if(_baseRepository.UpdateIten(item,oldItemId))
                {
                   return true;
                }
                else
                {
                   throw new Exception($"Erro ao atualizar {name}");
                }
            }   
        } 

        public virtual bool Delete (int id)
        {
            var itens =  _baseRepository.GetItenById(id);

            if(itens.Count() == 0)
            {
               throw  new Exception($"Não existe nenhum cadastro de {name} com esse id");
            }
            else
            {
               if(_baseRepository.DeleteIten(id))
               {
                   return true;
               }
               else
               {
                   throw new Exception($"Erro ao deletar {name}");
               }
            }           
        }

    }
}
