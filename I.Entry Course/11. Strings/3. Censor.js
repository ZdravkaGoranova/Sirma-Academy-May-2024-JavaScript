function solve(text, word) {
  let newWord = '*'.repeat(word.length);
  let newText = text.replaceAll(word, newWord);
  console.log(newText);
}
solve('A small sentence with some words', 'small');
console.log(`-------`);
solve('Find the hidden word', 'hidden');
console.log(`-------`);
solve('A small sentence with small words', 'small');
