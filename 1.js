// // array sorting

let arr=[10,1,36,5,76];
// let result= arr.sort((a,b)=>{
//     return a-b
// });
// console.log(result);

// // string sorting'

let str="Avneesh";
// console.log(str);
// let dArr=str.split("");
// console.log(dArr.sort());
//  let r=dArr.join("")
// console.log(dArr);
// console.log(r);


//sort

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]>arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}


console.log(arr);










