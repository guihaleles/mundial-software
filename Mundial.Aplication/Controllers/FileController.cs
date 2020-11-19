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
    public class FileController : ControllerBase
    {        private readonly ILogger<FileController> _logger;

        private readonly FileService _fileService;

        private readonly FileRepository _fileRepository;

        public FileController(ILogger<FileController> logger,
         FileService fileService, FileRepository fileRepository)
        {
            _logger = logger;
            _fileService = fileService;
            _fileRepository = fileRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_fileService.GetAllFile());            
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
                return Ok(_fileService.GetValidFileByNumber(number));            
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
                return Ok(_fileService.PutFile(item));
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
            return Ok(_fileService.UpdateFile(newItem));
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
            return Ok(_fileService.DeleteFile(id));
            }
            catch(Exception e)
            {
                return StatusCode(500,e.Message);
            } 
        }
    }
}