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
            var itens = _salesmanRepository.GetAllSalesman();
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

        public string PutSalesman (Salesman item)
        {
           var itens =  _salesmanRepository.GetAllSalesmanByNumber(item.Number);

           if(itens.Count() > 0)
           {
               throw  new Exception("Já existe um vendendor com esse número");
           }
           else
           {
               if(_salesmanRepository.PutSalesman(item))
               {
                   return "Vendedor cadastrado com sucesso";
               }
               else
               {
                   throw new Exception("Erro ao cadastrar vendedor");
               }
           }
        } 

        public string DeleteSalesman (int id)
        {
            var itens =  _salesmanRepository.GetSalesmanById(id);

           if(itens.Count() == 0)
           {
               throw  new Exception("Não existe um vendendor com esse id");
           }
           else
           {
               if(_salesmanRepository.DeleteSalesman(id))
               {
                   return "Vendedor deletado com sucesso";
               }
               else
               {
                   throw new Exception("Erro ao deletar vendedor");
               }
           }
           
        }

    }
}
