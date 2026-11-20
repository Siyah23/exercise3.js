//Create an empty array called colors
let colors = []

//Add three colors to the array using push() 
colors.push("Red")
colors.push("Blue")
colors.push("Green")

//Create another array called numbers with five numbers
let numbers = [1, 2, 3, 4, 5]

//Remove the last color from the colors array
colors.pop()

//Add a new color to the beginning of the colors array
colors.unshift("Yellow")

//Print both arrays
console.log("Colors:", colors);
console.log("Numbers:", numbers);

//Print the length of both arrays
console.log("Length of colors:", colors.length);
console.log("Length of numbers:", numbers.length);
