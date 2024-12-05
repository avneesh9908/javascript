let str="chanchal is a good girl";
// console.log(str.toUpperCase());

let result=str.split(" ").map((word)=>{
 
 return word[0].toUpperCase()+word.substring(1);
}).join(" ");
console.log(result);

