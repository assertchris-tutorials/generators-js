import Task from "./task"
import Scheduler from "./scheduler"

let scheduler = new Scheduler();

scheduler.enqueue(new Task(function*() {
    for (var i  = 0; i < 5; i++) {
        console.log("task 1, tick " + i);
        yield;
    }
}));

scheduler.enqueue(new Task(function*() {
    for (var i  = 0; i < 10; i++) {
        console.log("task 2, tick " + i);
        yield;
    }
}));

scheduler.run();
