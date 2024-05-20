function sumVowels(text) {
    let sumValues = 0;
    for (let i = 0; i < text.length; i++) {
        let vowel = text[i];
        switch (vowel) {
            case 'a':
                sumValues += 1;
                break;
            case 'e':
                sumValues += 2;
                break;

            case 'i':
                sumValues += 3;
                break;
            case 'o':
                sumValues += 4;
                break;
            case 'u':
                sumValues += 5;
                break;
            default:
                break;
        }
    }
    console.log(sumValues);
}
sumVowels("hello");
sumVowels("hi");
sumVowels("bye");
sumVowels("zzzz");