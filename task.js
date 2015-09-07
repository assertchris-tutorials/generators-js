class Task {
    get finished() {
        return this._finished;
    }

    constructor(generator) {
        if (typeof generator === "function") {
            generator = generator();
        }

        this._finished = false;
        this.generator = generator;
    }

    run() {
        this._finished = this.generator.next().done;
    }
}

export default Task;
