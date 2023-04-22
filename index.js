// Sample array of numbers
var numbers = [1, 2, 3, 4, 5];

// Function to find sum of array elements
function findSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Call the function with the array
var sum = findSum(numbers);

// Display the result in the DOM
var resultElement = document.createElement("p");
resultElement.textContent = "Sum of array elements: " + sum;
document.body.appendChild(resultElement);
