const MyClass = require("../src/myClass.js");
const { expect } = require("chai");
const sinon = require("sinon");

let _instance = new MyClass();

console.log("Starting to learn sinon  and spying");

describe("test suite for the mock", () => {
  let _obj = new MyClass();

  it("test with mock", () => {
    //Given
    let arg1 = 1,
      arg2 = 5;

    let _mock = sinon.mock(_obj);
    let expectation = _mock.expects("greet");
    expectation.exactly(1);
    expectation.withArgs("simple greeting");
    //when

    //Then
    _obj.add_then_square(arg1, arg2);

    _mock.verify();
  });
});
