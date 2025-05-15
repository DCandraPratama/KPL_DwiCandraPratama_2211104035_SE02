const Observer = require('./observer');

class ConcreteObserver extends Observer {
    constructor(name, subject) {
        super();
        this.name = name;
        this.subject = subject;
        this.counter = 0;
    }

    update(data) {
        this.counter++;
        console.log(`${this.name} menerima data: ${data}`);

        if (this.counter >= 3) {
            console.log(`${this.name} berhenti berlangganan setelah 3 notifikasi.`);
            this.subject.detach(this);
        }
    }
}

module.exports = ConcreteObserver;
