// ECMA6 JavaScript Singleton Example

let instance = null;  // default value

class Singleton {
    constructor () {
        if(!instance){
            instance = this;
        }
        this.createInstance = new Object('my Value');
        return instance;
    }
}

let instance1 = new Singleton();
let instance2 = new Singleton();

let result = instance1.createInstance === instance2.createInstance ? 'Two instances are the same.' : 'Two instances are different';

document.getElementsByTagName('h2')[1].innerHTML = result;