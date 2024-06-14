function solve(array) {
  let object = {};
  for (const record of array) {
    let recordArray = record.split(' ');
    let name = recordArray.shift();
    let phone = recordArray.join(' ');
    object[name] = phone;
  }
  for (const key in object) {
    console.log(`${key} -> ${object[key]}`);
  }
}
solve(['Peter 0888 657212', 'Bob 0899657 212', 'Peter 123123']);
solve(['Maria 123', 'Samantha 456', 'Nicole 789']);
