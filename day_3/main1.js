// 1. إنشاء object يمثل طالب
let student = {
    name: "Ahmed",
    age: 20,
    grade: "B",
    isGraduated: false
};

// 2. عرض الاسم والعمر
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);

// 3. تغيير قيمة grade
student.grade = "A";

// 4. عرض جميع الـ properties (المفاتيح)
console.log("Object keys:", Object.keys(student));

// 5. عرض جميع الـ values (القيم)
console.log("Object values:", Object.values(student));

// 6. إضافة property جديدة (email)
student.email = "ahmed@example.com";

// 7. حذف خاصية isGraduated
delete student.isGraduated;

console.log("Updated student object:", student);
