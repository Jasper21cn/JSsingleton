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
console.log(instance1.createInstance === instance2.createInstance);