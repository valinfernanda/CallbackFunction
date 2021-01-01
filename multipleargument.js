//More than two arguments can be passed

//NORMAL FUNCTION
const introduce = (name, age) =>{
    console.log('${name} is ${age} years old');
};

introduce("Ken the Ninja", 14);





//CALLBACK FUNCTION 
const introduce = (callback) => {
    callback("Ken the Ninja", 14);
};

introduce((name, age) =>{
    console.log(`${name} is ${age} years old`);
});

// OUTPUT 
Ken the Ninja is 14 years old