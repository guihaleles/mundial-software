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
    public class FileController : BaseController<File>
    {   
        private readonly ILogger<FileController> _logger;

        private readonly FileService _fileService;

        public FileController(ILogger<FileController> logger,
         FileService fileService)
         :base(logger, fileService)
        {
            _logger = logger;
            _fileService = fileService;
        }
       
    }
}