function Person(name, age) {
    this.name = name;
    this.age = age;
    this.gender = 'Male';
}

function City(name) {
    this.name = name;
    this.population = 200000;
}

Person.prototype.greet = function() {
    console.log(`Hello ${this.name}`);
}
