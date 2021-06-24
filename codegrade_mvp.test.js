import functions from './index';

describe('fooFunction', ()=>{
    it('foo returns foo', ()=>{
        expect(functions.foo()).toBe('bar');
    })
});
describe('Instance of Person', () => {
    let neo
    const foods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    beforeEach(() => {
      neo = new functions.Person('Neo', 20)
    })
    it('[1] initializes with the given name', () => {
      expect(neo.name).toBe('Neo')
    })
    it('[2] initializes with the given age', () => {
      expect(neo.age).toEqual(20)
    })
    it('[3] initializes with an empty stomach', () => {
      expect(neo.stomach).toEqual([])
      expect(neo.stomach.length).toEqual(0)
    })
    it('[4] has eat, poop and toString methods', () => {
      expect(neo.__proto__.eat).not.toBeUndefined();
      expect(neo.__proto__.poop).not.toBeUndefined();
      expect(neo.__proto__.toString).not.toBeUndefined();
    })
    it('[5] can eat up to 10 foods', () => {
      foods.forEach(item => neo.eat(item))
      foods.forEach(item => expect(neo.stomach).toContain(item))
    })
    it('[6] can eat no more than 10 foods', () => {
      foods.forEach(item => neo.eat(item))
      neo.eat(11)
      expect(neo.stomach.length).not.toEqual(11)
      expect(neo.stomach.length).toEqual(10)
    })
    it('[7] can poop to empty stomach', () => {
      foods.forEach(item => neo.eat(item))
      neo.poop()
      expect(neo.stomach.length).toEqual(0)
    })
    it('[8] can state name and age', () => {
      const str = neo.toString();
      expect(str).toContain('Neo')
      expect(str).toContain(20)
    })
  })
  
  describe('Instance of Car', () => {
    let batmobile
    beforeEach(() => {
      batmobile = new functions.Car('BatMobile', 20)
    })
    it('[1] initializes with the given model', () => {
      expect(batmobile.model).toBe('BatMobile')
    })
    it('[2] initializes with the given milesPerGallon', () => {
      expect(batmobile.milesPerGallon).toEqual(20)
    })
    it('[3] initializes with an empty tank', () => {
      expect(batmobile.tank).toEqual(0)
    })
    it('[4] initializes with an odometer at 0 miles', () => {
      expect(batmobile.odometer).toEqual(0)
    })
    it('[5] gets fill and drive methods from their prototype', () => {
      expect(batmobile.__proto__.fill).not.toBeUndefined();
      expect(batmobile.__proto__.drive).not.toBeUndefined();
    })
    it('[6] fill method increases the tank by the given gallons', () => {
      batmobile.fill(10)
      expect(batmobile.tank).toEqual(10)
      batmobile.fill(10)
      expect(batmobile.tank).toEqual(20)
    })
    it('[7] drive method when enough fuel increases odometer correctly', () => {
      batmobile.fill(10)
      batmobile.drive(50)
      expect(batmobile.odometer).toEqual(50)
    })
    it('[8] drive method when enough fuel decreases tank correctly', () => {
      batmobile.fill(10)
      batmobile.drive(100)
      expect(batmobile.tank).toEqual(5)
    })
    it('[9] drive method when NOT enough fuel increases miles by drivable miles', () => {
      batmobile.fill(10)
      batmobile.drive(201)
      expect(batmobile.odometer).toEqual(200)
    })
    it('[10] drive method when NOT enough fuel empties the tank', () => {
      batmobile.fill(10)
      batmobile.drive(201)
      expect(batmobile.tank).toEqual(0)
    })
    it('[11] drive method when NOT enough fuel returns correct string', () => {
      batmobile.fill(10)
      expect(batmobile.drive(201)).toContain(200)
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
      lambdasian = new functions.Lambdasian(lambdasianAttr)
    })
    it('[1] initializes with the given name', () => {
      expect(lambdasian.name).toEqual(lambdasianAttr.name)
    })
    it('[2] initializes with the given age', () => {
      expect(lambdasian.age).toEqual(lambdasianAttr.age)
    })
    it('[3] initializes with the given location', () => {
      expect(lambdasian.location).toEqual(lambdasianAttr.location)
    })
    it('[4] have a speak method', () => {
      expect(lambdasian.__proto__.speak).not.toBeUndefined();
    })
    it('[5] can speak the right sentence', () => {
      expect(lambdasian.speak()).toContain(lambdasianAttr.name);
      expect(lambdasian.speak()).toContain(lambdasianAttr.location);
    })
  })
  
  describe('Instance of Instructor', () => {
    let instructor
    beforeEach(() => {
      instructor = new functions.Instructor(instructorAttr)
    })
    it('[1] initializes with the given name, age and location', () => {
      expect(instructor.name).toEqual(instructorAttr.name)
      expect(instructor.age).toEqual(instructorAttr.age)
      expect(instructor.location).toEqual(instructorAttr.location)
    })
    it('[2] initializes with the given specialty', () => {
      expect(instructor.specialty).toEqual(instructorAttr.specialty)
    })
    it('[3] initializes with the given favLanguage', () => {
      expect(instructor.favLanguage).toEqual(instructorAttr.favLanguage)
    })
    it('[4] initializes with the given catchPhrase', () => {
      expect(instructor.catchPhrase).toEqual(instructorAttr.catchPhrase)
    })
    it('[5] has a speak method that speaks the right sentence', () => {
      expect(instructor.__proto__.speak).not.toBeUndefined();
      expect(instructor.speak()).toContain(instructorAttr.name);
      expect(instructor.speak()).toContain(instructorAttr.location);
    })
    it('[6] has a demo method', () => {
      expect(instructor.__proto__.demo).not.toBeUndefined();
    })
    it('[7] can demo correctly', () => {
      expect(instructor.demo('redux')).toContain('redux');
    })
    it('[8] has a grade method', () => {
      expect(instructor.__proto__.grade).not.toBeUndefined();
    })
    it('[9] can grade a student', () => {
      expect(instructor.grade({ name: 'petar' }, 'redux')).toContain('redux', 'petar');
    })
  })
  
  describe('Instances of Student', () => {
    let student
    beforeEach(() => {
      student = new functions.Student(studentAttr)
    })
    it('[1] initializes with the given name, age and location', () => {
      expect(student.name).toEqual(studentAttr.name)
      expect(student.age).toEqual(studentAttr.age)
      expect(student.location).toEqual(studentAttr.location)
    })
    it('[2] initializes with the given previousBackground', () => {
      expect(student.previousBackground).toEqual(studentAttr.previousBackground)
    })
    it('[3] initializes with the given className', () => {
      expect(student.className).toEqual(studentAttr.className)
    })
    it('[4] initializes with the given favSubjects', () => {
      expect(student.favSubjects).toEqual(studentAttr.favSubjects)
    })
    it('[5] has a speak method and can speak correctly', () => {
      expect(student.__proto__.speak).not.toBeUndefined();
      expect(student.speak()).toContain(studentAttr.name);
      expect(student.speak()).toContain(studentAttr.location);
    })
    it('[6] has a listSubjects method', () => {
      expect(student.__proto__.listSubjects).not.toBeUndefined();
    })
    it('[7] can listSubjects correctly', () => {
      expect(student.listSubjects()).toContain('JS');
      expect(student.listSubjects()).toContain('Node');
      expect(student.listSubjects()).toContain('Redux');
    })
    it('[8] has a PRAssignment method', () => {
      expect(student.__proto__.PRAssignment).not.toBeUndefined();
    })
    it('[9] can do a PRAssignment correctly', () => {
      expect(student.PRAssignment('sql')).toContain(studentAttr.name);
      expect(student.PRAssignment('sql')).toContain('sql');
    })
    it('[10] has a sprintChallenge method', () => {
      expect(student.__proto__.sprintChallenge).not.toBeUndefined();
    })
    it('[11] can do a sprintChallenge correctly', () => {
      expect(student.sprintChallenge('sql')).toContain(studentAttr.name);
      expect(student.sprintChallenge('sql')).toContain('sql');
    })
  })
  
  describe('Instance of ProjectManager', () => {
    let pm
    beforeEach(() => {
      pm = new functions.ProjectManager(projectManagerAttr)
    })
    it('[1] initializes with all the fields instructors have', () => {
      expect(pm.name).toEqual(projectManagerAttr.name)
      expect(pm.age).toEqual(projectManagerAttr.age)
      expect(pm.location).toEqual(projectManagerAttr.location)
      expect(pm.specialty).toEqual(projectManagerAttr.specialty)
      expect(pm.favLanguage).toEqual(projectManagerAttr.favLanguage)
      expect(pm.catchPhrase).toEqual(projectManagerAttr.catchPhrase)
    })
    it('[2] initializes with the given gradClassName', () => {
      expect(pm.gradClassName).toEqual(projectManagerAttr.gradClassName)
    })
    it('[3] initializes with the given favInstructor', () => {
      expect(pm.favInstructor).toEqual(projectManagerAttr.favInstructor)
    })
    it('[4] has a speak method that works', () => {
      expect(pm.__proto__.speak).not.toBeUndefined();
      expect(pm.speak()).toContain(projectManagerAttr.name);
      expect(pm.speak()).toContain(projectManagerAttr.location);
    })
    it('[5] has a demo method that works', () => {
      expect(pm.__proto__.demo).not.toBeUndefined();
      expect(pm.demo('redux')).toContain('redux');
    })
    it('[6] has a grade method that works', () => {
      expect(pm.__proto__.grade).not.toBeUndefined();
      expect(pm.grade({ name: 'petar' }, 'redux')).toContain('redux');
      expect(pm.grade({ name: 'petar' }, 'redux')).toContain('petar');
    })
    it('[7] has a standUp method', () => {
      expect(pm.__proto__.standUp).not.toBeUndefined();
    })
    it('[8] can standUp correctly', () => {
      expect(pm.standUp('eu3')).toContain(projectManagerAttr.name);
      expect(pm.standUp('eu3')).toContain('eu3');
    })
    it('[9] has a debugsCode method', () => {
      expect(pm.__proto__.debugsCode).not.toBeUndefined();
    })
    it('[10] can debugsCode correctly', () => {
      const result = pm.debugsCode({ name: 'Luke' }, 'redux');
      expect(result).toContain(projectManagerAttr.name);
      expect(result).toContain('Luke');
      expect(result).toContain('redux');
    })
  })
