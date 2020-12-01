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
    public class SalesmanControllerOld : ControllerBase
    {
        private readonly ILogger<SalesmanControllerOld> _logger;

        private readonly SalesmanService _salesmanService;

        private readonly SalesmanRepository _salesmanRepository;

        public SalesmanControllerOld(ILogger<SalesmanControllerOld> logger,
         SalesmanService salesmanService, SalesmanRepository salesmanRepository)
        {
            _logger = logger;
            _salesmanService = salesmanService;
            _salesmanRepository = salesmanRepository;
        }

        // [EnableCors]
        [HttpGet]
        public IActionResult GetAllValid()
        {
            try
            {
                return Ok(_salesmanService.GetAllValid());            
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
                return Ok(_salesmanService.GetAll());            
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
                return Ok(_salesmanService.GetValidByNumber(number));            
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
                return Ok(_salesmanService.Putiten(item));
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
            return Ok(_salesmanService.Update(item));
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
            return Ok(_salesmanService.Delete(id));
            }
            catch(Exception e)
            {
                return StatusCode(500,e.Message);
            } 
        }
    }
}

