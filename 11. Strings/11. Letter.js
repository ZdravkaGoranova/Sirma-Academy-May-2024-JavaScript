function solve(string, array) {
  const regex = /(_+)/g;

  let words = string.split(' ');

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.includes('_')) {
      let strippedWord = word.replace(/[.,!?]/g, '');

      let found = array.find(
        (element) => element.length === strippedWord.length,
      );

      if (found) {
        words[i] = word.replace(strippedWord, found);
      }
    }
  }

  console.log(words.join(' '));
}
solve(
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so many _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained'],
);
console.log(`-------`);
solve();
