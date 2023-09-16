/*Tarea 2
Expandamos aún más nuestro sistema para incorporar una funcionalidad de membresía y categorización de libros.
Requisitos:
1.	Membresías de usuario:
•	Tres tipos de membresías: Básico, Premium y Platino.
•	Básico: Puede pedir prestado un máximo de 2 libros a la vez.
•	Premium: Puede pedir prestado un máximo de 5 libros a la vez.
•	Platino: Puede pedir prestado un número ilimitado de libros.
2.	Categorización de libros:
•	Los libros se categorizan en Ficción, No Ficción, y Referencia.
•	Los libros de Referencia no se pueden prestar. Son solo para leer en la biblioteca.
3.	Historial de préstamos:
•	Mantener un registro de todos los préstamos que ha hecho un usuario, independientemente de si el libro ha sido devuelto o no.*/

enum Membership {
    Basico,
    Premium,
    Platino,
}

class User {
    constructor(public UserID: string, public name: string, public membership: Membership) {
        this.loanHistory = [];
    }

    loanHistory: { book: Book; loanDate: Date; returnDate?: Date }[];
}

class Book {
    constructor(
        public title: string,
        public author: string,
        public isLoaded: boolean = false,
        public isAvailable: string,
        public dueDate: Date | null = null, // Fecha de vencimiento del préstamo
        public category: 'Ficción' | 'No Ficción' | 'Referencia' // Categoría del libro
    ) {}

    // Método para calcular la multa
    calculateFine(returnDate: Date): number {
        if (this.dueDate && returnDate > this.dueDate) {
            const daysLate = Math.floor((returnDate.getTime() - this.dueDate.getTime()) / (1000 * 60 * 60 * 24));
            return daysLate; // $1 por día de retraso
        }
        return 0; // Sin retraso, sin multa
    }
}

interface ILoadManager {
    loadBook(book: Book, user: User): void;
    returnBook(book: Book): void;
}

interface ILogger {
    log(message: string): void;
}

class ConsoleLogger implements ILogger {
    log(message: string): void {
        console.log(message);
    }
}

interface IError {
    log(error: string): void;
}

interface IWarning {
    log(warning: string): void;
}

interface IInfo {
    log(info: string): void;
}

class TittleCorrect implements ILogger {
    log(error: string): void {
        console.log(error);
    }
}

class ErrorLogger implements IError {
    log(error: string): void {
        console.error(`Error: ${error}`);
    }
}

class WarningLogger implements IWarning {
    log(warning: string): void {
        console.warn(`Warning: ${warning}`);
    }
}

class InfoLogger implements IInfo {
    log(info: string): void {
        console.info(`Info: ${info}`);
    }
}

class Library {
    private books: Book[] = [];
    private loadBooks: Map<string, User> = new Map();

    constructor(
        private errorLogger: IError,
        private warningLogger: IWarning,
        private infoLogger: IInfo,
        private logger: ILogger
    ) {}

    loadBook(book: Book, user: User): void {
        if (book.isLoaded) {
            this.logger.log('Book is loaded');
            return;
        }

        // Verificar la categoría del libro
        if (book.category === 'Referencia') {
            this.warningLogger.log('Los libros de referencia no se pueden prestar.');
            return;
        }

        // Verificar las restricciones de membresía
        if (
            (user.membership === Membership.Basico && this.getUserLoanCount(user) >= 2) ||
            (user.membership === Membership.Premium && this.getUserLoanCount(user) >= 5)
        ) {
            this.warningLogger.log('Se ha alcanzado el límite de préstamos para esta membresía.');
            return;
        }

        // Registrar la fecha de préstamo y vencimiento
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 7);
        book.dueDate = dueDate;

        this.loadBooks.set(book.isAvailable, user);
        user.loanHistory.push({ book, loanDate: new Date() });
        book.isLoaded = true;
        this.infoLogger.log(`Informacion del usuario que ha tomado prestado el libro: ${JSON.stringify(user)}`);
        this.infoLogger.log(`${user.name} has borrowed ${book.title}.`);
    }

    returnBook(book: Book): void {
        if (!book.isLoaded) {
            this.logger.log('Book is not loaded');
            return;
        }

        const user = this.loadBooks.get(book.isAvailable);
        if (user) {
            const returnDate = new Date();
            const daysLate = book.calculateFine(returnDate);

            if (daysLate > 0) {
                this.warningLogger.log(
                    `${user.name} has returned ${book.title} ${daysLate} days late. Fine: $${daysLate}`
                );
                // Aqui se muestra los datos del Usuario y sus dias de multa mas la multa.
            } else {
                this.infoLogger.log(`Informacion del usuario que ha devuelto el libro: ${JSON.stringify(user)}`);
            }

            this.loadBooks.delete(book.isAvailable);
            book.isLoaded = false;
            this.logger.log(`${book.title} has been returned.`);
        } else {
            this.warningLogger.log(`No se encontró ningún usuario que haya tomado prestado el libro ${book.title}.`);
        }
    }

    addBook(book: Book) {
        this.infoLogger.log('Inicio de Operacion');

        if (!this.validateTitle(book.title)) {
            this.errorLogger.log(`El título "${book.title}" no es válido.`);
        } else {
            this.books.push(book);
            this.infoLogger.log('Libro agregado con éxito');
        }

        this.infoLogger.log('Fin de Operacion');
    }

    findBookyTitle(title: string): Book | undefined {
        this.infoLogger.log('Inicio de Operacion');

        const foundBook = this.books.find((book) => book.title === title);

        if (!foundBook) {
            this.warningLogger.log(`No se encontró ningún libro con el título "${title}"`);
        } else {
            this.infoLogger.log(`Libro encontrado: "${title}" por ${foundBook.author}`);
        }

        this.infoLogger.log('Fin de Operacion');

        return foundBook;
    }

    private validateTitle(title: string): boolean {
        return title.trim() !== '';
    }

    private getUserLoanCount(user: User): number {
        return user.loanHistory.filter((loan) => !loan.returnDate).length;
    }
}