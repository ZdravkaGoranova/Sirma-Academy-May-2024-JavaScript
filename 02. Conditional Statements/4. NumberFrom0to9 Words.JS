function spellNumber(number) {
    let spell;

    switch (number) {
        case 0:
            spell = "zero";
            break;
        case 1:
            spell = "one";
            break;
        case 2:
            spell = "two";
            break;
        case 3:
            spell = "three";
            break;
        case 4:
            spell = "four";
            break;
        case 5:
            spell = "five";
            break;
        case 6:
            spell = "six";
            break;
        case 7:
            spell = "seven";
            break;
        case 8:
            spell = "eight";
            break;

        case 9:
            spell = "nine";
            break;
        default:
            spell = "to big";
            break;
    }
console.log(spell)
}
spellNumber(7);
spellNumber(5);
spellNumber(10);