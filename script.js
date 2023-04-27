for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("these are the for loops");

let count = 0;
while (count <= 10) {
  console.log(count);
  count++;
}
count = 10;
while (count >= 1) {
  console.log(count);
  count--;
}

console.log("these are the while loops");

count = 1;
do {
  console.log(count);
  count++;
} while (count <= 10);

count = 10;
do {
  console.log(count);
  count--;
} while (count >= 1);

console.log("these are the do__while loops");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers) {
  console.log(number);
}

console.log("this is the array count");

let string = prompt("Give me a word 10 characters or less");
while (string.length < 10) {
  string = " " + string;
}
console.log(string);
