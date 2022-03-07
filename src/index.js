import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

//Differences in 2 Arrays Function
/*We'll pass you an array of two numbers. Return the sum of those two numbers 
plus the sum of all the numbers between them. The lowest number will not always 
come first.*/
function diffArray(arr1, arr2) {
  let notInArr1 = arr2.filter((entry) => arr1.includes(entry) === false);
  let notInArr2 = arr1.filter((entry) => arr2.includes(entry) === false);

  let newArr = notInArr1.concat(notInArr2);
  return newArr;
}

diffArray([1, 2, 3], [3, 2, 1]);

//Seek and Destroy Function
/*Compare two arrays and return a new array with any items only found in 
one of the two given arrays, but not both.*/
function destroyer(arr) {
  let nums = Object.values(arguments).slice(1);
  let temp = arr;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    temp = temp.filter((entry) => entry !== num);
  }

  return temp;
}

destroyer();

//Wherefore art thou function
/*Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value pairs 
(second argument).*/
function whatIsInAName(collection, source) {
  // Only change code below this line
  const arr = [];
  const allKeys = Object.keys(source);

  for (let i = 0; i < collection.length; i++) {
    let keep = true;
    let obj = collection[i];

    for (let j = 0; j < allKeys.length; j++) {
      let key = allKeys[j];
      if (obj.hasOwnProperty(key) === false || obj[key] !== source[key]) {
        keep = false;
        break;
      }
    }

    if (keep === true) {
      arr.push(obj);
    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName({}, "jeni");

//Spinal case function
/*Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.*/
function spinalCase(str) {
  return str
    .split(/(?=[A-Z])|\s|[_-]/)
    .join("-")
    .toLowerCase();
}

spinalCase("jeni");

//Pig Latin Function
/*Translate the provided string to Pig Latin. 
Input strings are guaranteed to be English words in all lowercase.*/
function translatePigLatin(str) {
  let regex = /[a|e|i|o|u]/g;

  if (regex.test(str[0])) {
    return `${str}way`;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (regex.test(str[i])) {
        return `${str.slice(i, str.length)}${str.slice(0, i)}ay`;
      }
      if (i === str.length - 1) {
        return `${str}ay`;
      }
    }
  }
}

translatePigLatin("jeni");

//myReplace Function
/*Perform a search and replace on the sentence using the arguments provided 
and return the new sentence.*/
function myReplace(str, before, after) {
  let strArray = str.split(" ");
  let regexUpper = /[A-Z]/g;
  let regexLower = /[a-z]/g;

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === before) {
      let word = strArray[i];
      if (regexUpper.test(word[0])) {
        after = `${after[0].toUpperCase()}${after.slice(1)}`;
      } else if (regexLower.test(word[0])) {
        after = `${after[0].toLowerCase()}${after.slice(1)}`;
      }
      strArray[i] = after;
      break;
    }
  }

  return strArray.join(" ");
}

myReplace("jeni is a coder now", "jeni", "monday");

//DNA Pairing
/*The DNA strand is missing the pairing element. Take each character, get its pair,
and return the results as a 2d array. Base pairs are a pair of AT and CG. Match 
the missing element to the provided character.*/
function pairElement(str) {
  let elementArray = [];

  for (let i = 0; i < str.length; i++) {
    let tempArr = [];

    if (str[i] === "C") {
      tempArr.push(str[i], "G");
    } else if (str[i] === "G") {
      tempArr.push(str[i], "C");
    } else if (str[i] === "A") {
      tempArr.push(str[i], "T");
    } else if (str[i] === "T") {
      tempArr.push(str[i], "A");
    }

    elementArray.push(tempArr);
  }

  return elementArray;
}

pairElement("CGAT");

//Missing Letter Function
//Find the missing letter in the passed letter range and return it.
function fearNotLetter(str) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  const strArray = str.split("");

  let start = alphabet.indexOf(strArray[0]);
  let end = alphabet.indexOf(strArray[strArray.length - 1]);
  let alphaSlice = alphabet.slice(start, end + 1);

  console.log(strArray);
  console.log(alphaSlice);

  for (let i = 0; i <= alphaSlice.length; i++) {
    if (strArray[i] !== alphaSlice[i]) {
      return alphaSlice[i];
    }
  }
  return undefined;
}

