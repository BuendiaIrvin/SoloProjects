// function fizzbuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz')
//         }
//         else if (i % 3 === 0) {
//             console.log('fizz')
//         }
//         else if (i % 5 === 0) {
//             console.log('buzz')
//         }
//         else {
//             console.log(i)
//         }
//     }
// }
// fizzbuzz(20)







/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return "Hello " + name;
}
console.log(sayHello("Irvin"));





/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello("Irvin");
console.log(helloMessage);





/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "Irvin";
console.log(sayHello(myName));



/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

var random = Math.floor((Math.random() * 3) + 1);

function isTwo(x){
    return x === 2;
}


/// sum of two numbers

function sum(x, y) {
    return x + y;
}

console.log(sum(3,5));
console.log(sum(3,10));
console.log(sum(25,10));

/// minutes to seconds


function minutesToSeconds(x){
    y = x * 60;
    return y;
}

console.log("there is " + minutesToSeconds(1) + " seconds in 1 minute");
console.log("there is " + minutesToSeconds(2) + " seconds in 2 minutes");
console.log("there is " + minutesToSeconds(3) + " seconds in 1 minutes");
console.log("there is " + minutesToSeconds(.5) + " seconds in .5 minutes");


// add 1

function addOne(x){
    return x + 1;
}

console.log(addOne(9));
console.log(addOne(99));
console.log(addOne(999));
console.log(addOne(9999));

// area of triangle using base and height

function areaTriangle(base, height){
    product = base * height
    answer = product / 2;
    return answer;
}

console.log(areaTriangle(10,10));
console.log(areaTriangle(5,10));
console.log(areaTriangle(25,50));
console.log(areaTriangle(10,20));

// age in years to days

function yearsToDays(x){
    return x * 360;
}

console.log(yearsToDays(10));
console.log(yearsToDays(20));
console.log(yearsToDays(30));
console.log(yearsToDays(26));

// return first element in array

//
// var arr = [1,2,3,4,5];
// var arr2 = [1,2,3,4,5];
// var arr3 = [1,2,3,4,5];
// var arr4 = [1,2,3,4,5];
//
// function getFirstValue(x){
//     first = x[0];
//     return first;
// }
//
// console.log(getFirstValue(getFirstValue(arr)));
// console.log(getFirstValue(getFirstValue(arr2)));
// console.log(getFirstValue(getFirstValue(arr3)));
// console.log(getFirstValue(getFirstValue(arr4)));

// Function that reverses a string

function reverseString(s) {
    const result = [];
    for (let i= s.length -1; i >= 0; i -= 1) {
        result.push(s[i]);
    }
    return result.join('');
}

console.log(reverseString("abcde"));
console.log(reverseString("54321"));
console.log(reverseString("olleh"));


// function that filters out numbers from a list

function filterNumbers(arr) {
    const result = arr.filter(function(value, i) {
        if (isNaN(value) || isBoolean(value) || isEmptyString(value) || value === null) {
            return false;
        }
        return true;
    });
    return result;
}


function isBoolean(value) {
    return typeof value === 'boolean';
}

function isEmptyString(value) {
    return typeof value === 'string' && value.trim().length === 0;
}

console.log(filterNumbers([1, "2", " abcde", NaN, Number .POSITIVE_INFINITY, 66, "ab1", false, null]))




// function that finds an element inside an unsorted list

function linearSearch(arr, x) {
    let lo = 0;
    let hi = arr.length-1;

    while (lo <= hi) {
        if (arr[lo] === x) {
            return lo;
        } else {
            lo += 1
        }
    }
    return -1;
}

let arr = [1,3,5,7,9,11,14,18,22];
console.info("item was found at index: " + linearSearch(arr, 22));

// function that showcases the usage of closures

function multiplier(first) {
    let a = first;
    return function(b) {
        return a * b;
    };
}

let multiplyBy2 = multiplier(2);

console.info(multiplyBy2(4));
console.info(multiplyBy2(5));

// function that returns a promise

