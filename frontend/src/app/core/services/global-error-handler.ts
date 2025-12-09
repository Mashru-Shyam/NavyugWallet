import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) { }

  handleError(error: Error) {
    const loggerService = this.injector.get(LoggerService);
    loggerService.error(`Uncaught Angular Exception`, error);
    console.error(error);
  }
}