fearNotLetter("abcdfghjklm");

//Sorted Union Function
/*Write a function that takes two or more arrays and returns a new array of unique
values in the order of the original provided arrays. In other words, all values 
present from all arrays should be included in their original order, but with no 
duplicates in the final array.*/
function uniteUnique() {
  let uniqueArray = [];

  for (let i = 0; i < arguments.length; i++) {
    let singleArray = arguments[i];

    for (let j = 0; j < singleArray.length; j++) {
      let check = singleArray[j];
      if (!uniqueArray.includes(check)) {
        uniqueArray.push(check);
      }
    }
  }
  return uniqueArray;
}

uniteUnique([1, 2, 3], [5, 2, 4, 9]);

//Convert HTML Entities
/*Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a 
string to their corresponding HTML entities.*/
function convertHTML(str) {
  let regex = /[&<>"']/;
  let convertedString = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (regex.test(char)) {
      switch (char) {
        case "&":
          convertedString.push("&amp;");
          break;
        case "<":
          convertedString.push("&lt;");
          break;
        case ">":
          convertedString.push("&gt;");
          break;
        case '"':
          console.log("found it!");
          convertedString.push("&quot;");
          break;
        case "'":
          convertedString.push("&apos;");
          break;
        default:
          convertedString.push(char);
      }
    }
  }
  return convertedString.join("");
}

convertHTML("jeni is a coder");

//Sum All Odd Fib Nums
/*Given a positive integer num, return the sum of all odd Fibonacci numbers that 
are less than or equal to num.*/
function sumFibs(num) {
  //Create an array of the Fib nums that are odd
  let term1 = 1;
  let term2 = 1;
  let arr = [1];

  while (term2 < num) {
    let temp = term1 + term2;
    if (term2 % 2 !== 0 && term2 !== 2) {
      arr.push(term2);
    }
    term1 = term2;
    term2 = temp;
  }

  if (term2 === num) {
    arr.push(term2);
  }

  //Sum the terms in the array using the reduce method
  const initialValue = 0;
  const totalOddFib = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return totalOddFib;
}

sumFibs(100);

//Sum All Primes Function
//Returns the sum of all prime numbers that are less than or equal to num.
function sumPrimes(num) {
  let primeArr = [2];
  let sum = 2;

  for (let i = 2; i <= num; i++) {
    let isPrime = true;

    //Check if the number is prime against primeArr
    for (let j = 0; j < primeArr.length; j++) {
      if (i % primeArr[j] === 0) {
        isPrime = false;
      }
    }

    //Add to sum and to primeArr if i is prime
    if (isPrime === true) {
      sum += i;
      primeArr.push(i);
    }
  }

  return sum;
}

sumPrimes(35);

//Smallest Common Multiple Function
/*Find the smallest common multiple of the provided parameters that can be evenly
divided by both, as well as by all sequential numbers in the range between these 
parameters.*/
function smallestCommons(arr) {
  //get the start and end from arr
  arr.sort(function (a, b) {
    return a - b;
  });
  let smallMult = arr[0];
  let largeMult = arr[1];

  //create an array of all the numbers for divisibility check
  let divCheck = [];
  for (let i = smallMult; i <= largeMult; i++) {
    divCheck.push(i);
  }

  //while loop to find smallest common multiple
  let index = 1;

  while (true) {
    let multiple = largeMult * index;
    let divFilter = divCheck.map(
      (num) => multiple % smallMult === 0 && multiple % num === 0
    );
    if (!divFilter.includes(false)) {
      return multiple;
    }
    index++;
  }
}

smallestCommons([10, 13]);

