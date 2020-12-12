using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.Extensions.Logging;
using Mundial.Infra.Model;
using Mundial.Domain.Service.Concrete;
using Mundial.Infra.Repository;

namespace Mundial.Aplication.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductController : BaseController<Product>
    {
        private readonly ILogger<ProductController> _logger;

        private readonly ProductService _productService;

        public ProductController(ILogger<ProductController> logger,
         ProductService productService)
         :base(logger,productService)
        {
            _logger = logger;
            _productService = productService;
        }
 
    }
}
