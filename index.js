/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
  constructor(name, age,){
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  eat(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
  poop(){
    this.stomach.length = 0;  //A.length = 0; should empty the array
  }
  toString(){
    return `${this.name}, ${this.age}`;
  }
}

const guy = new Person({"Neo", "20"});
// console.log(guy.tostring());
// console.log(guy.eat());

/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car{
  constructor(model, milesPerGallon){
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
    }
    fill(gallons){
      this.tank += gallons;
    }
    drive(distance){
      this.odometer += distance;
      distance -= this.tank.unshift(this.milesPerGallon){
        if(this.tank = 0){
        return (`I ran out of fuel at ${this.odometer} miles!`)};
      }
    }
    

}


/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/
class Lambdasian {
  constructor(param){
  this.name = param.name;
  this.age = param.age;
  this.location = param.location;
  }
  speak(){
  return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}
const studentOne = new Lambdasian({
  name:"Timmy",
  age:"31",
  location:"Seattle, WA",
});
console.log(studentOne.speak());

/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Lambdasian{
  constructor(keys){
    super(keys)
    this.specialty = keys.specialty;
    this.favLanguage = keys.favLanguage;
    this.catchPhrase = keys.catchPhrase;
  }
  demo(){
    return `Today we are learning about ${this.specialty}`;
  }
  grade(){
    return `${this.name}, recieves a perfect score on ${this.favLanguage}`;
  }
}
const teacher = new Instructor({
  name:"Notorious BIG",
  age:"28",
  location:"Brookyln, NY",
  specialty:"Rapping",
  favLanguage:"Slang",
  catchPhrase:"I love it when you call big poppa!",
});
console.log(teacher.speak());
console.log(teacher.demo());
console.log(teacher.grade());
/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before Lambda School
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/
class Student extends Instructor {
  constructor(arg){
    super(arg);
    this.previousBackground = arg.previousBackground;
    this.className = arg.className;
    this.favSubjects = arg.favSubjects;
  }
  listSubjects(){
    return `${this.favSubjects}`;
  }
  prAssignment(){
    return `${this.name} has submitted a PR for ${this.favSubjects}`;
  }
  sprintChallenge(){
    return `${this.name} has begun sprint challenge on ${this.className}`;
  }
}
const babyRapper = new Student({
  name:"Lil Nas X",
  age:"21",
  location:"Little Springs, GA",
  specialty:"Memes",
  favLanguage:"Clowning",
  catchPhrase:"Old Country Road",
  previousBackground:"dreamer",
  className:"CS132",
  favSubjects:"Loving HTML, CSS, JS!",
});
console.log(babyRapper.speak());
console.log(babyRapper.demo());
console.log(babyRapper.grade());
console.log(babyRapper.listSubjects());
console.log(babyRapper.prAssignment());
console.log(babyRapper.sprintChallenge());
/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager extends Student{
  constructor(stuff){
    super(stuff);
    this.gradClassName = stuff.gradClassName;
    this.favInstructor = stuff.favInstructor;
  }
  standUp(){
    return `${this.name} annouces to ${this.gradClassName}, @channel standy times!`;
  }
  deBugsCode(){
    return `${this.name} debugs ${babyRapper.name}'s code on ${this.specialty}`
  }
}
const guerrilla = new ProjectManager({
  name:"Harabe",
  age:"deceased",
  location:"Buried in the ground",
  specialty:"Being famous",
  favLanguage:"Grunting",
  catchPhrase:"Don't shoot",
  previousBackground:"Being caged",
  className:"Theology",
  favSubjects:"Eating, pooping, and chilling",
  gradClassName:"Defense Against the Dark Arts",
  favInstructor:"Professor McConnell",
});
console.log(guerrilla.speak());
console.log(guerrilla.demo());
console.log(guerrilla.grade());
console.log(guerrilla.listSubjects());
console.log(guerrilla.prAssignment());
console.log(guerrilla.sprintChallenge());
console.log(guerrilla.standUp());
console.log(guerrilla.deBugsCode());
/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Lambdasian) { module.exports.Lambdasian = Lambdasian }
  if (Instructor) { module.exports.Instructor = Instructor }
  if (Student) { module.exports.Student = Student }
  if (ProjectManager) { module.exports.ProjectManager = ProjectManager }
}
