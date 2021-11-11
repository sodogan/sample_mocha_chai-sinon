const MyClass = require("../src/myClass.js");
const { expect } = require("chai");
const sinon = require("sinon");

let _instance = new MyClass();

console.log("Starting to learn sinon  and spying");

describe("test suite for the stub", () => {
  let _obj = new MyClass();
  let _spy;
  beforeEach(() => (_spy = sinon.stub(_obj, "add")));
  afterEach(() => (_spy = null));

  it("test with spy", () => {
    //Given
    let arg1 = 1,
      arg2 = 5;
    //when
    _obj.add_then_square(arg1, arg2);
    //Then
    sinon.assert.calledOnce(_spy);
    expect(_spy.calledOnce).to.be.true;
    expect(_spy.calledWith(arg1, arg2)).to.be.true;
  });
});
