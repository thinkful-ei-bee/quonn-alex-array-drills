'use strict';

/* Problem #1 */
function repeat(fn, n) {
    for (let i = 0; i < n; i++) {
        fn();
    }
}

function hello() {
    return 'Hello world';
}

function goodbye() {
    return 'Goodbye world';
}

console.log(repeat(hello(), 5));
console.log(repeat(goodbye(), 5));


/* Problem #2 */

function filter(arr, fn) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
    // <---- DO NOT EDIT BETWEEN THESE LINES


/* Problem #3
Bonus Credit time problem was implemented
*/


function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    return function(location) {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        let time = 'times';
        if (warningCounter === 1) {
            time = 'time';
        }
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${time} today!`);
    };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const fireWarning = hazardWarningCreator('Building on Fire');
const waterWarning = hazardWarningCreator('Building Flooded');


rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');

fireWarning('NYC Penn Station');

waterWarning('Grand Central Station');


/* Problem #4 */

function getSteps(arr) {
    let moves = arr.filter(x => x[0] >= 0 && x[1] >= 0).map(x => x[0] + x[1]).forEach(function(y) {
        console.log(y);
    });
}

getSteps([
    [0, 0],
    [0, 5],
    [-1, -3],
    [-3, 1],
    [2, -4],
    [3, 2]
]);


/* Problem #5 */

function decode(sentence) {
    let arr = sentence.split(' ');
    return arr.reduce(function(ans, word) {
        if (word.length === 3) {
            return ans += ' ';
        } else {
            return ans += word[word.length - 1].toUpperCase();
        }
    }, '');
}

console.log(decode('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));