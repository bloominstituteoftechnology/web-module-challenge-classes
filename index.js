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
  constructor(n,a){
    this.name = n;
    this.age = a;
    this.stomach = [];
     
  }
  eat(someFood){
   if(this.stomach.length <= 9){
    this.stomach.push(someFood);
   }
  }
  poop(){
    this.stomach = [];
  }
  toString(){
    return this.name + ' age: ' + this.age;
  }
  seeStomach(){
    for(  let i in this.stomach){
        if(this.stomach.length === 0){
          console.log('Stomach Empty');
          
        }else 
        console.log(this.stomach[i]);
        
    }
  }

}
let frank = new Person('frank',212);
frank.eat('food');
frank.seeStomach();
console.log(frank.toString());
frank.poop();
frank.seeStomach();




/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` 
    from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. 
    Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" 
        x being `odometer`.
*/

class Car {
  constructor(model,mpg){
    this.model = model;
    this.milesPerGallon = mpg;
    this.tank = 0;
    this.odometer = 0;
    this.lastFilledUp = 0;
  }

  fill(gallons){
    this.lastFilledUp = gallons;
    this.tank = this.tank += gallons;
  }
   getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  drive(distance){
    // https://itstillruns.com/calculate-gallons-gas-used-7615514.html 
    // Formula to find how many gallons was used by the distance and mpg
    let milesPerHour = this.getRandomInt(15,55) ;
    console.log('Driveing '+milesPerHour+' MPH');
    console.log('There are '+this.tank+' gallons in the tank before traveling');
    let tankBeforeTraveling = this.tank;
    let subFromThetank = 1/this.milesPerGallon;
    console.log('whats been subtracted from the tank after a mile '+ subFromThetank);
    let gallonsUsed = distance * subFromThetank;
    this.tank = this.tank -= gallonsUsed;
    if(this.tank <= 0){
      // Ran out of gas
      // How many gallons of gas need to be added to get to zero
      //console.log('Whats in the tank '+ this.tank + ' gallons of gas');
      let makeup = this.tank * this.milesPerGallon;
      //console.log('make up for '+ makeup + ' miles');
      let onlyMadeIt = this.milesPerGallon * this.lastFilledUp ;
      //console.log('Only made it '+ onlyMadeIt+ ' miles into the trip');
      this.odometer = this.odometer += onlyMadeIt;
      return ` Rand out of fuel at the odometer reading ${this.odometer} which was ${onlyMadeIt} miles
        into the trip. You must make up for ${makeup} miles of gasoline to complete the trip of ${distance} miles successfully `;

    }else
    return 'There are '+this.tank+' gallons in the tank after traveling ' + distance + ' miles';
    this.odometer = this.odometer += distance;
  }
}

let thecar = new Car('theCar',20);
thecar.fill(2);
console.log(thecar.drive(60));



/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on
     the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.

        + {name} and {location} of course come from the instance's own properties.
*/
class Lambdasian {
  constructor(obj){
    this.name = obj.name;
    this.age = obj.age;
    this.location = obj.location;
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}
let lambdas  = new Lambdasian({name:'Flippen Nipperson',age:177,location:'Iceland'});
console.log(lambdas.speak());

/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and 
    `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 
        'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments
         and returns '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Lambdasian {
  constructor(obj){
    super(obj);
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;

  }
  demo(subject){
    return `Today we are learning about ${subject}`;
  }
  grade(student,subj){
    return `${student.name} recieves a perfect score on ${subj}`;
  }
  }


  let scott = new Instructor({name:'Scott Guard',age:203,location:'Uranus',specialty:'PHP'
        ,favLanguage:'Perl',catchPhrase:'Another day another dollar'});

  console.log(scott.demo('react-router')+' For my name is not '+scott.name + ' and I am not '+ scott.age);
  console.log(scott.grade(lambdas,'react-redux'));

/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before Lambda School
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects
         ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` 
    and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects 
        in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns 
        `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun 
        sprint challenge on {subject}`
*/
class Student extends Lambdasian {
  constructor(obj){
    super(obj);
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
  }
  listSubjects(){
    let str = '';
    for( let a in   this.favSubjects){
        str = str+ ', ' + this.favSubjects[a];
    }
    return `Loving ${str}`;
  }
  PRAssignment(sub){
    return `${this.name} has submitted a PR for ${sub}`;
  }
  sprintChallenge(sub){
    return `${this.name} has begun sprint challenge on ${sub}`;
  }
}
let favAr = ['PHP', 'HTML', 'CSS', 'Less', 'Sass', 'Bootstrap', 'Javascript', 'React', 'Jquery', 'Babylon3D', 'Java', 'C++', 'C#', 'A+']
let rick = new Student({name:'Rick Stick',age:77,location:'Red Planet',previousBackground:'Wood Chucker'
          ,className:'Rich Guy', favSubjects:favAr});
console.log(rick.listSubjects());
console.log(rick.PRAssignment('Perl'));
console.log(rick.sprintChallenge('SASS'));

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
class ProjectManager {

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
