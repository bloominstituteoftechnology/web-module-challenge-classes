////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////


/* eslint-env mocha */
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detection Stuff //
  // Node/Non-browser test env
  var chai = require('chai')
  var {
    Airplane,
    Car,
    Person,
    Baby,
    // TODO: Add all functions to export/test here
  } = require('../index.js')
}
var expect = chai.expect

describe('Instances of Airplane', () => {
  it('initialize with the given name', () => {
    const a = new Airplane('Gulfstream 550')
    expect(a.name).to.eq(`Gulfstream 550`)
  })
  it('behave correctly', () => {
    const myPlane = new Airplane('Jumbo')
    expect(myPlane.name).to.equal('Jumbo')
    expect(myPlane.isFlying).to.equal(false)
    myPlane.takeOff()
    expect(myPlane.isFlying).to.equal(true)
    myPlane.land()
    expect(myPlane.isFlying).to.equal(false)
  })
})

describe('Instances of Person', () => {
  let neo
  const foods = [1, 2, 3, 4, 5, 6, 7, 8]
  beforeEach(() => {
    neo = new Person('Neo', 20)
  })
  it('initialize with the given name', () => {
    expect(neo.name).to.equal('Neo')
  })
  it('initialize with the given age', () => {
    expect(neo.age).to.equal(20)
  })
  it('initialize with an empty stomach', () => {
    expect(neo.stomach).to.be.an('array')
    expect(neo.stomach.length).to.equal(0)
  })
  it('get eat, poop and toString methods', () => {
    expect(neo.__proto__.eat).to.be.not.undefined;
    expect(neo.__proto__.poop).to.be.not.undefined;
    expect(neo.__proto__.toString).to.be.not.undefined;
  })
  it('can eat up to 8 foods', () => {
    foods.forEach(item => neo.eat(item))
    foods.forEach(item => expect(neo.stomach).to.include(item))
  })
  it('can eat no more than 8 foods', () => {
    foods.forEach(item => neo.eat(item))
    neo.eat(9)
    expect(neo.stomach).to.not.include(9)
    expect(neo.stomach.length).to.equal(8)
  })
  it('can poop to empty stomach', () => {
    foods.forEach(item => neo.eat(item))
    neo.poop()
    expect(neo.stomach.length).to.equal(0)
  })
  it('can state name and age', () => {
    const str = neo.toString()
    expect(str).to.include('Neo')
    expect(str).to.include('20')
  })
})

describe('Instances of Car', () => {
  let batmobile
  beforeEach(() => {
    batmobile = new Car('BatMobile', 20)
  })
  it('initialize with the given model', () => {
    expect(batmobile.model).to.equal('BatMobile')
  })
  it('initialize with the given milesPerGallon', () => {
    expect(batmobile.milesPerGallon).to.equal(20)
  })
  it('initialize with an empty tank', () => {
    expect(batmobile.tank).to.equal(0)
  })
  it('initialize with an odometer at 0 miles', () => {
    expect(batmobile.odometer).to.equal(0)
  })
  it('get fill and drive methods from their prototype', () => {
    expect(batmobile.__proto__.fill).to.be.not.undefined;
    expect(batmobile.__proto__.drive).to.be.not.undefined;
  })
  it('fill method increases the tank by the given gallons', () => {
    batmobile.fill(10)
    expect(batmobile.tank).to.equal(10)
    batmobile.fill(10)
    expect(batmobile.tank).to.equal(20)
  })
  it('drive method when enough fuel increases odometer correctly', () => {
    batmobile.fill(10)
    batmobile.drive(50)
    expect(batmobile.odometer).to.equal(50)
  })
  it('drive method when enough fuel decreases tank correctly', () => {
    batmobile.fill(10)
    batmobile.drive(100)
    expect(batmobile.tank).to.equal(5)
  })
  it('drive method when NOT enough fuel increases miles by drivable miles', () => {
    batmobile.fill(10)
    batmobile.drive(201)
    expect(batmobile.odometer).to.equal(200)
  })
  it('drive method when NOT enough fuel empties the tank', () => {
    batmobile.fill(10)
    batmobile.drive(201)
    expect(batmobile.tank).to.equal(0)
  })
  it('drive method when NOT enough fuel returns correct string', () => {
    batmobile.fill(10)
    expect(batmobile.drive(201)).to.include(200)
  })
})

describe.only('Instances of Baby', () => {
  let baby
  beforeEach(() => {
    baby = new Baby('Lucy', 5, 'trains')
  })
  it('initialize with the given name', () => {
    expect(baby.name).to.equal('Lucy')
  })
  it('initialize with the given age', () => {
    expect(baby.age).to.equal(5)
  })
  it('initialize with the given favorite toy', () => {
    expect(baby.favoriteToy).to.equal('trains')
  })
  it('get a play method from their prototype', () => {
    expect(baby.__proto__.play).to.be.not.undefined;
  })
  it('can play with favorite toy', () => {
    expect(baby.play()).to.include('trains')
  })
  it('inherit the methods on Person.prototype', () => {
    expect(Person.prototype).to.equal(baby.__proto__.__proto__)
  })
})