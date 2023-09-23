// // loggerService.ts

// export class LoggerService {
//     private filePath: string;

//     constructor(filePath: string) {
//         this.filePath = filePath;
//     }

//     logMessage(message: string): void {
//         // Lógica ficticia para escribir en el archivo
//         console.log(`Writing to ${this.filePath}: ${message}`);
//     }
// }

// // app.ts

// import { LoggerService } from './loggerService';

// let logger1 = new LoggerService("log.txt");
// let logger2 = new LoggerService("log.txt");

// logger1.logMessage("This is a message from logger1");
// logger2.logMessage("This is a message from logger2");


export class LoggerService {
    private static instance: LoggerService; // Propiedad estática para almacenar la única instancia
    private filePath: string;

    private constructor(filePath: string) {
        this.filePath = filePath;
    }

    public static getInstance(filePath: string): LoggerService {
        if (!LoggerService.instance) {
            LoggerService.instance = new LoggerService(filePath);
        }
        return LoggerService.instance;
    }

    logMessage(message: string): void {
        console.log(`Writing to ${this.filePath}: ${message}`);
    }
}

