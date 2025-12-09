namespace backend.Infrastructure.Models
{
    public class LogEntry
    {
        public string Level { get; set; }
        public string Message { get; set; }
        public string Url { get; set; }
        public string UserAgent { get; set; }
        public string StackTrace { get; set; }
        public DateTime Timestamp { get; set; }
    }
}
