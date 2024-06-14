function palindrome(word) {
    let newWord = '';

    for (let i = (word.length - 1); i >= 0; i--) {
        newWord += word[i];
    }
    let isPalindrom = word === newWord;
    console.log(isPalindrom);
}
palindrome("radar");
palindrome("hello");
palindrome("racecar");
palindrome("java");
palindrome("madam");