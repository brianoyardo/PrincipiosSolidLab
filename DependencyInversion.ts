// class Luz {
//     encender() {
//         console.log("Luz encendida");
//     }
//     apagar() {
//         console.log("Luz apagada");
//     }
// }

// class Interruptor {
//     private luz: Luz;

//     constructor(luz: Luz) {
//         this. luz = luz;
//     }

//     operar() {
//         //.. (alguna lógica para determinar si encender o apagar
//         this.luz.encender(); // o this.luz.apagar();
//     }
// }
///////////////////////////////////////////////////////////////////////////
interface DispositivoLuz {
    encender(): void;
    apagar(): void;
}

class Luz implements DispositivoLuz {
    private encendida: boolean = false;

    encender() {
        if (!this.encendida) {
            console.log("Luz encendida");
            this.encendida = true;
        }
    }

    apagar() {
        if (this.encendida) {
            console.log("Luz apagada");
            this.encendida = false;
        }
    }

    estaEncendida() {
        return this.encendida;
    }
}

class Interruptor {
    private dispositivo: DispositivoLuz;

    constructor(dispositivo: DispositivoLuz) {
        this.dispositivo = dispositivo;
    }

    operar() {
        if (this.dispositivo instanceof Luz) {
            if (this.dispositivo.estaEncendida()) {
                this.dispositivo.apagar();
            } else {
                this.dispositivo.encender();
            }
        }
    }
}
