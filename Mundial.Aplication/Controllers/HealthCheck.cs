using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Mundial.Infra.Model;
using Mundial.Infra.Repository;

namespace Mundial.Aplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HealthCheckController : ControllerBase
    {    
        private readonly ILogger<HealthCheckController> _logger;
        private readonly CheckRepository _checkRepository;

        public HealthCheckController(ILogger<HealthCheckController> logger,
        CheckRepository checkRepository)
        {
            _logger = logger; 
            _checkRepository = checkRepository;
        }

        [HttpGet]
        public IActionResult GetHealthCheck()
        {
            return Ok();
            
        }


        [HttpGet]
        [Route("DataBase")]
        public IActionResult GetDataBaseHealthCheck()
        {
            return Ok(_checkRepository.CheckDataBase());            
        }
    }
}
