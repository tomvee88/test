function Person(name, age) {
    this.name = name;
    this.age = age;
}

function City(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello ${this.name}`);
}
