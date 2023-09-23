// class Room {
//     paint: string;
//     design: string;

//     constructor(paint: string) {
//         this.paint = paint;
//         this.design = '';
//     }

//     applyDesign(design: string) {
//         this.design += design;
//     }

//     showRoom() {
//         console.log(`This room is painted with ${this.paint} and has a ${this.design} design.`);
//     }
// }

// const myRoom = new Room('blue');
// myRoom.applyDesign('stripe');
// myRoom.showRoom();


class Room {
    paint: string;

    constructor(paint: string) {
        this.paint = paint;
    }

    showRoom() {
        console.log(`This room is painted with ${this.paint}.`);
    }
}

class RoomDecorator extends Room {
    decoratedRoom: Room;

    constructor(decoratedRoom: Room) {
        super(decoratedRoom.paint);
        this.decoratedRoom = decoratedRoom;
    }

    showRoom() {
        this.decoratedRoom.showRoom();
    }
}

class DesignDecorator extends RoomDecorator {
    design: string;

    constructor(decoratedRoom: Room, design: string) {
        super(decoratedRoom);
        this.design = design;
    }

    showRoom() {
        super.showRoom();
        console.log(`It has a ${this.design} design.`);
    }
}

const basicRoom = new Room('blue');
basicRoom.showRoom();

const designedRoom = new DesignDecorator(new Room('red'), 'stripes');
designedRoom.showRoom();

