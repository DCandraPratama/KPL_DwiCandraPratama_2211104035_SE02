class Subject {
    constructor() {
        this.observers = [];
    }

    attach(observer) {
        this.observers.push(observer);
    }

    detach(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(data) {
        console.log("Subject: Notifikasi baru untuk observer...");
        this.observers.forEach(observer => {
            observer.update(data);
        });
    }
}

module.exports = Subject;
