countries = ["Japan", "Germany", "America", "Canada", "Turkey"];

//Original Array
console.log("Original Array\n"+ countries);

//Aplpabetical Order
const sorted = countries.slice().sort()
console.log("Array in alphabretical order\n" + sorted);
console.log("Original Array\n"+ countries);

//Reverse Alphabetical Order
const sorted_ = countries.slice().sort().reverse()
console.log("Array in reverse alphabetical order\n" + sorted_);
console.log("Original Array\n"+ countries);

//Reverse  Order
countries.reverse();
console.log("Array in reverse order\n" + countries);

//2nd Reverse
countries.reverse();
console.log("Array in reverse order again to bring it back to original order\n" + countries);

//Aplpabetical Order
countries.sort()
console.log("Original Array in alphabretical order\n" + countries);

//Reverse Alphabetical Order
countries.slice().reverse()
console.log("OriginalArray in reverse alphabetical order\n" + countries);