function legendaryDuels(string) {
  const stack = [];

  for (let i = 0; i < string.length; i++) {
    const currentString = string.charAt(i);

    if (
      currentString === '(' ||
      currentString === '{' ||
      (currentString === '!' && (i === 0 || string.charAt(i - 1) !== '!'))
    ) {
      stack.push(currentString);
    } else if (
      currentString === ')' ||
      currentString === '}' ||
      currentString === '!'
    ) {
      if (stack.length === 0) {
        console.log('Not Legendary');
        return;
      }

      const previousString = stack.pop();

      if (
        (currentString === ')' && previousString !== '(') ||
        (currentString === '}' && previousString !== '{') ||
        (currentString === '!' && previousString !== '!')
      ) {
        console.log('Not Legendary');
        return;
      }
    }
  }

  if (stack.length === 0) {
    console.log('Legendary');
  } else {
    console.log('Not Legendary');
  }
}

legendaryDuels('()()(()())');
console.log('------------');
legendaryDuels('((!!)(({!!})))');
console.log('------------');
legendaryDuels('((())');
console.log('------------');
legendaryDuels('{!}!');
console.log('------------');
legendaryDuels('({(!!}))');
