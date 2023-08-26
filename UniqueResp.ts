class LibroInfo {
    titulo: string;
    autor: string;

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
    }
}

class ContenidoLibro {
    contenido: string;

    constructor(contenido: string) {
        this.contenido = contenido;
    }

    mostrar() {
        return this.contenido;
    }
}

class Libro {
    info: LibroInfo;
    contenido: ContenidoLibro;

    constructor(titulo: string, autor: string, contenido: string) {
        this.info = new LibroInfo(titulo, autor);
        this.contenido = new ContenidoLibro(contenido);
    }

    guardarEnBaseDeDatos() {
        // Código para guardar el libro en la base de datos
        console.log(`Guardando libro ${this.info.titulo} en base de datos`);
    }
}

const libro = new Libro('El Principito', 'La vida de Pi Patel', 'Erase una vez');
libro.guardarEnBaseDeDatos();

