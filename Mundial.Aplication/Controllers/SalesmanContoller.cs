using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Mundial.Infra.Model;
using Mundial.Domain.Service.Concrete;

namespace Mundial.Aplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SalesmanController : ControllerBase
    {
        private readonly ILogger<SalesmanController> _logger;

        private readonly SalesmanService _salesmanService;

        public SalesmanController(ILogger<SalesmanController> logger, SalesmanService salesmanService)
        {
            _logger = logger;
            _salesmanService = salesmanService;
        }

        [HttpGet]
        public IEnumerable<Salesman> Get()
        {
            return _salesmanService.GetSalesmen("");
            
        }

        [HttpPut]
        public IActionResult Put(Salesman file)
        {
            return Ok();
        }

        [HttpPost]
        public IActionResult Post(Salesman file)
        {
            return Ok();
        }


        [HttpDelete]
        public IActionResult Delete(int Id)
        {
            return Ok();
        }
    }
}

