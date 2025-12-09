using backend.Infrastructure.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogsController : ControllerBase
    {
        private readonly ILogger<LogsController> _logger;

        public LogsController(ILogger<LogsController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Log([FromBody] LogEntry logEntry)
        {
            if (logEntry == null || string.IsNullOrEmpty(logEntry.Message))
            {
                return BadRequest("Log entry is invalid.");
            }

            using (_logger.BeginScope(new Dictionary<string, object> { { "Source", "Frontend" } }))
            {
                switch (logEntry.Level?.ToLower())
                {
                    case "error":
                        _logger.LogError("Client Error: {ClientMessage}", logEntry.Message, new { LogEntry = logEntry });
                        break;
                    case "warn":
                        _logger.LogWarning("Client Warning: {ClientMessage}", logEntry.Message, new { LogEntry = logEntry });
                        break;
                    case "info":
                        _logger.LogInformation("Client Info: {ClientMessage}", logEntry.Message, new { LogEntry = logEntry });
                        break;
                    default:
                        _logger.LogDebug("Client Log: {ClientMessage}", logEntry.Message, new { LogEntry = logEntry });
                        break;
                }
            }
            return Ok();
        }
    }
}
