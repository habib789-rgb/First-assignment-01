// Problem 1

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))




// problem 2
function reverseString(text: string): string {
  return text.split("").reverse().join("");
}
console.log(reverseString("typescript"));
