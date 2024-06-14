function solve(stringList, text) {
  let words = stringList.split(', ').sort((a, b) => b.length - a.length);
  let result = text;

  for (const word of words) {
    let search = '*'.repeat(word.length);
    result = result.replaceAll(search, word);
  }
  console.log(result);
}
solve('great', 'JavaScript* is ***** programming language');
console.log(`-------`);
solve('the, best, learn', 'JavaScript is *** **** language to *****');
console.log(`-------`);
