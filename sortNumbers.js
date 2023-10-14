let userInput = prompt("Enter numbers separated by commas:");
let numbers = userInput.split(',').map(Number);
numbers.sort(function (a, b) {
    return b - a;
});
console.log("Sorted Array: " + numbers.join(', '));
