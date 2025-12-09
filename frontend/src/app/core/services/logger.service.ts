import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogEntry } from '../models/log-entry';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private logApiUrl = '/api/logs';

  constructor(private http: HttpClient) { }

  private sendLog(entry: LogEntry) {
    console.log(`[${entry.level.toUpperCase()}] ${entry.message}`);
    this.http.post(this.logApiUrl, entry).subscribe({
      error: err => console.error('Failed to send log:', err)
    });
  }

  error(message: string, error?: any): void {
    const entry: LogEntry = {
      level: 'error',
      message,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      stackTrace: error?.stack
    };
    this.sendLog(entry);
  }

  warn(message: string): void {
    const entry: LogEntry = {
      level: 'warn',
      message,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };
    this.sendLog(entry);
  }

  info(message: string): void {
    const entry: LogEntry = {
      level: 'info',
      message,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };
    this.sendLog(entry);
  }

  debug(message: string): void {
    const entry: LogEntry = {
      level: 'debug',
      message,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };
    this.sendLog(entry);
  }
}
