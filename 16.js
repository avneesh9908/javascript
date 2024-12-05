// Function to check if two objects have the same properties
function haveSameProperties(obj1, obj2) {
    // Get the keys of both objects
    let obj1Props = Object.keys(obj1);
    let obj2Props = Object.keys(obj2);
    
    // First, check if they have the same number of properties
    if (obj1Props.length !== obj2Props.length) {
        return false;
    }
    
    // Check if each property in obj1 exists in obj2
    for (let prop of obj1Props) {
        if (!obj2.hasOwnProperty(prop)) {
            return false;
        }
    }
    
    // Check if each property in obj2 exists in obj1 (optional, since lengths are equal)
    for (let prop of obj2Props) {
        if (!obj1.hasOwnProperty(prop)) {
            return false;
        }
    }

    return true;
}

// Example objects
let obj1 = {
    name: "Alice",
    age: 25,
    country: "USA"
};

let obj2 = {
    name: "Bob",
    age: 30,
    country: "USA"
};

let obj3 = {
    name: "Charlie",
    age: 35
};

// Testing the function
console.log(haveSameProperties(obj1, obj2));  // Output: true (both have name, age, and country)
console.log(haveSameProperties(obj1, obj3));  // Output: false (obj3 lacks the country property)
