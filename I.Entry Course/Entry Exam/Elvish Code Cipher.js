function elvishCodeCipher(string, n) {
  let stringLength = string.length;
  let message = [];
  if (stringLength > 100 || 1 > stringLength) {
    console.log(
      `Invalid string length. Input string length should be between 1 and 100 characters!`,
    );
    return;
  }
  if (1 > n > 25 || 1 > n) {
    console.log(`Invalid shift. The shift amount should be between 1 and 25!`);
    return;
  }

  let arrayMessage = string
    .split('')
    .map((char) => String.fromCharCode(char.charCodeAt(0) - n));
  message = arrayMessage.join('');
  console.log(message);
}
elvishCodeCipher('Uifsf!jt!b!tfdsfu"', 1);
console.log(`------------`);
elvishCodeCipher('Wkurz#lw#lq#wkh#iluh$', 3);
console.log(`------------`);
elvishCodeCipher('Fwfltws', 5);
