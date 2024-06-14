function solve(array) {
  let dates = array[0]; //   let dates = array[0].split(',');

  let regex = /\b(\d{2})([-.\/])([A-Z{1}][a-z]{2})\2(\d{4})\b/gm;

  let matches = dates.match(regex);

  if (matches) {
    matches.forEach((date) => {
      let day, month, year;

      if (date.includes('-')) {
        [day, month, year] = date.split('-');
      } else if (date.includes('.')) {
        [day, month, year] = date.split('.');
      } else if (date.includes('/')) {
        [day, month, year] = date.split('/');
      }

      console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    });
  } else {
    console.log('No find matches!');
  }
}
solve([
  '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23#09#1973, 1/Feb/2016',
]);
console.log(`-------`);
solve(['1/Jan-1951 23/October/197 11-Dec-2010 18.Jan.2014']);