const resultPromise = function(idea) {
    return new Promise(function(resolve, reject){
        if (idea.isGood) {
            resolve(idea);
        } else {
            reject({
                idea: idea,
                reason: "Not Realistic"
            });
        }
    });
};

resultPromise({idea: "Make Gold from Iron", isGood: true})
.then(function() {
    console.info("i'm rich!")
}, function(err) {
    console.info("Rejected as: " + err.reason);
});


// function that falttens a list of items

function flatten(arr=[]) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result = result.concat(item);
        }
    }
    return result;
}


console.info(flatten([[1,2,[3]], 4]));


// write a function that accepts a string and returns a map with the strings character frequency

function computerFrequency(s) {
    // create freq hashtable
    const freqTable =  new Map();

    // for each char in the string
    for (ch of s) {
        // check if we have seen it already
        if (!freqTable.set(ch)) {
            freqTable.set(ch, 1);
        } else {
            // just increase the existing entry
            freqTable.set(ch, freqTable.get(ch) + 1);
        }
    }
    // return result
    return freqTable;
}


console.info(computerFrequency("abr1aka2tabr3a"));



// Write a function that accepts two numbers and returns both divisons and their modulo

function divMod(a, b) {
    // be careful for division by zero
    if (b !== 0 ) {
        return [a/ b, a % b];
    }
    return [0,0];
}


console.info(divMod(16, 5));
console.info(divMod(20, 0));
console.info(divMod(20, 5));
console.info(divMod(25, 25));


// Write a function that finds an element inside a sorted list

function binarySearch(arr, x) {
    let lo  = 0;
    let hi = arr.length-1;
    while (lo <= hi) {
        // find mid element
        let m = Math.floor((lo + hi) / 2);
        // check if equal to target
        if (arr[m] === x) {
            return m;
            //reduce array search space by half
        } else if (arr[m] < x) {
            lo = m + 1;
        } else {
            hi = m - 1;
        }
    }
    // item not found
    return -1;
}

// let arr = [1,3,5,7,9,11,14,18,22];
console.info(console.info("item was found at index: " + binarySearch(arr, 22)));



// Write a function that accepts a number and checks if its a prime or not

function isPrime(n) {
    if (n === 1) {
        //special case for 1
        return false;
    } else {
        // go through all numgbers from 2 up until n/2
        for (let i = 2; i <= n / 2; i += 1) {
            if (n % i === 0) {
                // we found a number i such as i * x = n so the number is not prime
                return false;
            }
        }
        // if we get to this point then we know the number is prime
        return true;
    }
}

let num = 45;
console.info("is " + num + " a prime?: " + isPrime(num));
num = 37;
console.info("is " + num + " a prime?: " + isPrime(num));
num = 73;
console.info("is " + num + " a prime?: " + isPrime(num));

// Write a function that accepts a list of opbjects with the following type structure

// id: number,
// accountType: "user" | "admin" | "root"
// name: string

// the function should return the list of objects grouped by their accountType in this order.
// list with a list of user followed by a list of admin and a list of root accounts

// Somewhat gewneric group function
function groupBy(records, keyFunc) {
    // save groups by key here
    const groups = new Map();
    for (record of records) {
        // we need this call to retrieve that actual key
        const key = keyFunc(record);
        if (groups.has(key)) {
            const data = groups.get(key);
            data.push(record);
        } else {
            groups.set(key, [record]);
        }
    }
    return groups;
}

function getGroupsByAccountType (records) {
    const groups = groupBy(records, function(record) {
        return record.accountType;
    });
// return by custom ordering here
    return [
        groups.get('user'),
        groups.get('admin'),
        groups.get('root'),
    ]
}
console.info(getGroupsByAccountType([
    {
        id: 1,
        accountType: 'user',
        name: 'Mike'
    },
    {
        id: 2,
        accountType: 'admin',
        name: 'Alex'
    },
    {
        id:3,
        accountType: 'root',
        name: 'Jordan'
    },
    {
        id: 4,
        accountType: 'root',
        name: 'Silas'
    },
    {
        id: 5,
        accountType: 'admin',
        name: 'John'
    },
]))

