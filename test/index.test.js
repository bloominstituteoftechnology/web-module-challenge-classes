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
    Lambdasian,
    Instructor,
    Student,
    ProjectManager,
    // Baby,
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

const lambdasianAttr = {
  name: 'Petar',
  age: 23,
  location: 'NY City'
}
const instructorAttr = {
  name: 'Luis',
  age: 45,
  location: 'Provo',
  specialty: 'SQL',
  favLanguage: 'C#',
  catchPhrase: 'Don\'t forget the homies'
}
const studentAttr = {
  name: 'Matt',
  age: 30,
  location: 'London',
  previousBackground: 'Plumber',
  className: 'WebEU 3',
  favSubjects: ['JS', 'Node']
}
const projectManagerAttr = {
  name: 'Dan',
  age: 35,
  location: 'San Francisco',
  specialty: 'Node',
  favLanguage: 'JavaScript',
  catchPhrase: 'Keep doing what you\'re doing!'
}
describe.only('Instances of Lambdasian', () => {
  let lambdasian
  beforeEach(() => {
    lambdasian = new Lambdasian(lambdasianAttr)
  })
  it('initialize with the given name', () => {
    expect(lambdasian.name).to.equal(lambdasianAttr.name)
  })
  it('initialize with the given age', () => {
    expect(lambdasian.age).to.equal(lambdasianAttr.age)
  })
  it('initialize with the given location', () => {
    expect(lambdasian.location).to.equal(lambdasianAttr.location)
  })
  it('has a speak method', () => {
    expect(lambdasian.__proto__.speak).to.be.not.undefined;
  })
  it('can speak the right sentence', () => {
    expect(lambdasian.speak()).to.include(lambdasianAttr.name);
    expect(lambdasian.speak()).to.include(lambdasianAttr.age);
  })
})
