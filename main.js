function showProduct() {
  var name = document.getElementById("pName").value;
  var price = document.getElementById("pPrice").value;
  var desc = document.getElementById("pDesc").value;

  // Concatenation
  let result = "Product: " + name + " | Price: " + price + " | Description: " + desc;

  // Method 1: Show in paragraph
  document.getElementById("output").innerText = result;

  // Method 2: Show in alert
  alert(result);

  // Method 3: Show in console
  console.log(result);

}
