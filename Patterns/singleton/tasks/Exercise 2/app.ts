import { DatabaseService } from './dbService';

const dbService1 = DatabaseService.getInstance("mongodb://localhost/db1");
const dbService2 = DatabaseService.getInstance("mongodb://localhost/db1"); // Ambas instancias compartirán la misma conexión

dbService1.connect();
dbService2.connect();