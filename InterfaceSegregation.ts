// interface DispositivoMultimedia {
//     reproducirMusica(): void;
//     reproducirVideo(): void;
//     leerEbook(): void;
// }

// class Smartphone implements DispositivoMultimedia {
//     reproducirMusica() {
//         console.log("Reproduciendo música en el smartphone");
//     }
//     reproducirVideo() {
//         console.log("Reproduciendo video en el smartphone");
//     }
//     leerEbook() {
//         console.log("Leyendo eBook en el smartphone");
//     }
// }


// class ReproductorMP3 implements DispositivoMultimedia {
//     reproducirMusica() {
//         console.log("Reproduciendo música en el reproductor MP3");
//     }
//     reproducirVideo() {
//         throw new Error("Esta funcionalidad no está soportada");
//     }
//     leerEbook() {
//         throw new Error("Esta funcionalidad no está soportada");
//     }
// }
///////////////////////////////////////////////////////////////////////////

interface ReproductorMusica {
    reproducirMusica(): void;
}

interface ReproductorVideo {
    reproducirVideo(): void;
}

interface LectorEbook {
    leerEbook(): void;
}

// Clase base para dispositivos electrónicos
class DispositivoElectronico {
    encendido: boolean = false;

    encender() {
        this.encendido = true;
        console.log("El dispositivo está encendido");
    }

    apagar() {
        this.encendido = false;
        console.log("El dispositivo está apagado");
    }
}

class Smartphone extends DispositivoElectronico implements ReproductorMusica, ReproductorVideo, LectorEbook {
    reproducirMusica() {
        if (this.encendido) {
            console.log("Reproduciendo música en el smartphone");
        } else {
            console.log("Enciende el smartphone antes de reproducir música");
        }
    }

    reproducirVideo() {
        if (this.encendido) {
            console.log("Reproduciendo video en el smartphone");
        } else {
            console.log("Enciende el smartphone antes de reproducir video");
        }
    }

    leerEbook() {
        if (this.encendido) {
            console.log("Leyendo eBook en el smartphone");
        } else {
            console.log("Enciende el smartphone antes de leer un eBook");
        }
    }
}

class ReproductorMP3 extends DispositivoElectronico implements ReproductorMusica {
    reproducirMusica() {
        if (this.encendido) {
            console.log("Reproduciendo música en el reproductor MP3");
        } else {
            console.log("Enciende el reproductor MP3 antes de reproducir música");
        }
    }
}

const miSmartphone = new Smartphone();
miSmartphone.encender();
miSmartphone.reproducirMusica();
miSmartphone.reproducirVideo();
miSmartphone.leerEbook();
miSmartphone.apagar();

const miReproductorMP3 = new ReproductorMP3();
miReproductorMP3.encender();
miReproductorMP3.reproducirMusica();
miReproductorMP3.apagar();
