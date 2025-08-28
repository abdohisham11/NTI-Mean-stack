// Task 1: Word Counter
function task1() {
  let sentence = "JavaScript is fun"; // ممكن تخليه prompt("ادخل جملة:")
  let words = sentence.split(" ");
  let output = `Total words: ${words.length}\n`;
  words.forEach(word => {
    output += `${word} => ${word.length} letters\n`;
  });
  document.getElementById("output1").textContent = output;
}

// Task 2: Group Users by Age
function task2() {
  let users = [
    { name: "Ali", age: 22 },
    { name: "Sara", age: 28 },
    { name: "Mona", age: 35 },
    { name: "Ahmed", age: 45 }
  ];

  let groups = { Young: [], Middle: [], Old: [] };

  users.forEach(user => {
    if (user.age < 25) {
      groups.Young.push(user);
    } else if (user.age <= 40) {
      groups.Middle.push(user);
    } else {
      groups.Old.push(user);
    }
  });

  document.getElementById("output2").textContent = JSON.stringify(groups, null, 2);
}

// Task 3: Flatten and Count Products
function task3() {
  let categories = [
    { category: "Fruits", products: ["Apple", "Banana", "Apple"] },
    { category: "Vegetables", products: ["Carrot", "Apple"] },
    { category: "Dairy", products: ["Milk", "Cheese"] }
  ];

  // 1. Flatten products
  let allProducts = categories.flatMap(cat => cat.products);

  // 2. Count occurrences
  let counts = {};
  allProducts.forEach(product => {
    counts[product] = (counts[product] || 0) + 1;
  });

  document.getElementById("output3").textContent = JSON.stringify(counts, null, 2);
}
