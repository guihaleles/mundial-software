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

        public virtual Pagination<T> GetAllPaginated(Pagination<T> pagination)
        {
            var itens = _baseRepository.GetAllPaginated(pagination);
            switch (itens.Response.Count())
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

        public virtual Pagination<T> GetAllValidPaginated(Pagination<T> pagination)
        {
            var itens = _baseRepository.GetAllValidPaginated(pagination);
            switch (itens.Response.Count())
            {
                case 0:
                    throw new Exception($"Não existe nenhum cadastro de {name}");
                default:
                    return itens;
            }   

        }        

        public virtual T GetValidByNumber(int number)
        {
            var itens =  _baseRepository.GetAllValidItenByNumber(number);

            switch (itens.Count())
            {
                case 0:
                    throw new Exception($"Não existe nenhum cadastro de {name} com esse número");
                case 1:
                    return itens.First();
                default:
                    throw new Exception($" {name}: {itens.Count().ToString()} itens cadastrados com o mesmo número");               
            }
           
        }

        public virtual IEnumerable<T> Search(string value)
        {
            var itens =  _baseRepository.GetItensSearchingAllColumns(value);

            switch (itens.Count())
            {
                case 0:
                    throw new Exception($"Não existe nenhum cadastro de {name} com esse filtro");
                default:
                    return itens;
            }

        }

        public virtual Pagination<T> GetSearchPaginated(Pagination<T> pagination, string search)
        {
            var itens = _baseRepository.GetItensSearchingAllColumnsPaginated(pagination,search);
            switch (itens.Response.Count())
            {
                case 0:
                    throw new Exception($"Não existe nenhum cadastro de {name}");
                default:
                    return itens;
            }   

        } 

        public virtual bool Putiten (T item)
        {
           var itens =  _baseRepository.GetAllValidItenByNumber(item.Number);

           if(itens.Count() > 0)
           {
               throw  new Exception($"{name}: Já existe um item com esse número");
           }
           else
           {
               if(_baseRepository.PutIten(item))
               {
                   return true;
               }
               else
               {
                   throw new Exception($"Erro ao cadastrar {name}");
               }
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
