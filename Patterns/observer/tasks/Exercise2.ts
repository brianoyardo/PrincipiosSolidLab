// class Auction {
//     item: string;
//     currentBid: number = 0;
//     highestBidder: string | null = null;

//     constructor(item: string) {
//         this.item = item;
//     }

//     makeBid(bidderName: string, amount: number) {
//         if (amount > this.currentBid) {
//             this.currentBid = amount;
//             this.highestBidder = bidderName;
//             console.log(`${bidderName} es el máximo postor con una oferta de ${amount}`);
//         } else {
//             console.log(`${bidderName}, tu oferta es demasiado baja.`);
//         }
//     }
// }

// const auctionItem = new Auction("Cuadro famoso");
// auctionItem.makeBid("Carlos", 500);
// auctionItem.makeBid("Ana", 450);


// Observer interface
interface Observer {
    update(bidderName: string, amount: number): void;
}

// Subject (Subasta)
class Auction {
    item: string;
    private currentBid: number = 0;
    private highestBidder: string | null = null;
    private observers: Observer[] = [];

    constructor(item: string) {
        this.item = item;
    }

    makeBid(bidderName: string, amount: number) {
        if (amount > this.currentBid) {
            this.currentBid = amount;
            const previousBidder = this.highestBidder;
            this.highestBidder = bidderName;
            console.log(`${bidderName} es el máximo postor con una oferta de ${amount}`);

            // Notificar a los observadores sobre la nueva oferta
            this.notifyObservers(bidderName, amount);

            // Si había un postor anterior, notificarle que ha sido superado
            if (previousBidder) {
                console.log(`${previousBidder}, tu oferta ha sido superada.`);
            }
        } else {
            console.log(`${bidderName}, tu oferta es demasiado baja.`);
        }
    }

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    private notifyObservers(bidderName: string, amount: number) {
        for (const observer of this.observers) {
            observer.update(bidderName, amount);
        }
    }
}

// Concrete Observer (Postor)
class Bidder implements Observer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(bidderName: string, amount: number) {
        if (bidderName !== this.name) {
            console.log(`${this.name}: ${bidderName} ha hecho una oferta de ${amount}.`);
        }
    }
}

const auctionItem = new Auction("Cuadro famoso");
const bidderCarlos = new Bidder("Carlos");
const bidderAna = new Bidder("Ana");

auctionItem.makeBid("Carlos", 500);
auctionItem.makeBid("Ana", 450);

