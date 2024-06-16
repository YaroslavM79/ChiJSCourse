interface IPerson {
    name: string;
    age: number;
}

interface IWorker extends IPerson {
    position: string;
    salary: number;
}

class Worker implements IWorker {
    public name: string;
    public age: number;
    public position: string;
    private _salary: number;

    constructor(name: string, age: number, position: string, salary: number) {
        this.name = name;
        this.age = age;
        this.position = position;
        this._salary = salary;
    }

    get salary(): number {
        return this._salary;
    }

    set salary(value: number) {
        this._salary = value;
    }
}

export function testWorkerPerson(){
    const concreteWorker = new Worker("John Doe", 30, "Engineer", 50000);
    console.log(concreteWorker.salary);
    concreteWorker.salary=55000;
    console.log(concreteWorker.salary);
}