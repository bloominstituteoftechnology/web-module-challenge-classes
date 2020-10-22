/*This example will help you see how to work through these tasks

  EXAMPLE TASK:  Airplane

  Use the Airplane class below to do the following:
    1. Use a constructor to initialize `name` from an argument
    2. All airplanes built with `Airplane` should initialize with an `isFlying` property of false
    3. Give airplanes the ability to `.takeOff()` and `.land()`
        - If a plane takes off, it's `isFlying` property gets set to true.
        - If a plane lands, it's `isFlying` property gets set to false.
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
*/

/*
  TASK 1 - People got to eat and poop!

  Use the Person class below to do the following:
    1. Use a constructor to initialize `name` and `age` from arguments
    2. All instances of Person should initialize with an empty `stomach` array
    3. Give instances of Person the ability to `.eat("someFood")`
        - When a person eats, the food should be pushed into the `stomach` array
        - The `eat` method should have no effect if there are 10 items in the `stomach`
    4. Give instances of Person the ability to `.poop()`:
        - When an instance poops, its `stomach` should empty
    5. Give instances of Person a method `.toString()`:
        - When toString is invoked, it should return a string with the `name` and `age` of that instance
        - For example: when toString is invoked, it could return: "Mary, 50"
*/

class Person {

}

/*
  TASK 2 - Cars got to drive!

  Use the Car class below to do the following:
    1. Use a contructor to initialize `model` and `milesPerGallon` from arguments
    2. All instances built with Car should
        - initialize with an `tank` set at 0
        - initialize with an `odometer` set at 0
    3. Give cars the ability to fuel up with `.fill(gallons)`
        - when `.fill()` is invoked, add the `gallons` received to the `tank` 
    4. Give cars the ability to `.drive(distance)` 
        - when invoked, the `odometer` should go up by the `distance` driven
        - when invoked, the `tank` should go down depending on the `milesPerGallon` value
    5. If a car's `tank` becomes empty while driving, the `drive` method should return the
       following string:
        
       "I ran out of fuel at x miles!" 
       (x being the `odometer` value when the fuel ran out)

*/

class Car {

}

/*
  TASK 3 - Create a Lamdasian

  Use the Lambdasian class below to do the following:
    1. Use a contructor that takes a single argument - an object with the following keys:
        - name
        - age
        - location
    2. The constructor should use the received object to initialize `name`, `age`, and 
       `location` properties on the instance
    3. Instances of Lambdasian should be able to `.speak()`
        - Speaking should return the phrase:
        
        "Hello my name is {name}, I am from {location}"
        
    HINT: {name} and {location} come from the instance's own properties
*/
class Lambdasian {

}

/*
  TASK 4 - Instructor Class

  Use the Instructor class below to do the following:
    1. Extend Lambdasian onto Instructor.
    2. Use a constructor that takes a single argument - an object with the following keys:
        - All the keys used to initialize instances of Lambdasian
        - `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        - `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        - `catchPhrase`: i.e. `Don't forget the homies`
    3. The constructor should call the parent constructor passing it what it needs
    4. The constructor should also initialize `specialty`, `favLanguage`, and `catchPhrase` properties on the instance
    5. Instructor instances should have the following methods:
        - `demo()` - receives a `subject` string as an argument and returns the phrase:
        
          'Today we are learning about {subject}' 
        
        - `grade()` - receives a `student` object and a `subject` string as arguments and returns the phrase:
        
          '{student.name} receives a perfect score on {subject}'
*/
class Instructor {

}

/*
  TASK 5 - Student Class

  Use the Student class below to do the following:
    1. Extend Lambdasian onto Student
    2. Use a constructor to take a single argument -  an object with the following keys:
        - All the keys used to initialize instances of Lambdasian
        - `previousBackground` i.e. what the Student used to do before Lambda School
        - `className` i.e. CS132
        - `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    3. The constructor should call the parent constructor passing to it what it needs
    4. The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    5. Student instances should have the following methods:
        - `listSubjects()` - a method that returns all of the student's `favSubjects` in a single string: 
        
        `Loving {HTML, CSS, JS}!`.
        
        - `PRAssignment()` - a method that receives a subject as an argument and returns the string: 
        
        `{student.name} has submitted a PR for {subject}`
        
        - `sprintChallenge()` - similar to PRAssignment but returns the string:
        
        `{student.name} has begun sprint challenge on {subject}`
*/
class Student {

}

/*
  TASK 6 - Project Manager

  Use the ProjectManager class below to do the following:
    1. Extend Instructor onto ProjectManager
    2. Use a constructor to take a single argument - an object with the following keys:
        - All the keys used to initialize instances of Instructor.
        - `gradClassName`: i.e. CS1
        - `favInstructor`: i.e. Sean
    3. The constructor should call the parent constructor passing to it what it needs
    4. The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance
    5. ProjectManager instances have the following methods:
        - `standUp()` - a method that takes in a slack channel and returns the string:
        
        `{name} announces to {channel}, @channel standy times!`

        - `debugsCode()` - a method that takes in a student object and a subject and returns the string:
        
        `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager {

}

/*
  STRETCH PROBLEMS (not autograded!)
    1. Extend the functionality of the `Student` class
      - add a property called `grade` 
      - set it equal to a number between 1-100
    
    2. Now that our students have a grade, build out another method called `changeGrade()` on the Instructor class
      - It should randomly add or subtract points from a student's grade
      - This should be able to be used by instructors and PM's
 
      HINT: Math.random can help here
    
    3. Add a `graduate()` method to `Student`
      - When invoked, it will check the grade of the student to see if they're ready to graduate from Lambda School
      - If the student's grade is 70% or above return this string:
      
      `let them graduate!`
      
      - If the student's grade is under 70%, go back to grading their assignments to increase their score
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
