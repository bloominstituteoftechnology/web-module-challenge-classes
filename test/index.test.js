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
  var results = require('../index.js')
}
var expect = chai.expect

describe('Instance of Airplane', () => {
  it('[1] initializes with the given name', () => {
    const a = new results.Airplane('Gulfstream 550')
    expect(a.name).to.eq(`Gulfstream 550`)
  })
  it('[2] behaves correctly', () => {
    const myPlane = new results.Airplane('Jumbo')
    expect(myPlane.name).to.equal('Jumbo')
    expect(myPlane.isFlying).to.equal(false)
    myPlane.takeOff()
    expect(myPlane.isFlying).to.equal(true)
    myPlane.land()
    expect(myPlane.isFlying).to.equal(false)
  })
})

describe('Instance of Person', () => {
  let neo
  const foods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  beforeEach(() => {
    neo = new results.Person('Neo', 20)
  })
  it('[1] initializes with the given name', () => {
    expect(neo.name).to.equal('Neo')
  })
  it('[2] initializes with the given age', () => {
    expect(neo.age).to.equal(20)
  })
  it('[3] initializes with an empty stomach', () => {
    expect(neo.stomach).to.be.an('array')
    expect(neo.stomach.length).to.equal(0)
  })
  it('[4] has eat, poop and toString methods', () => {
    expect(neo.__proto__.eat).to.be.not.undefined;
    expect(neo.__proto__.poop).to.be.not.undefined;
    expect(neo.__proto__.toString).to.be.not.undefined;
  })
  it('[5] can eat up to 10 foods', () => {
    foods.forEach(item => neo.eat(item))
    foods.forEach(item => expect(neo.stomach).to.include(item))
  })
  it('[6] can eat no more than 10 foods', () => {
    foods.forEach(item => neo.eat(item))
    neo.eat(11)
    expect(neo.stomach).to.not.include(11)
    expect(neo.stomach.length).to.equal(10)
  })
  it('[7] can poop to empty stomach', () => {
    foods.forEach(item => neo.eat(item))
    neo.poop()
    expect(neo.stomach.length).to.equal(0)
  })
  it('[8] can state name and age', () => {
    const str = neo.toString()
    expect(str).to.include('Neo')
    expect(str).to.include('20')
  })
})

