function solve(string) {
  const regex = /[A-Z][a-z]+/g;

  const newText = string.match(regex);
  console.log(newText.join(', '));
}
solve('SplitMeIfYouCan');
console.log(`-------`);
solve('HoldTheDoor');
console.log(`-------`);
solve('ThisIsSoAnnoying');
