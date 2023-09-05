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
    obtener(): Configuracion | null; // Puede devolver null si no se encuentra la configuración
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

// Ejemplo de uso con BaseDeDatos como almacenamiento
const dbAlmacenamiento = new BaseDeDatos();
const gestor = new GestorConfiguraciones(dbAlmacenamiento);

gestor.guardarConfiguracion("nuevo_valor");
const configuracion = gestor.obtenerConfiguracion();
if (configuracion) {
    console.log(`Valor de configuración obtenido: ${configuracion.valor}`);
} else {
    console.log("No se pudo obtener la configuración.");
}