describe('Instance of Car', () => {
  let batmobile
  beforeEach(() => {
    batmobile = new results.Car('BatMobile', 20)
  })
  it('[1] initializes with the given model', () => {
    expect(batmobile.model).to.equal('BatMobile')
  })
  it('[2] initializes with the given milesPerGallon', () => {
    expect(batmobile.milesPerGallon).to.equal(20)
  })
  it('[3] initializes with an empty tank', () => {
    expect(batmobile.tank).to.equal(0)
  })
  it('[4] initializes with an odometer at 0 miles', () => {
    expect(batmobile.odometer).to.equal(0)
  })
  it('[5] gets fill and drive methods from their prototype', () => {
    expect(batmobile.__proto__.fill).to.be.not.undefined;
    expect(batmobile.__proto__.drive).to.be.not.undefined;
  })
  it('[6] fill method increases the tank by the given gallons', () => {
    batmobile.fill(10)
    expect(batmobile.tank).to.equal(10)
    batmobile.fill(10)
    expect(batmobile.tank).to.equal(20)
  })
  it('[7] drive method when enough fuel increases odometer correctly', () => {
    batmobile.fill(10)
    batmobile.drive(50)
    expect(batmobile.odometer).to.equal(50)
  })
  it('[8] drive method when enough fuel decreases tank correctly', () => {
    batmobile.fill(10)
    batmobile.drive(100)
    expect(batmobile.tank).to.equal(5)
  })
  it('[9] drive method when NOT enough fuel increases miles by drivable miles', () => {
    batmobile.fill(10)
    batmobile.drive(201)
    expect(batmobile.odometer).to.equal(200)
  })
  it('[10] drive method when NOT enough fuel empties the tank', () => {
    batmobile.fill(10)
    batmobile.drive(201)
    expect(batmobile.tank).to.equal(0)
  })
  it('[11] drive method when NOT enough fuel returns correct string', () => {
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
  favSubjects: ['JS', 'Node', 'Redux']
}
const projectManagerAttr = {
  name: 'Dan',
  age: 35,
  location: 'San Francisco',
  specialty: 'Node',
  favLanguage: 'JavaScript',
  catchPhrase: 'Keep doing what you\'re doing!',
  gradClassName: 'Web25',
  favInstructor: 'Luis'
}
describe('Instance of Lambdasian', () => {
  let lambdasian
  beforeEach(() => {
    lambdasian = new results.Lambdasian(lambdasianAttr)
  })
  it('[1] initializes with the given name', () => {
    expect(lambdasian.name).to.equal(lambdasianAttr.name)
  })
  it('[2] initializes with the given age', () => {
    expect(lambdasian.age).to.equal(lambdasianAttr.age)
  })
  it('[3] initializes with the given location', () => {
    expect(lambdasian.location).to.equal(lambdasianAttr.location)
  })
  it('[4] have a speak method', () => {
    expect(lambdasian.__proto__.speak).to.be.not.undefined;
  })
  it('[5] can speak the right sentence', () => {
    expect(lambdasian.speak()).to.include(lambdasianAttr.name);
    expect(lambdasian.speak()).to.include(lambdasianAttr.location);
  })
})

describe('Instance of Instructor', () => {
  let instructor
  beforeEach(() => {
    instructor = new results.Instructor(instructorAttr)
  })
  it('[1] initializes with the given name, age and location', () => {
    expect(instructor.name).to.equal(instructorAttr.name)
    expect(instructor.age).to.equal(instructorAttr.age)
    expect(instructor.location).to.equal(instructorAttr.location)
  })
  it('[2] initializes with the given specialty', () => {
    expect(instructor.specialty).to.equal(instructorAttr.specialty)
  })
  it('[3] initializes with the given favLanguage', () => {
    expect(instructor.favLanguage).to.equal(instructorAttr.favLanguage)
  })
  it('[4] initializes with the given catchPhrase', () => {
    expect(instructor.catchPhrase).to.equal(instructorAttr.catchPhrase)
  })
  it('[5] has a speak method that speaks the right sentence', () => {
    expect(instructor.__proto__.speak).to.be.not.undefined;
    expect(instructor.speak()).to.include(instructorAttr.name);
    expect(instructor.speak()).to.include(instructorAttr.location);
  })
  it('[6] has a demo method', () => {
    expect(instructor.__proto__.demo).to.be.not.undefined;
  })
  it('[7] can demo correctly', () => {
    expect(instructor.demo('redux')).to.include('redux');
  })
  it('[8] has a grade method', () => {
    expect(instructor.__proto__.grade).to.be.not.undefined;
  })
  it('[9] can grade a student', () => {
    expect(instructor.grade({ name: 'petar' }, 'redux')).to.include('redux', 'petar');
  })
})

describe('Instances of Student', () => {
  let student
  beforeEach(() => {
    student = new results.Student(studentAttr)
  })
  it('[1] initializes with the given name, age and location', () => {
    expect(student.name).to.equal(studentAttr.name)
    expect(student.age).to.equal(studentAttr.age)
    expect(student.location).to.equal(studentAttr.location)
  })
  it('[2] initializes with the given previousBackground', () => {
    expect(student.previousBackground).to.equal(studentAttr.previousBackground)
  })
  it('[3] initializes with the given className', () => {
    expect(student.className).to.equal(studentAttr.className)
  })
  it('[4] initializes with the given favSubjects', () => {
    expect(student.favSubjects).to.equal(studentAttr.favSubjects)
  })
  it('[5] has a speak method and can speak correctly', () => {
    expect(student.__proto__.speak).to.be.not.undefined;
    expect(student.speak()).to.include(studentAttr.name);
    expect(student.speak()).to.include(studentAttr.location);
  })
  it('[6] has a listSubjects method', () => {
    expect(student.__proto__.listSubjects).to.be.not.undefined;
  })
  it('[7] can listSubjects correctly', () => {
    expect(student.listSubjects()).to.include('JS');
    expect(student.listSubjects()).to.include('Node');
    expect(student.listSubjects()).to.include('Redux');
  })
  it('[8] has a PRAssignment method', () => {
    expect(student.__proto__.PRAssignment).to.be.not.undefined;
  })
  it('[9] can do a PRAssignment correctly', () => {
    expect(student.PRAssignment('sql')).to.include(studentAttr.name);
    expect(student.PRAssignment('sql')).to.include('sql');
  })
  it('[10] has a sprintChallenge method', () => {
    expect(student.__proto__.sprintChallenge).to.be.not.undefined;
  })
  it('[11] can do a sprintChallenge correctly', () => {
    expect(student.sprintChallenge('sql')).to.include(studentAttr.name);
    expect(student.sprintChallenge('sql')).to.include('sql');
  })
})

describe('Instance of ProjectManager', () => {
  let pm
  beforeEach(() => {
    pm = new results.ProjectManager(projectManagerAttr)
  })
  it('[1] initializes with all the fields instructors have', () => {
    expect(pm.name).to.equal(projectManagerAttr.name)
    expect(pm.age).to.equal(projectManagerAttr.age)
    expect(pm.location).to.equal(projectManagerAttr.location)
    expect(pm.specialty).to.equal(projectManagerAttr.specialty)
    expect(pm.favLanguage).to.equal(projectManagerAttr.favLanguage)
    expect(pm.catchPhrase).to.equal(projectManagerAttr.catchPhrase)
  })
  it('[2] initializes with the given gradClassName', () => {
    expect(pm.gradClassName).to.equal(projectManagerAttr.gradClassName)
  })
  it('[3] initializes with the given favInstructor', () => {
    expect(pm.favInstructor).to.equal(projectManagerAttr.favInstructor)
  })
  it('[4] has a speak method that works', () => {
    expect(pm.__proto__.speak).to.be.not.undefined;
    expect(pm.speak()).to.include(projectManagerAttr.name);
    expect(pm.speak()).to.include(projectManagerAttr.location);
  })
  it('[5] has a demo method that works', () => {
    expect(pm.__proto__.demo).to.be.not.undefined;
    expect(pm.demo('redux')).to.include('redux');
  })
  it('[6] has a grade method that works', () => {
    expect(pm.__proto__.grade).to.be.not.undefined;
    expect(pm.grade({ name: 'petar' }, 'redux')).to.include('redux');
    expect(pm.grade({ name: 'petar' }, 'redux')).to.include('petar');
  })
  it('[7] has a standUp method', () => {
    expect(pm.__proto__.standUp).to.be.not.undefined;
  })
  it('[8] can standUp correctly', () => {
    expect(pm.standUp('eu3')).to.include(projectManagerAttr.name);
    expect(pm.standUp('eu3')).to.include('eu3');
  })
  it('[9] has a debugsCode method', () => {
    expect(pm.__proto__.debugsCode).to.be.not.undefined;
  })
  it('[10] can debugsCode correctly', () => {
    const result = pm.debugsCode({ name: 'Luke' }, 'redux');
    expect(result).to.include(projectManagerAttr.name);
    expect(result).to.include('Luke');
    expect(result).to.include('redux');
  })
})