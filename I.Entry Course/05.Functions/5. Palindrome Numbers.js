function isPalindrome(number) {
  let reverseNumber = Number(number.toString().split('').reverse().join(''));
  return number === reverseNumber;
}

function palindromeNumbers(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    newArray.push(isPalindrome(element));
  }
  console.log(newArray);
}

palindromeNumbers([123, 323, 421, 121]);
palindromeNumbers([32, 2, 232, 1010]);

// function checkPalindrome(number) {
//   let reversedNumber = Number(number.toString().split('').reverse().join(''));
//   return number === reversedNumber;
// }

// function checkPalindromesInArray(array) {
//   let results = array.map(checkPalindrome);
//   console.log(results);
//   return results;
// }
// checkPalindromesInArray([123, 323, 421, 121]);
// checkPalindromesInArray([32, 2, 232, 1010]);

// function isPalindrome(number) {
//   let isPalindrome = false;
//   let newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     let el = Number(element.toString().split('').reverse().join(''));

//     if (el === element) {
//       isPalindrome = true;

//       newArray.push(isPalindrome);
//     } else {
//       isPalindrome = false;
//       newArray.push(isPalindrome);
//     }
//   }

//   return isPalindrome;
// }
