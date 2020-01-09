class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.courses = [];
  }
  name() {
    return `${this.firstName} ${this.lastName}`;
  }

  enroll(course) {
    if (!this.courses.includes(course)) {
      this.courses.forEach(crs => {
        if (crs.conflictsWith(course)) {
          throw 'Conflict courses';
        }
      });
    }
    this.courses.push(course);
    course.addStudent(this);
  }

  courseLoad() {
    const courseLoad = {};
    this.courses.forEach(course => {
      let dpt = course.department;
      courseLoad[dpt] = courseLoad[dpt] || 0;
      courseLoad[dpt] += course.credits;
    });
    return courseLoad;
  }
}

class Course {
  constructor(courseName, department, credits, days, block) {
    this.courseName = courseName;
    this.department = department;
    this.credits = credits;
    this.students = [];
    this.block = block;
    this.days = days;
  }
  addStudent(student) {
    if (this.students.indexOf(student) === -1) {
      this.students.push(student);
      student.enroll(this);
    }
  }
  conflictsWith(other) {
    if (this.block !== other.block) return false;
    return this.days.some(day => other.days.indexOf(day) !== -1);
  }
}

let student1 = new Student('Nigel', 'Leffler');
let course1 = new Course('101', 'CS', 3, ['mon', 'wed', 'fri'], 1);
let course2 = new Course('201', 'CS', 3, ['wed'], 1);
let course3 = new Course('301', 'ENG', 3, ['tue'], 1);
let course4 = new Course('401', 'BIO', 3, ['mon', 'wed', 'fri'], 2);
console.log(student1.name());
student1.enroll(course1);
student1.enroll(course3);
//student1.enroll(course2);
console.log(student1.courseLoad());
// console.log('should be true = ' + course1.conflictsWith(course2));
// console.log('should be false = ' + course1.conflictsWith(course3));
// console.log('should be false = ' + course1.conflictsWith(course4));
