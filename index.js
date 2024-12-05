let arr1 = [64, 4, 8, 6];
let arr2 = [1, 1, 3, 4];
let arr3 = [1, 3, 3, 64];

let arr = [...arr1, ...arr2, ...arr3];
console.log(arr);

let temp = arr;

let p = [];
let d="v";



for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 0; j < temp.length; j++) {
    if (arr[i] == temp[j]) {
      count++;
    }
  }
  if (count == 1) {
    p.push(arr[i]);
  }
}
let c = p.sort((a, b) => {
  return a - b;
});
console.log(p);
