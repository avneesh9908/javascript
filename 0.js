const promise=new Promise((resolve, reject)=>{
   const success=true;
   if(success){
      resolve("data fetched sucessfully");
   }
   else{
      reject('data not fetch error')
   }
});
promise.then((result)=>{
   console.log(result);
}).catch((error)=>{
   console.log(error);
})


const delay=(ms)=>{
   return new Promise((resolve, reject)=>{
      setTimeout(()=>{
         console.log(`Resolve after ${ms} milliseconds`);
      },ms);
   });
}

delay(2000).then((result)=>{
   console.log(result);
}).catch((error)=>{
   console.log(error);
})


const oddEven=(num)=>{
   return new Promise((resolve, reject)=>{
     if(num%2===0){
      resolve("Number is even");
     }
     else{
      reject("Number is odd");
     }
   })
}

oddEven(2).then((result)=>{
   console.log(result);
}).catch((error)=>{
   console.log(error);
})


const filpCoin=()=>{
   return new Promise((resolve, reject)=>{
       const result =Math.random()<0.5?"Heads":"Tails";
       if(result==="Heads"){
         resolve(result);
       }else{
         reject(result);
       }
   })
}

filpCoin().then((message)=>{
   console.log(message);
}).catch((error)=>{
  console.log(error);
})