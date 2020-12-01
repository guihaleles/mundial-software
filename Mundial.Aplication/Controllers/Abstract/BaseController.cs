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
    public abstract class BaseController<T> : ControllerBase where T : MundialModel
    {
        private readonly ILogger<BaseController<T>> _logger;

        private readonly BaseService<T> _baseService;



        public BaseController(ILogger<BaseController<T>> logger,
         BaseService<T> baseService)
        {
            _logger = logger;
            _baseService = baseService;
        }

        [HttpGet]
        public virtual IActionResult GetAllValid()
        {
            try
            {
                return Ok(_baseService.GetAllValid());            
            }
            catch(Exception e)
            {
                return StatusCode(500,e.Message);
            }           
        }

        [Route("GetAll")]
        [HttpGet]
        public virtual IActionResult GetAll()
        {
            try
            {
                return Ok(_baseService.GetAll());            
            }
            catch(Exception e)
            {
                return StatusCode(500,e.Message);
            }           
        }

        [Route("GetByNumber/{number}")]
        [HttpGet]
        public virtual IActionResult GetByNumber(int number)
        {
            try
            {
                return Ok(_baseService.GetValidByNumber(number));            
            }
            catch(Exception e)
            {
                return StatusCode(500,e.Message);
            }           
        }

        [HttpPut]
        public virtual IActionResult Put(T item)
        {
            try
            {
                return Ok(_baseService.Putiten(item));
            }
            catch(Exception e)
            {
                return StatusCode(500,e.Message);
            }
        }

        [Route("Update")]
        [HttpPost]
        public virtual IActionResult Post(T item)
        {
            try
            {
            return Ok(_baseService.Update(item));
            }
            catch(Exception e)
            {
                return StatusCode(500,e);
            } 
        }


        [HttpDelete]
        [Route("{id}")]
        public virtual IActionResult Delete(int id)
        {
            try
            {
            return Ok(_baseService.Delete(id));
            }
            catch(Exception e)
            {
                return StatusCode(500,e.Message);
            } 
        }
    }
}

