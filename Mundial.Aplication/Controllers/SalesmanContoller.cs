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

        [EnableCors]
        [HttpGet]
        public IActionResult GetAllValid()
        {
            try
            {
                return Ok(_salesmanService.GetAllValidSalesman());            
            }
            catch(Exception e)
            {
                return StatusCode(500,e.Message);
            }           
        }

        [Route("GetAllSalesman")]
        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(_salesmanService.GetAllSalesman());            
            }
            catch(Exception e)
            {
                return StatusCode(500,e.Message);
            }           
        }

        [Route("GetSalesmanByNumber/{number}")]
        [HttpGet]
        public IActionResult GetSalesmanByNumber(int number)
        {
            try
            {
                return Ok(_salesmanService.GetValidSalesmanByNumber(number));            
            }
            catch(Exception e)
            {
                return StatusCode(500,e.Message);
            }           
        }

        [HttpPut]
        public IActionResult Put(Salesman item)
        {
            try
            {
                return Ok(_salesmanService.PutSalesman(item));
            }
            catch(Exception e)
            {
                return StatusCode(500,e.Message);
            }
        }

        [Route("Update")]
        [HttpPost]
        public IActionResult Post(Salesman item)
        {
            try
            {
            return Ok(_salesmanService.UpdateSalesman(item));
            }
            catch(Exception e)
            {
                return StatusCode(500,e);
            } 
        }


        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
            return Ok(_salesmanService.DeleteSalesman(id));
            }
            catch(Exception e)
            {
                return StatusCode(500,e.Message);
            } 
        }
    }
}

