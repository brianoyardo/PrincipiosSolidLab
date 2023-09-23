import { LoggerService } from './loggerService';

const logger1 = LoggerService.getInstance("log.txt");
const logger2 = LoggerService.getInstance("log.txt");

logger1.logMessage("This is a message from logger1");
logger2.logMessage("This is a message from logger2");