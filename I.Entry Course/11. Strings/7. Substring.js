function solve(word, text) {
  const textLowerCase = text.toLowerCase();

  const array = textLowerCase.match(word);

  if (array) {
    let result = array[0];
    console.log(result);
  } else {
     console.log(`${word} not found!`);
  }
 
}
solve('javascript', 'JavaScript is the best programming language');
console.log(`-------`);
solve('python', 'JavaScript is the best programming language');
