// class Cinema {
//     movies: any[] = [];
//     snacks: any[] = [];
//     tickets: any[] = [];
//     employees: any[] = [];

//     // Métodos relacionados con películas
//     addMovie(movie: any) {
//         this.movies.push(movie);
//     }

//     // Métodos relacionados con snacks
//     buySnack(snack: any) {
//         this.snacks.push(snack);
//     }

//     // Métodos relacionados con entradas
//     buyTicket(ticket: any) {
//         this.tickets.push(ticket);
//     }

//     // Métodos relacionados con empleados
//     hireEmployee(employee: any) {
//         this.employees.push(employee);
//     }
// }

class Movie {
    movies: any[] = [];

    addMovie(movie: any) {
        this.movies.push(movie);
    }
}

class Snack {
    snacks: any[] = [];

    buySnack(snack: any) {
        this.snacks.push(snack);
    }
}

class Ticket {
    tickets: any[] = [];

    buyTicket(ticket: any) {
        this.tickets.push(ticket);
    }
}

class Employee {
    employees: any[] = [];

    hireEmployee(employee: any) {
        this.employees.push(employee);
    }
}

class Cinema {
    movieService: Movie;
    snackService: Snack;
    ticketService: Ticket;
    employeeService: Employee;

    constructor() {
        this.movieService = new Movie();
        this.snackService = new Snack();
        this.ticketService = new Ticket();
        this.employeeService = new Employee();
    }
}

