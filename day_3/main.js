// 1. إنشاء مصفوفة فيها 10 أرقام (موجبة وسالبة)
let numbers = [5, -3, 10, -7, 8, 15, -2, 20, -9, 12];

// متغيرين لتجميع القيم
let sumPositive = 0;
let sumAll = 0;


for (let i = 0; i < numbers.length; i++) {
    sumAll += numbers[i]; // نجمع كل الأعداد
    if (numbers[i] < 0) {
        continue; // تخطي السالب
    }
    sumPositive += numbers[i]; // جمع الموجب فقط
}

// 4. عرض النتائج
console.log("Sum of positive numbers:", sumPositive);
console.log("Sum of all numbers:", sumAll);

numbers.push(25);  // إضافة عنصر آخر في النهاية
numbers.shift();   // إزالة أول عنصر

console.log("Updated array:", numbers);
