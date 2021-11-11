const MyClass = require("../src/myClass.js");
const { expect } = require("chai");

let _instance = new MyClass();

console.log("Startimng testing with Mocha and Chai");

describe("test suite for add", () => {
  //test cases
  it("Add two postitive numbers  ", () => {
    //Given
    let val1 = 3,
      val2 = 5;
    //when
    let _actual = _instance.add(val1, val2);
    //then
    expect(_actual).to.be.equal(8);
    expect(_actual).to.be.a("number");
  });

  it("Add two numbers undefined  ", () => {
    //Given

    //when
    let _actual = _instance.add();
    //then
    expect(_actual).to.be.equal(0);
  });

  it("Add one is empty and other is positive number  ", () => {
    //Given

    //when
    let _actual = _instance.add(2);
    //then
    expect(_actual).to.be.equal(0);
  });
});
//Testing the

describe("test suite for the addthenSquare", () => {
  let _obj = new MyClass();
  let _result;
  beforeEach(() => (_result = _obj.add(2, 4)));
  afterEach(() => (_result = 0));

  it("test with two positive numbers", () => {
    //Given
    //when
    //Then
    expect(_result).to.be.equal(6);
  });
});
