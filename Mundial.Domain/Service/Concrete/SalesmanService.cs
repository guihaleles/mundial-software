using System;
using System.Collections.Generic;
using System.Linq;
using Mundial.Infra.Model;
using Mundial.Infra.Repository;

namespace Mundial.Domain.Service.Concrete
{
    public class SalesmanService
    {
        private readonly SalesmanRepository _salesmanRepository;
        public SalesmanService(SalesmanRepository salesmanRepository)
        {
            _salesmanRepository = salesmanRepository;
        }
        
        public IEnumerable<Salesman> GetAllSalesman()
        {
            var itens = _salesmanRepository.GetAll();
            switch (itens.Count())
            {
                case 0:
                    throw new Exception("Nenhum vendedor cadastrado");
                default:
                    return itens;
            }         

        }

        public IEnumerable<Salesman> GetAllValidSalesman()
        {
            var itens = _salesmanRepository.GetAllValidItens();
            switch (itens.Count())
            {
                case 0:
                    throw new Exception("Nenhum vendedor cadastrado");
                default:
                    return itens;
            }         

        }

        public Salesman GetValidSalesmanByNumber(int number)
        {
            var itens =  _salesmanRepository.GetAllValidSalesmanByNumber(number);

            switch (itens.Count())
            {
                case 0:
                    throw new Exception("Nenhum vendedor cadastrado com esse número");
                case 1:
                    return itens.First();
                default:
                    throw new Exception("Existem " + itens.Count().ToString() + 
                    " vendedores cadastrados com o mesmo número");               
            }
           
        }

        public bool PutSalesman (Salesman item)
        {
           var itens =  _salesmanRepository.GetAllSalesmanByNumber(item.Number);

           if(itens.Count() > 0)
           {
               throw  new Exception("Já existe um vendendor com esse número");
           }
           else
           {
               if(_salesmanRepository.PutIten(item))
               {
                   return true;
               }
               else
               {
                   throw new Exception("Erro ao cadastrar vendedor");
               }
           }
        }

        
        public bool UpdateSalesman(Salesman item)
        {
            int oldItemId = item.Id.GetValueOrDefault();            

            var newItem = item;
            newItem.Id = null;

            var itens =  _salesmanRepository.GetItenById(oldItemId);

            if(itens.Count() == 0)
            {
               throw  new Exception("Não existe nanhum vendedor com esse id");
            }
            else
            {
                if(_salesmanRepository.UpdateIten(item,oldItemId))
                {
                   return true;
                }
                else
                {
                   throw new Exception("Erro ao atualizar vendedor");
                }
            }   
        } 

        public bool DeleteSalesman (int id)
        {
            var itens =  _salesmanRepository.GetItenById(id);

            if(itens.Count() == 0)
            {
               throw  new Exception("Não existe nenhum vendendor com esse id");
            }
            else
            {
               if(_salesmanRepository.DeleteIten(id))
               {
                   return true;
               }
               else
               {
                   throw new Exception("Erro ao deletar vendedor");
               }
            }           
        }

    }
}
