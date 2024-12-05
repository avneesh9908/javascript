let arr=[1,6,3,5,74,1,4,8,4];



// let i=0;
// let j=arr.length-1;

// while(i<j){
//     let temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
//     i++;
//     j--;
// }
// console.log(arr);


//reverse

// console.log(arr.reverse());
// console.log(arr);






//paragraph  reverse

function reverseStr(str){
    if(str.length==0){
        return " ";
    }
return reverseStr(str.substring(1))+str[0];
}


let str="Avneesh is a good boy";
let result=reverseStr(str);
 console.log(result);
let ans=result.split(" ").map((word)=>{
   return  word[0].toUpperCase()+word.substring(1);
}).join(" ");
console.log(ans);
 
// console.log(str.split(" ").map((word)=> word.split("").reverse().join("")).join(" "));



// let s="Avneesh";

// for(word of s){
//     console.log(word);

// }




function reverseString(str) {
    // Base case: If the string is empty, return an empty string
    if (str === "") {
        return "";
    }
    
    let leftS = "";
    
    // Build leftS as the substring of str from index 1 to the end
    for (let i = 1; i < str.length; i++) {
        leftS += str[i];
    }
    
    // Recursive case: move the first character to the end of the recursion result
    return reverseString(leftS) + str[0];
}

console.log(reverseString("Avneesh"));  // Output: "hseenvA"




//merge two sorted array

function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    
    return merged;
}

// Example usage:
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));  // [1, 2, 3, 4, 5, 6]



