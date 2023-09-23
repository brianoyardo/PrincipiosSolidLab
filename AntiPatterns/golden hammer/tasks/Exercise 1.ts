// class TodoManager {
//     private todos: string[] = [];

//     add(todo: string) {
//         this.todos.push(todo);
//         this.save();
//         this.render();
//     }

//     remove(index: number) {
//         this.todos.splice(index, 1);
//         this.save();
//         this.render();
//     }

//     private save() {
//         console.log("Saving todos to local storage...");
//         // Código para guardar todos en el almacenamiento local
//     }

//     private render() {
//         console.log("Rendering todos in the UI...");
//         // Código para renderizar todos en la UI
//     }
// }


class Todo {
    task: string;

    constructor(task: string) {
        this.task = task;
    }
}

class TodoStorage {
    static save(todos: Todo[]) {
        const serializedTodos = todos.map(todo => todo.task);
        localStorage.setItem("todos", JSON.stringify(serializedTodos));
    }

    static load(): Todo[] {
        const serializedTodos = localStorage.getItem("todos");
        if (serializedTodos) {
            const tasks = JSON.parse(serializedTodos) as string[];
            return tasks.map(task => new Todo(task));
        }
        return [];
    }
}

class TodoRenderer {
    static render(todos: Todo[]) {
        console.log("Rendering todos in the UI:");
        todos.forEach((todo, index) => {
            console.log(`${index + 1}. ${todo.task}`);
        });
    }
}

class TodoManager {
    private todos: Todo[] = [];

    constructor() {
        this.todos = TodoStorage.load();
    }

    add(todo: string) {
        this.todos.push(new Todo(todo));
        this.saveAndRender();
    }

    remove(index: number) {
        if (index >= 0 && index < this.todos.length) {
            this.todos.splice(index, 1);
            this.saveAndRender();
        }
    }

    private saveAndRender() {
        TodoStorage.save(this.todos);
        TodoRenderer.render(this.todos);
    }
}

