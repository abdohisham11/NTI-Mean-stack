var student = {
    name: "Abdo",
    age: 22,
    grad: "C",
    isGraduated: true,
}
console.log("name:" , student.name);
console.log("age:" , student.age);
student.grade = "A"
console.log("properties:" , Object.keys(student));//task1
console.log("values:" , Object.values(student));
student.email = "Abdo@gmail.com";
delete student . isGraduated;
console.log("updated student Object:", student);
