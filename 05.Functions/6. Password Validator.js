function passwordValidator(password) {
  //   let array = password.split('');
  //   console.log(array);
  let isValid = true;

  if (!hasValidCharactLength(password)) {
    console.log(`Password must be between 6 and 10 characters`);
    isValid = false;
  }
  if (!isAlphanumeric(password)) {
    console.log(`Password must consist only of letters and digits`);
    isValid = false;
  }
  if (!has2Digits(password)) {
    console.log(`Password must have at least 2 digits`);
    isValid = false;
  }

  if (isValid) {
    console.log(`Password is valid`);
  }
}

function hasValidCharactLength(password) {
  let isValid = true;

  if (password.length < 6 || password.length > 10) {
    isValid = false;
  }
  return isValid;
}

function isAlphanumeric(password) {
  let isValid = true;

  const chWhiteList = [
    'a',
    'b',
    'c',
    'd',
    'i',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
  ];

  for (const character of password) {
    if (!chWhiteList.includes(character.toLowerCase())) {
      return (isValid = false);
    }
  }
  return isValid;
}

function has2Digits(password) {
  let isValid;
  let digitCount = 0;
  // Number.isInteger(password);
  for (const iterator of password) {
    let digit = Number(iterator);
    if (Number.isInteger(digit)) {
      digitCount++;
    }
  }
  isValid = digitCount >= 2;
  return isValid;
}

passwordValidator('pass');
console.log(`-------------`);
passwordValidator('APass123');
console.log(`-------------`);
passwordValidator('Pa$s$s');
