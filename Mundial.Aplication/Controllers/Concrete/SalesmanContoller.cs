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
    public class SalesmanController : BaseController<Salesman>
    {
        private readonly ILogger<SalesmanController> _logger;

        private readonly SalesmanService _salesmanService;

        public SalesmanController(ILogger<SalesmanController> logger,
         SalesmanService salesmanService)
         :base(logger,salesmanService)
        {
            _logger = logger;
            _salesmanService = salesmanService;

        }
 
    }
}

