function shortestWord(array) {
  let shortestWord = array[0];
  let shortlength = shortestWord.length;

  for (let i = 1; i < array.length; i++) {
    const word = array[i];
    const lengthElement = word.length;

    if (shortlength > lengthElement) {
      shortlength = lengthElement;
      shortestWord = word;
    }
  }

  return shortestWord;
}

function longestWord(array) {
  let longestWord = array[0];
  let longestlength = longestWord.length;

  for (let i = 1; i < array.length; i++) {
    const word = array[i];
    const lengthElement = word.length;

    if (longestlength < lengthElement) {
      longestlength = lengthElement;
      longestWord = word;
    }
  }

  return longestWord;
}

function shortestAndLongestWord(string) {
  let array = string.split(' ').filter((word) => word.length > 0);

  if (array.length === 0) {
    console.log("The string doesn't contain any valid words.");
    return;
  }

  const shortest = shortestWord(array);
  const longest = longestWord(array);

  console.log(`Longest -> ${longest}`);
  console.log(`Shortest -> ${shortest}`);
}

shortestAndLongestWord('Hello how are you today? I hope you are fine ');
console.log(`-------------`);
shortestAndLongestWord(
  'Lorem Ipsum is dummy text of the typesetting industry.',
);
