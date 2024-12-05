function fetchData(){
      return new Promise((resolve)=>setTimeout(()=>resolve("fetch data after 2 seconds"),2000));
}

async function getData(){
    const data=await fetchData();
    console.log(data);
}

getData();