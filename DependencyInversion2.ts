// class BaseDeDatos {
//     guardar(configuracion: Configuracion) {
//         console.log(`Guardando configuración con valor: ${configuracion.valor} en la base de datos`);
//     }
//     obtener(): Configuracion {
//         // Obtener de la Base de Datos.....
//         return new Configuracion("valor");
//     }
// }


// class GestorConfiguraciones {
//     db: BaseDeDatos;

//     constructor() {
//         this.db = new BaseDeDatos();
//     }

//     guardarConfiguracion(valor: string) {
//         const configuracion = new Configuracion(valor);
//         this.db.guardar(configuracion);
//     }

//     obtenerConfiguracion(): Configuracion {
//         return this.db.obtener();
//     }
// }
///////////////////////////////////////////////////////////////////////////
class Configuracion {
    constructor(public valor: string) {}
}

interface Almacenamiento {
    guardar(configuracion: Configuracion): void;
    obtener(): Configuracion | null;
}

class BaseDeDatos implements Almacenamiento {
    private configuracion: Configuracion | null = null;

    guardar(configuracion: Configuracion) {
        console.log(`Guardando configuración con valor: ${configuracion.valor} en la base de datos`);
        this.configuracion = configuracion;
    }

    obtener(): Configuracion | null {
        if (this.configuracion) {
            console.log(`Obteniendo configuración con valor: ${this.configuracion.valor} de la base de datos`);
            return this.configuracion;
        }
        return null;
    }
}

class GestorConfiguraciones {
    constructor(private almacenamiento: Almacenamiento) {}

    guardarConfiguracion(valor: string) {
        const configuracion = new Configuracion(valor);
        this.almacenamiento.guardar(configuracion);
    }

    obtenerConfiguracion(): Configuracion | null {
        const configuracion = this.almacenamiento.obtener();
        if (configuracion) {
            return configuracion;
        } else {
            console.log("No se encontró ninguna configuración.");
            return null;
        }
    }
}
