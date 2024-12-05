const { error } = require("console");
const { resolve } = require("path");

//create promise
const promise = new Promise((resolve, reject) => {
    // Simulating an asynchronous task (e.g., fetching data) 
    const success=true;
    if(success){
        resolve("Data fetched successfully");
        }
        else{
            reject("Error fetching data");
            }
});

promise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});

// resolve() is called if the asynchronous task is successful, which moves the promise to the "fulfilled" state.
// reject() is called if something goes wrong, moving the promise to the "rejected" state.
// The .then() method handles the result if the promise is resolved.
// The .catch() method handles the error if the promise is rejected.


// Example: Simulating a delay using a promise
const delay=(ms)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Resolve after${ms} milliseconds`);

        },ms);
});
}

delay(2000).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

// 1. Question: Create a function that returns a
// promise that resolves if a number is even and rejects if it is odd.

function checkEvenNumber(num){
    return new Promise((resolve, reject)=>{
        if(num%2===0){
            resolve("Number is even");
        }else{
            reject("Number is odd");
        }
    });
}

checkEvenNumber(4).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})


//2. Question: Write a promise-based function that simulates a coin flip.
// The promise should resolve if the result is "Heads" and reject if it's "Tails."

function filpCoin(){
    return new Promise((resolve, reject)=>{
        const result=Math.random()<0.5?"Heads":"Tails";
        if(result==="Heads"){
            resolve(result);
            }else{
                reject(result);
                }
                });
}

filpCoin().then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
})


// 3. Question: Write a function that returns a promise, 
// which resolves if a number is divisible by 5 after 
// a delay of 1 second. If it’s not divisible by 5, the
//  promise should reject.

function checkDivisibility(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 5 === 0) {
                resolve("Number is divisible by 5");
                } else {
                    reject("Number is not divisible by 5");
                    }
                    }, 1000);
                });
                }

                checkDivisibility(10).then((message)=>{
                    console.log(message);
                }).catch((error)=>{
                    console.log(error);
                })


                // 4. Question: Create a promise that resolves with a list of user data after a
                //  delay of 2 seconds. Simulate an API call that fetches the data.


          function fetchUserData() {
              return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = [
                { id: 1, name: 'John Doe' },
                { id: 2, name: 'Jane Smith' },
                { id: 3, name: 'Alice Johnson' }
            ];

            resolve(users);
        }, 2000);  // Simulating 2-second API delay
    });
}

fetchUserData()
    .then((data) => {
        console.log('User data fetched:', data);  // Output the array of users
    })
    .catch((error) => console.error('Error fetching data:', error));


    // 5. Question: Write a promise that checks if a username exists in a database 
    // (simulated with an array). If the username is found, resolve with a message; 
    // otherwise, reject with an error message.

    function checkUsername(username) {
        const usernames = ['user1', 'user2', 'user3'];
    
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (usernames.includes(username)) {
                    resolve(`Username ${username} exists in the database`);
                } else {
                    reject(`Username ${username} does not exist`);
                }
            }, 1500);  // Simulating a 1.5-second delay
        });
    }
    
    checkUsername('user1')
        .then((message) => console.log(message))  // Output if found
        .catch((error) => console.error(error));  // Output if not found
    
 