using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Mundial.Infra.Model;
using Mundial.Domain.Service.Concrete;
using Mundial.Infra.Repository;

namespace Mundial.Aplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SalesmanController : ControllerBase
    {
        private readonly ILogger<SalesmanController> _logger;

        private readonly SalesmanService _salesmanService;

        private readonly SalesmanRepository _salesmanRepository;

        public SalesmanController(ILogger<SalesmanController> logger,
         SalesmanService salesmanService, SalesmanRepository salesmanRepository)
        {
            _logger = logger;
            _salesmanService = salesmanService;
            _salesmanRepository = salesmanRepository;
        }

        [HttpGet]
        public IEnumerable<Salesman> Get()
        {
            return _salesmanService.GetSalesmen("");
            
        }

        [HttpPut]
        public IActionResult Put(Salesman item)
        {
            return Ok(_salesmanRepository.PutSalesman(item));
        }

        [HttpPost]
        public IActionResult Post(Salesman item)
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

