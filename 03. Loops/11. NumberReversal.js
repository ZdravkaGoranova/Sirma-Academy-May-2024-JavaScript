function reversal(num) {
    let numToString = num.toString();
    let length = numToString.length -1;
    let result = '';
    let element ;
    for (let i = length ; i >= 0; i--) {
       element = numToString[i];
  
        result += element;

    }
    console.log(result)
}
reversal(123);
reversal(9876);
reversal(505);
reversal(10203);
reversal(7);