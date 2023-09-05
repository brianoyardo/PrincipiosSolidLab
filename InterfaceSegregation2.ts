// interface Animal {
//     caminar(): void;
//     nadar(): void;
//     volar(): void;
//     hacerSonido(): void;
// }
// class Aguila implements Animal {
//     caminar() {
//         console.log("El 4guila camina lentamente");
//     }

//     nadar() {
//         throw new Error("El águila no puede nadar");
//     }

//     volar() {
//         console.log("El águila vuela alto en el cielo");
//     }

//     hacerSonido() {
//         console.log("El águila emite un sonido agudo");
//     }
// }

// class Tiburon implements Animal { 
//     caminar() {
//         throw new Error("El tiburón no puede caminar");
//     }
    
//     nadar() {
//         console.log("El tiburón nade rápidamente");
//     }

//     volar() {
//         throw new Error("El tiburón no puede volar");
//     }

//     hacerSonido() {
//         console.log("El tiburón no hace sonidos audibles fuera del agua");
//     }
// }
///////////////////////////////////////////////////////////////////////////

// Interfaces para definir comportamientos comunes
// Interfaces para definir comportamientos comunes
interface Terrestre {
    caminar(): void;
}

interface Acuatico {
    nadar(): void;
}

interface Aereo {
    volar(): void;
}

interface SonidoAnimal {
    hacerSonido(): void;
}

// Clase base para representar animales
class Animal implements SonidoAnimal {
    constructor(public nombre: string) {}

    hacerSonido() {
        console.log(`${this.nombre} hace un sonido`);
    }
}

// Clases específicas para diferentes tipos de animales
class Aguila extends Animal implements Aereo {
    constructor() {
        super("Águila");
    }

    volar() {
        console.log(`${this.nombre} vuela alto en el cielo`);
    }
}

class Tiburon extends Animal implements Acuatico {
    constructor() {
        super("Tiburón");
    }

    nadar() {
        console.log(`${this.nombre} nada rápidamente`);
    }

    hacerSonido() {
        console.log(`${this.nombre} no hace sonidos audibles fuera del agua`);
    }
}

class Perro extends Animal implements Terrestre {
    constructor() {
        super("Perro");
    }

    caminar() {
        console.log(`${this.nombre} camina por el suelo`);
    }

    hacerSonido() {
        console.log(`${this.nombre} ladra`);
    }
}