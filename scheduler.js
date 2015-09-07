class Scheduler {
    constructor() {
        this.queue = [];
    }
    enqueue(task) {
        this.queue.push(task);
    }
    run() {
        while (this.queue.length > 0) {
            let task = this.queue.shift();
            
            task.run();

            if (!task.finished) {
                this.enqueue(task);
            }
        }
    }
}

export default Scheduler;
