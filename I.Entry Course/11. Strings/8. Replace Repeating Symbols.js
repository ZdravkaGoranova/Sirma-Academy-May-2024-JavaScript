function solve(text) {

let newTextLowerCase = ''; 
let lastChar = ''; 

for (const char of text) {
  if (char !== lastChar) {
    
    newTextLowerCase += char; 
    lastChar = char;
  }
}
console.log(newTextLowerCase); 

//   let newTextLowerCase = '';
//   let includes;
//   for (const word of text) {
//     includes = newTextLowerCase.includes(word);
//     if (!includes) {
//       newTextLowerCase += word;
//     } 
  
//   }
//     console.log(newTextLowerCase);
}
solve('aaaaabbbbbcdddeeeedssaa');
console.log(`-------`);
solve('qqqwerqwecccwd');
