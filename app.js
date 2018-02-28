function Person(name, age) {
    this.name = name;
    this.age = age;
    this.gender = 'Male';
}

Person.prototype.greet = function() {
    console.log(`Hello ${this.name}`);
}
