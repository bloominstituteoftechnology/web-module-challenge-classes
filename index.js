
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
  function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
  };
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
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.stomach = 0;
  }
  eat(amtFood) {
    if(this.stomach < 10){
       return this.stomach = this.stomach + amtFood
    }
  }
  poop() {
    return this.stomach = this.stomach = 0
  }
  toString() {
    return `${this.name}, ${this.age}`
  }

}


const jacob = new Person({
    name: 'Jacob',
    age: 21,
})

console.log(jacob);
console.log(jacob.eat(6));
console.log(jacob.poop());
console.log(jacob.toString())
  
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
  
 class Car {
  constructor(carAttrs) {
    this.model = carAttrs.model;
    this.milesPerGallon = carAttrs.milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }

  fill(gallons) {
    return this.tank = this.tanks + gallons
  }

  drive(distance) {
    return this.odometer = this.odometer + distance,
    this.tank = (distance / this.milesPerGallon) - this.tank
  }

  empty() {
    if(this.tank = 0){
      return `The ${this.model} is out of fuel.`
    } else 
    return `The ${this.model} is good to keep driving!`
  }

  }


  const prius = new Car ({
    model: 'Prius',
    milesPerGallon: '70',
  })

  console.log(prius);
  console.log(prius.fill(10));
  console.log(prius.drive(100));
  console.log(prius.empty());
  
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
 class Lambdasian extends Person{
    constructor(attrs) {
      super(attrs);
      this.location = attrs.location;
    }

    speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}`
    }
  }

  const kieran = new Lambdasian({
    name: 'Kieran',
    age: 24,
    location: 'Idaho'
  })
  
  console.log(kieran);
  console.log(kieran.eat(2));
  console.log(kieran.eat(3));
  console.log(kieran.eat(1));
  console.log(kieran.poop());
  console.log(kieran.speak());


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
  constructor(attrs) {
    super(attrs);
    this.speciality = attrs.speciality;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }

  demo() {
    return `Today we are learning about ${this.speciality}`
  }
  grade(student) {
    return `${student} receives a perfect score on ${this.speciality}`
  }

 }


 const dan = new Instructor ({
  name: 'Dan',
  age: 42,
  speciality: 'Array methods',
  favLanguage: 'Javascript',
  catchPhrase: 'Ding Ding Ding'
 })

console.log(dan);
console.log(dan.eat(4));
console.log(dan.demo());
console.log(dan.grade('Jacob'));

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
      - Student instances have the following mesthods:
          + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
          + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
          + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
  */
 class Student extends Lambdasian{
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
  }

  listSubjects() {
    return `Loving ${this.favSubjects}!`
  }

  PRAssignment() {
    return `${this.name} has sumbitted a PR for ${this.className}`
  }

  sprintChallenge() {
    return `${this.name} has sumbitted a sprint challenge for ${this.className}`
  }

 }

 const jbeverage = new Student({
  name: 'Jaykyub',
  age: 21,
  previousBackground: 'Project Manager',
  className: 'Javascript Fundimentals',
  favSubjects: 'Java, CSS, HTML'
 })

 console.log(jbeverage);
 console.log(jbeverage.listSubjects());
 console.log(jbeverage.PRAssignment());
 console.log(jbeverage.sprintChallenge());
  
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
 class ProjectManager extends Instructor {
  constructor(attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }

    standUp() {
      return `${this.name} announces to ${this.favLanguage}, @channel standy times!`
    }

    debugsCode() {
      return `${this.name} debugs ${jbeverage.name}'s code on ${jbeverage.className}`
    }

 }

 const jimmy = new ProjectManager ({
   name: 'Jimbo',
   age: 24,
   location: 'Wisconson',
   speciality: 'Being useful',
   favLanguage: 'Javascript',
   gradClassName: 'webPT20',
   favInstructor: 'Dan',
 })

 console.log(jimmy);
 console.log(jimmy.standUp());
 console.log(jimmy.debugsCode());

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
