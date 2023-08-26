class Libro3 {
    titulo: string;
    autor: string;
    contenido: string;
    tipo: string;

    constructor(titulo: string, autor: string, contenido: string, tipo: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
        this.tipo = tipo;
    }

    mostrarDescripcion() {
        return `Libro de ${this.tipo} Titulado "${this.titulo}" escrito por ${this.autor}`;
    }
}

class LibroDeTexto extends Libro3 {
    constructor(titulo: string, autor: string, contenido: string) {
        super(titulo, autor, contenido, 'texto');
    }
}

class LibroDeAventura extends Libro3 {
    constructor(titulo: string, autor: string, contenido: string) {
        super(titulo, autor, contenido, 'aventura');
    }

    mostrarDescripcion() {
        return `${super.mostrarDescripcion()} de aventura`;
    }
}

const libroTexto = new LibroDeTexto('Introducción a la Programación', 'John Smith', 'Contenido del libro de texto...');
console.log(libroTexto.mostrarDescripcion());

const libroAventura = new LibroDeAventura('La Isla Misteriosa', 'Julio Verne', 'Contenido de la historia de aventura...');
console.log(libroAventura.mostrarDescripcion());
