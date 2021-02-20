
/*
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
  constructor (name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  poop () {
    return (this.stomach = []);
  };

  toString () {
    return `${this.name}, ${this.age} `;
  };

  eat (someFood) {
    if (this.stomach.length < 10) {
      this.stomach.push(someFood);
    } 
}
}
    Person.prototype.poop = function () {
      return (this.stomach = []);
    };

    Person.prototype.toString = function () {
      return `${this.name}, ${this.age} `;
    };

    Person.prototype.eat = function (someFood) {
      if (this.stomach.length < 10) {
        this.stomach.push(someFood);
      } 
  }



@@ -84,20 +85,25 @@ class Car {
  this.tank = 0;
  this.odometer = 0;  
  }
}

Car.prototype.drive = function (distance) {
  this.odometer = this.odometer + distance;
  if (distance === (this. tank * this.milesPerGallon) ) {
  return (this.tank = this.tank - distance);
  } else {
    return this.tank * this.milesPerGallon - distance;
  drive (distance) {
    const miles = this.tank * this.milesPerGallon;
    if (distance <= miles){
      this.odometer = this.odometer + distance;
      this.tank = this.tank - (distance/this.milesPerGallon);
    }else{
      this.odometer = this.odometer + miles;
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles!`;
    }
  }
  fill (gallons) {
    return (this.tank = this.tank + gallons);
  };
}




Car.prototype.fill = function (gallons) {
  return (this.tank = this.tank + gallons);
};
/*
  TASK 3
    - Write a Lambdasian class.
@@ -111,6 +117,14 @@ Car.prototype.fill = function (gallons) {
        + {name} and {location} of course come from the instance's own properties.
*/
class Lambdasian {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }

}

@@ -128,7 +142,19 @@ class Lambdasian {
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/
class Instructor {
class Instructor extends Lambdasian {
  constructor (attr) {
    super (attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`
  }
  grade(student, subject) {
    return `${student.name} recieves a perfect score on ${subject}`
  }

}

@@ -147,8 +173,22 @@ class Instructor {
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/
class Student {

class Student extends Lambdasian {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;    
  }
  listSubjects(favSubjects) {
    return `Loving ${this.favSubjects}}`
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`
  }
}

/*
@@ -164,8 +204,18 @@ class Student {
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager {

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName =  attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to the ${slackChannel}, @channel standy times!`
  }
  debugsCode(student, subject) {
   return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}

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
  /*
    STRETCH PROBLEM (no tests!)
      - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
      - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
      - Add a graduate method to a student.
        + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
        + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
  */


  //End of Challenge
  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
  function foo(){
    return 'bar';
}

export default{
    foo,
    Person,
    Car,
    Lambdasian,
    Instructor,
    Student,
    ProjectManager
}
