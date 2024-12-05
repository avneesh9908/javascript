//first use map and take count than find first 1 occurance of char
let arr=[1,1,2,3,3,5,3,6,8,7,8,6,4,2,2,3,5];
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
   //  console.log("number:", digit, "occurence of number:",obj[digit]);
   if(obj[digit]===1){
      console.log("number:", digit, "occurence of number:",obj[digit]);
      break;
   }
  } 
}
occurence();
