using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Mundial.Infra.Model;
using Mundial.Domain.Service.Concrete;
using Mundial.Infra.Repository;

namespace Mundial.Aplication.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FileControllerOld : ControllerBase
    {        private readonly ILogger<FileControllerOld> _logger;

        private readonly FileService _fileService;

        private readonly FileRepository _fileRepository;

        public FileControllerOld(ILogger<FileControllerOld> logger,
         FileService fileService, FileRepository fileRepository)
        {
            _logger = logger;
            _fileService = fileService;
            _fileRepository = fileRepository;
        }


        // [EnableCors]
        [HttpGet]
        public IActionResult GetAllValid()
        {
            try
            {
                return Ok(_fileService.GetAllValid());            
            }
            catch(Exception e)
            {
                return StatusCode(500,e.Message);
            }           
        }

        [Route("GetAllFiles")]
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_fileService.GetAll());            
            }
            catch(Exception e)
            {
                return StatusCode(500,e.Message);
            }           
        }

        [Route("GetFileByNumber/{number}")]
        [HttpGet]
        public IActionResult GetFileByNumber(int number)
        {
            try
            {
                return Ok(_fileService.GetValidByNumber(number));            
            }
            catch(Exception e)
            {
                return StatusCode(500,e.Message);
            }           
        }

        [HttpPut]
        public IActionResult Put(File item)
        {
            try
            {
                return Ok(_fileService.Putiten(item));
            }
            catch(Exception e)
            {
                return StatusCode(500,e.Message);
            }
        }

        [HttpPost]
        [Route("Update")]
        public IActionResult Post(File newItem)
        {
            try
            {
            return Ok(_fileService.Update(newItem));
            }
            catch(Exception e)
            {
                return StatusCode(500,e.Message);
            } 
        }


        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
            return Ok(_fileService.Delete(id));
            }
            catch(Exception e)
            {
                return StatusCode(500,e.Message);
            } 
        }
    }
}