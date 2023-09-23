// // dbService.ts

// export class DatabaseService {
//     private connectionString: string;

//     constructor(connectionString: string) {
//         this.connectionString = connectionString;
//     }

//     connect(): void {
//         // Lógica para conectar a la base de datos
//         console.log(`Connecting to database with ${this.connectionString}`);
//     }
// }

// // app.ts

// import { DatabaseService } from './dbService';

// let dbService1 = new DatabaseService("mongodb://localhost/db1");
// let dbService2 = new DatabaseService("mongodb://localhost/db1"); // Nota que es la misma dirección que dbService1

// dbService1.connect();
// dbService2.connect();


// dbService.ts

export class DatabaseService {
    private static instance: DatabaseService;
    private connectionString: string;

    private constructor(connectionString: string) {
        this.connectionString = connectionString;
    }

    public static getInstance(connectionString: string): DatabaseService {
        if (!DatabaseService.instance) {
            DatabaseService.instance = new DatabaseService(connectionString);
        }
        return DatabaseService.instance;
    }

    connect(): void {
 
        console.log(`Connecting to database with ${this.connectionString}`);
    }
}
