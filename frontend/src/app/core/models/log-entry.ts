export interface LogEntry {
    level: 'info' | 'warn' | 'error' | 'debug';
    message: string;
    timestamp: string;
    url: string;
    userAgent: string;
    stackTrace?: string;
}
