class MyClass {
  constructor() {
    console.log("initializing myclass");
  }

  greet(message) {
    console.log(message);
  }

  add(value1, value2) {
    let total = value1 + value2;
    return total || 0;
  }

  add_then_square(arg1, arg2) {
    let sum;
    this.greet("simple greeting");
    sum = this.add(arg1, arg2);
    return sum * sum;
  }
}

module.exports = MyClass;
