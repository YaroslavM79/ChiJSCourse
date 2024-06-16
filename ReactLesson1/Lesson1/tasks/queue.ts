class Queue<T> {
    private storage: T[] = [];

    enqueue(item: T): void {
        this.storage.push(item);
    }

    dequeue(): T | undefined {
        return this.storage.shift();
    }
}


function checkText(){
    const stringQueue = new Queue<string>();
    stringQueue.enqueue("Hello");
    stringQueue.enqueue("World");
    console.log(stringQueue.dequeue());
    console.log(stringQueue.dequeue());
    console.log(stringQueue.dequeue());
}

function checkNumbers() {
    const numberQueue = new Queue<number>();
    numberQueue.enqueue(1);
    numberQueue.enqueue(2);
    console.log(numberQueue.dequeue());
    console.log(numberQueue.dequeue());
    console.log(numberQueue.dequeue());
}

export function testQueus() {
    console.log("------test numbers");
    checkNumbers();
    console.log("------test text");
    checkText();
}
