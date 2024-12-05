//map
let arr=[1,2,3,4,5,6];
// let result = arr.map(num=>num*2);
// console.log(result); // [2, 4, 6, 8, 10,]


// let result= arr.map(num=>(num%2==0)?num*2:null);
// console.log(result);
// let filterResult=result.filter(num=>num!==null);
// console.log(filterResult);

// const users = [
//     { name: "Alice", details: { age: 25 } },
//     { name: "Bob", details: { age: 30 } }
//   ];
//   const updatedUsers = users.map(user => ( user.details.age + 1 
//   ));
//   console.log(updatedUsers);  
  // [{ name: "Alice", details: { age: 26 } }, { name: "Bob", details: { age: 31 } }]


//   const users = [
//     { name: "Alice", details: { age: 25 } },
//     { name: "Bob", details: { age: 30 } }
//   ];
//   const updatedUsers = users.map(user => ({
//     ...user,
//     details: { ...user.details, age: user.details.age + 1 }
//   }));
//   console.log(updatedUsers);  
  // [{ name: "Alice", details: { age: 26 } }, { name: "Bob", details: { age: 31 } }]

  

//   const nestedArr = [[1, 2], [3, 4]];
// const flattened = nestedArr.map(arr => arr.join(',')).join(',');
// console.log(flattened);  // "1,2,3,4"
// console.log(typeof(flattened))



//first letter capital in string

// let sarr=['apple','banana','cherry'];
// let result=sarr.map(str=>str.charAt(0).toUpperCase()+str.slice(1));
// console.log(result);
  

//all letter uppercase
// let allUppercase=sarr.map(str=>str.split('').map(char=>char.toUpperCase()).join(''));
// console.log(allUppercase);

// const mySet = new Set([1, 2, 3]);
// const re = [...mySet].map(num => num * 2);
// console.log(re);  // [2, 4, 6]


const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
  ];
  
  const age25Users = users.map(user => ({
    ...user,
    age: user.age + 1 // Directly updating the age value
  }));
  
  console.log(age25Users);
  
  // [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }]
  
