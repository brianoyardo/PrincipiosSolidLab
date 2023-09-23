// class Journalist {
//     name: string;
//     articles: string[] = [];

//     constructor(name: string) {
//         this.name = name;
//     }

//     publishArticle(article: string) {
//         this.articles.push(article);
//         console.log(`El periodista ${this.name} ha publicado: ${article}`);
//     }
// }

// class Reader {
//     name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     checkForNewArticles(journalist: Journalist) {
//         const latestArticle = journalist.articles[journalist.articles.length - 1];
//         console.log(`${this.name} ha leído el artículo: ${latestArticle}`);
//     }
// }

// const journalistA = new Journalist('Juan');
// const readerB = new Reader('Ana');

// journalistA.publishArticle("Los beneficios de la programación");
// readerB.checkForNewArticles(journalistA);



// Observer interface
interface Observer {
    update(article: string): void;
}

// Subject (Periodista)
class Journalist {
    name: string;
    private observers: Observer[] = [];

    constructor(name: string) {
        this.name = name;
    }

    publishArticle(article: string) {
        console.log(`El periodista ${this.name} ha publicado: ${article}`);
        this.notifyObservers(article);
    }

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    private notifyObservers(article: string) {
        for (const observer of this.observers) {
            observer.update(article);
        }
    }
}

// Concrete Observer (Lector)
class Reader implements Observer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(article: string) {
        console.log(`${this.name} ha leído el artículo: ${article}`);
    }
}

const journalistA = new Journalist('Juan');
const readerB = new Reader('Ana');

journalistA.addObserver(readerB); // Ana se suscribe a Juan

journalistA.publishArticle("Los beneficios de la programación");


