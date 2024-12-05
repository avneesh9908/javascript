//occurence of the the digit in array
let arr=[1,3,5,3,6,8,7,8,6,4,2,2,3,5];
function occurence(){
   let obj={};
   for(let i=0; i<arr.length; i++){
      if(obj[arr[i]]>=1){
        obj[arr[i]]++ ; 
      }
      else{
        obj[arr[i]]=1;
      }
}
  for(let digit in obj){
    console.log("number:", digit, "occurence of number:",obj[digit]);
  } 
}
occurence();

function occurence2() {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }

  map.forEach((value, key) => {
    console.log("number:", key, "occurrence of number:", value);
  });
}

occurence2();


//string 

let str1 = "hello world";

function charCountUsingObject() {
  let obj = {};
  
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (obj[char] >= 1) {
      obj[char]++;
    } else {
      obj[char] = 1; // Assign count as 1 for the first occurrence
    }
  }
  
  for (let char in obj) {
    console.log("char:", char, "occurrence:", obj[char]);
  }
}

charCountUsingObject();


let str = "hello world";

function charCountUsingMap() {
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  map.forEach((value, key) => {
    console.log("char:", key, "occurrence:", value);
  });
}

charCountUsingMap();



function countOccurrences(str) {
  let counts = {};
  for (let char of str) {
      counts[char] = counts[char] ? counts[char] + 1 : 1;
  }
  return counts;
}

// Example usage:
console.log(countOccurrences("hello"));  // { h: 1, e: 1, l: 2, o: 1 }