//Drop It Function
/*Given the array arr, iterate through and remove each element starting from the 
first element (the 0 index) until the function func returns true. Then return the 
rest of the array once the condition is satisfied.
Otherwise, arr should be returned as an empty array.*/
function dropElements(arr, func) {
  let results = arr.map(func);
  let sliceStart = results.indexOf(true);

  if (sliceStart === -1) {
    return [];
  } else {
    return arr.slice(sliceStart, arr.length);
  }
}

dropElements([1, 2, 3, 4, 5, 6, 5, 4, 3], (num) => num > 5);

//Steamroller Function
/*Flatten a nested array. You must account for varying levels of nesting. without
using the flatten method*/
function steamrollArray(arr) {
  let flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    let entry = arr[i];

    if (Array.isArray(entry)) {
      flatArray.push(...steamrollArray(entry));
    } else {
      flatArray.push(entry);
    }
  }

  return flatArray;
}

steamrollArray([2, 3, [[[7]]]]);

//Binary Agents Function
/*Return an English translated sentence of the passed binary string.*/
function binaryAgent(str) {
  let binaryArray = str.split(" ");
  let message = [];

  for (let i = 0; i < binaryArray.length; i++) {
    message.push(String.fromCharCode(parseInt(binaryArray[i], 2)));
  }

  return message.join("");
}

binaryAgent("10010 10111 10100 00001");

//Everything Be True
/*You are given an array collection of objects. The predicate pre will be 
an object property and you need to return true if its value is truthy. 
Otherwise, return false.*/
function truthCheck(collection, pre) {
  let result = collection.map(
    (obj) => !obj.hasOwnProperty(pre) && !Boolean(obj[pre])
  );

  if (result.includes(false)) {
    return false;
  } else {
    return true;
  }
}

truthCheck(
  [
    { name: "jeni", profession: "coder in training" },
    { name: "monday", job: "data scientist" }
  ],
  "profession"
);

//Arguments Optional
/*Create a function that sums two arguments together. If only one argument 
is provided, then return a function that expects one argument and returns the sum.*/
function addTogether() {
  const [num1, num2] = arguments;

  if (typeof num1 !== "number") {
    return undefined;
  } else if (num2 === undefined) {
    return (num2) => addTogether(num1, num2);
  } else if (typeof num2 !== "number") {
    return undefined;
  } else {
    return num1 + num2;
  }
}

addTogether(2)(7);

//Make a Person Function
/*Fill in the object constructor using only methods and no properties. The methods 
that take an argument must accept only one argument and it has to be a string.*/
const Person = function (firstAndLast) {
  let nameArray = firstAndLast.split(" ");

  this.getFullName = function () {
    return nameArray.join(" ");
  };

  this.getFirstName = function () {
    return nameArray[0];
  };

  this.getLastName = function () {
    return nameArray[1];
  };

  this.setFullName = function (name) {
    nameArray = name.split(" ");
  };

  this.setFirstName = function (name) {
    nameArray[0] = name;
  };

  this.setLastName = function (name) {
    nameArray[1] = name;
  };
};

const bob = new Person("Bob Ross");
console.log(bob.getFullName());

//Map the Debris Function
/*Return a new array that transforms the elements' average altitude into their orbital periods 
(in seconds). The values should be rounded to the nearest whole number. The body being orbited is Earth.*/

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const piSqrd = 2 * Math.PI;

  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    let height = Math.pow(obj.avgAlt + earthRadius, 3);
    obj.orbitalPeriod = Math.round(piSqrd * Math.sqrt(height / GM));
    delete obj.avgAlt;
  }

  return arr;
}

orbitalPeriod([
  { name: "mars", avgAlt: 1200 },
  { name: "earth", avgAlt: 11700 }
]);

