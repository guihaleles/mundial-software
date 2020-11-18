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
    public class FileController : ControllerBase
    {
        private readonly ILogger<FileController> _logger;

        private readonly FileService _fileService;

        public FileController(ILogger<FileController> logger, FileService fileService)
        {
            _logger = logger;
            _fileService = fileService;
        }

        [HttpGet]
        public IEnumerable<File> Get()
        {
            return _fileService.GetFile("");
            
        }

        [HttpPut]
        public IActionResult Put(File file)
        {
            return Ok();
        }

        [HttpPost]
        public IActionResult Post(File file)
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

