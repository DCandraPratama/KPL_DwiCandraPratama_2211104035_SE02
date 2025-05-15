const Subject = require('./subject');
const ConcreteObserver = require('./concreteObserver');

const subject = new Subject();

const observer1 = new ConcreteObserver("Observer 1", subject);
const observer2 = new ConcreteObserver("Observer 2", subject);

subject.attach(observer1);
subject.attach(observer2);

// Mengirim notifikasi berkali-kali
subject.notify("Notifikasi 1");
subject.notify("Notifikasi 2");
subject.notify("Notifikasi 3");
subject.notify("Notifikasi 4");
subject.notify("Notifikasi 5");
