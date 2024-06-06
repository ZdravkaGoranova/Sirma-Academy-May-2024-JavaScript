function solve(string, text) {
  let regex = /#[A-Za-z]+/gi;

  let matches = string.match(regex);

  for (const match of matches) {
    let result = match.substring(1);
    console.log(result);
  }
}
solve('Everyone uses # to tag a #special word in #facebook');
console.log(`-------`);
solve(
  'The symbol # is known #variously in English-speaking #regions as the #number sign',
);
console.log(`-------`);
