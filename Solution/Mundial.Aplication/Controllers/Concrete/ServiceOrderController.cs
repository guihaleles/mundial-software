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
    public class ServiceOrderController : BaseController<ServiceOrder>
    {
        private readonly ILogger<ServiceOrderController> _logger;

        private readonly ServiceOrderService _salesmanService;

        public ServiceOrderController(ILogger<ServiceOrderController> logger,
         ServiceOrderService salesmanService)
         :base(logger,salesmanService)
        {
            _logger = logger;
            _salesmanService = salesmanService;
        }
 
    }
}