//Palindrome Checker Function
function palindrome(str) {
  const stringLower = str.toLowerCase();
  const regex = /[a-z0-9]/;
  const filteredString = stringLower
    .split("")
    .filter((letter) => regex.test(letter));
  console.log(filteredString);

  const length = filteredString.length;
  const halfway = length / 2;

  for (let i = 0; i < halfway; i++) {
    console.log(filteredString[i], filteredString[length - 1 - i]);
    if (filteredString[i] !== filteredString[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

palindrome("anna");

//Roman Numeral Converter Function
//Roman Numeral Converter
function convertToRoman(num) {
  let romNum = "";

  //Thousands Place
  while (num >= 1000) {
    romNum += "M";
    num -= 1000;
  }

  //Hundreds Place
  while (num >= 100) {
    //900, 400
    if (num >= 900) {
      romNum += "CM";
      num -= 900;
    } else if (num >= 500) {
      romNum += "D";
      num -= 500;
    } else if (num >= 400) {
      romNum += "CD";
      num -= 400;
    } else if (num >= 100) {
      romNum += "C";
      num -= 100;
    }
  }

  //Tens and Ones Place
  while (num > 0) {
    if (num >= 90) {
      romNum += "XC";
      num -= 90;
    } else if (num >= 50) {
      romNum += "L";
      num -= 50;
    } else if (num >= 40) {
      romNum += "XL";
      num -= 40;
    } else if (num >= 10) {
      romNum += "X";
      num -= 10;
    } else if (num === 9) {
      romNum += "IX";
      num -= 9;
    } else if (num >= 5) {
      romNum += "V";
      num -= 5;
    } else if (num === 4) {
      romNum += "IV";
      num -= 4;
    } else if (num > 0) {
      romNum += "I";
      num -= 1;
    }
  }

  return romNum;
}

convertToRoman(1792);

//Caesars Cipher Function
function rot13(str) {
  const alphaPartOne = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M"
  ];
  const alphaPartTwo = [
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  let translation = "";

  for (let i = 0; i < str.length; i++) {
    let value = str[i];
    let index1 = alphaPartOne.indexOf(value);
    let index2 = alphaPartTwo.indexOf(value);

    if (index1 === -1 && index2 === -1) {
      translation += value;
    } else if (index1 !== -1) {
      translation += alphaPartTwo[index1];
    } else {
      translation += alphaPartOne[index2];
    }
  }

  return translation;
}

rot13("SASS THAT SES");

//Telephone Number Validator
function telephoneCheck(str) {
  //filter out spaces
  const regex = /[0-9]/;
  let filteredStr = str.split("").filter((char) => char !== " ");

  let numCount = 0;
  let dashCount = 0;
  let parLeft = 0;
  let parRight = 0;

  //count number of numbers, dashes and parentheses
  for (let i = 0; i < filteredStr.length; i++) {
    let value = filteredStr[i];
    if (filteredStr.includes(value) && value === "(") {
      parLeft++;
    } else if (
      filteredStr.includes(value) &&
      (value === "(" || value === ")")
    ) {
      parRight++;
    } else if (filteredStr.includes(value) && value === "-") {
      dashCount++;
    } else if (filteredStr.includes(value) && regex.test(value)) {
      numCount++;
    }
  }

  //assign true/false based on the results
  if (numCount < 10 || numCount > 11) {
    console.log("wrong numCount total");
    return false;
  } else if (numCount === 11 && filteredStr[0] !== "1") {
    console.log("wrong country code");
    return false;
  } else if (parLeft > 1 || parRight > 1) {
    console.log("has more than one parenthesis");
    return false;
  } else if (parLeft === 1 && (parRight === 0 || parRight > 1)) {
    console.log("does not have both parentheses");
    return false;
  } else if (parRight === 1 && (parLeft === 0 || parLeft > 1)) {
    console.log("does not have both parentheses");
    return false;
  } else if (parLeft === 1 && parRight === 1 && dashCount > 1) {
    console.log("parentheses with too many dashes");
    return false;
  } else if (parLeft === 0 && parRight === 0 && dashCount > 2) {
    console.log("no parentheses with too many dashes");
    return false;
  } else if (parLeft === 1 && filteredStr.indexOf("(") > 2) {
    console.log("left parentheses in wrong position");
    return false;
  } else if (
    parRight === 1 &&
    filteredStr.indexOf(")") !== 4 &&
    filteredStr.indexOf(")") !== 5
  ) {
    console.log("right parentheses in wrong position");
    return false;
  }

  return true;
}

telephoneCheck("555(555-7777)");
