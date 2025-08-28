// Create an array of students
var students = [
  { name: "Abdo", age: 20, grade: "A", isGraduated: true },
  { name: "Adel", age: 22, grade: "B", isGraduated: false },
  { name: "Omar", age: 21, grade: "C", isGraduated: true },
  { name: "Amira", age: 19, grade: "A", isGraduated: false }
];

var totalAge = 0;
for (let i = 0; i < students.length; i++) {
  totalAge += students[i].age;
}
var averageAge = totalAge / students.length;

var graduatedCount = students.filter(s => s.isGraduated).length;

var notGraduatedCount = students.filter(s => !s.isGraduated).length;

students.forEach(student => {
  console.log("Keys:", Object.keys(student));
  console.log("Values:", Object.values(student));
});

var newStudent = { name: "Adel", age: 23, grade: "B", isGraduated: false };
newStudent.email = "Adel@example.com";
students.push(newStudent);

students.forEach(student => {
  delete student.isGraduated;
});

console.log("Student names:", students.map(s => s.name));
console.log("Average age:", averageAge);
console.log("Graduated students:", graduatedCount);
console.log("Not graduated students:", notGraduatedCount);
console.log("Updated Students:", students);