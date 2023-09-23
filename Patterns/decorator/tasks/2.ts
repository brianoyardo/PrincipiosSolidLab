class Computer {
    components: string[] = [];

    addComponent(component: string) {
        this.components.push(component);
    }

    showConfiguration() {
        console.log(`This computer has: ${this.components.join(', ')}`);
    }
}

const myComputer = new Computer();
myComputer.addComponent('16GB RAM');
myComputer.addComponent('1TB SSD');
myComputer.addComponent('Intel i7 Processor');
myComputer.showConfiguration();

