// class Computer {
//     components: string[] = [];

//     addComponent(component: string) {
//         this.components.push(component);
//     }

//     showConfiguration() {
//         console.log(`This computer has: ${this.components.join(', ')}`);
//     }
// }

// const myComputer = new Computer();
// myComputer.addComponent('16GB RAM');
// myComputer.addComponent('1TB SSD');
// myComputer.addComponent('Intel i7 Processor');
// myComputer.showConfiguration();

class Computer {
    components: string[] = [];

    showConfiguration() {
        console.log(`This computer has: ${this.components.join(', ')}`);
    }
}

class ComputerDecorator extends Computer {
    decoratedComputer: Computer;

    constructor(decoratedComputer: Computer) {
        super();
        this.decoratedComputer = decoratedComputer;
    }

    showConfiguration() {
        this.decoratedComputer.showConfiguration();
    }
}

class ComponentDecorator extends ComputerDecorator {
    component: string;

    constructor(decoratedComputer: Computer, component: string) {
        super(decoratedComputer);
        this.component = component;
    }

    showConfiguration() {
        super.showConfiguration();
        console.log(`It also has: ${this.component}`);
    }
}

const basicComputer = new Computer();
basicComputer.showConfiguration();

const enhancedComputer = new ComponentDecorator(new Computer(), '32GB RAM');
enhancedComputer.showConfiguration();

const superComputer = new ComponentDecorator(
    new ComponentDecorator(new Computer(), '64GB RAM'),
    'NVIDIA RTX 3090'
);
superComputer.showConfiguration();


