// class AirportSystem {
//     flights: any[] = [];
//     passengers: any[] = [];
//     crews: any[] = [];
//     planesMaintenance: any[] = [];
//     financialRecords: any[] = [];

//     // Métodos relacionados con vuelos
//     scheduleFlight(flight: any) {
//         this.flights.push(flight);
//     }

//     // Métodos relacionados con pasajeros
//     checkInPassenger(passenger: any) {
//         this.passengers.push(passenger);
//     }

//     // Métodos relacionados con tripulaciones
//     assignCrewToFlight(crew: any, flightID: string) {
//         this.crews.push({...crew, flightID});
//     }

//     // Métodos relacionados con el mantenimiento de aviones
//     logMaintenance(planeID: string, maintenance: any) {
//         this.planesMaintenance.push({planeID, ...maintenance});
//     }

//     // Métodos relacionados con facturación y contabilidad
//     recordFinancialTransaction(transaction: any) {
//         this.financialRecords.push(transaction);
//     }
// }


class Flight {
    flights: any[] = [];

    scheduleFlight(flight: any) {
        this.flights.push(flight);
    }
}

class Passenger {
    passengers: any[] = [];

    checkInPassenger(passenger: any) {
        this.passengers.push(passenger);
    }
}

class Crew {
    crews: any[] = [];

    assignCrewToFlight(crew: any, flightID: string) {
        this.crews.push({ ...crew, flightID });
    }
}

class PlaneMaintenance {
    planesMaintenance: any[] = [];

    logMaintenance(planeID: string, maintenance: any) {
        this.planesMaintenance.push({ planeID, ...maintenance });
    }
}

class Financial {
    financialRecords: any[] = [];

    recordFinancialTransaction(transaction: any) {
        this.financialRecords.push(transaction);
    }
}

class AirportSystem {
    flightService: Flight;
    passengerService: Passenger;
    crewService: Crew;
    maintenanceService: PlaneMaintenance;
    financialService: Financial;

    constructor() {
        this.flightService = new Flight();
        this.passengerService = new Passenger();
        this.crewService = new Crew();
        this.maintenanceService = new PlaneMaintenance();
        this.financialService = new Financial();
    }
}
