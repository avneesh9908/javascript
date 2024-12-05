//reduce

//1. find the maximum
// let arr=[1,2,20,4,5,5,4,1];
// let max= arr.reduce((acc, curr)=>Math.max(acc, curr),-Infinity);
// console.log(max);

//element occurance
let arr=['apple','apple','papaya','orange','orange'];
let occurrences=arr.reduce((acc, fruits)=>{
    acc[fruits]=(acc[fruits]||0)+1;
    return acc;
},{});
console.log(occurrences);

//price sum
const items = [
    { name: "Apple", price: 50 },
    { name: "Banana", price: 30 },
    { name: "Cherry", price: 20 }
  ];
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
  console.log(totalPrice);  // 100

  //flatted array
  const arr1 = [[1, 2], [3, 4], [5, 6]];
  const flatted=arr1.reduce((acc,subarray)=>acc.concat(subarray),[]);
  console.log(flatted);


  const str = "Avneesh";
const reversed = str.split("").reduce((acc, char) => char + acc, "");
console.log(reversed);  // "hseenAv"



const words = ["apple", "banana", "cherry", "watermelon"];
const longestWord = words.reduce((acc, word) => acc.length > word.length ? acc : word, "");
console.log(longestWord);  // "watermelon"


const arr2 = ["a", "b", "c", "d"];
const concatenated = arr.reduce((acc, char) => acc + char, "");
console.log(concatenated);  // "abcd"

  