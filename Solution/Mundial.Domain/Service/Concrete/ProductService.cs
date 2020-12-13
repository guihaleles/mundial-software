using System;
using System.Collections.Generic;
using System.Linq;
using Mundial.Infra.Model;
using Mundial.Infra.Repository;

namespace Mundial.Domain.Service.Concrete
{
    public class ProductService: BaseService<Product>
    {
        private readonly ProductRepository _productRepository;
        public ProductService(ProductRepository productRepository): base(productRepository)
        {
            _productRepository = productRepository;
        }
        
    }
}
