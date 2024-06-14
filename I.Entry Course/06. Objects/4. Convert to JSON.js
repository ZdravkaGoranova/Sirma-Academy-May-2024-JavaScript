function solve(name, surname, eyeColor) {
  let object = {
    name,
    surname,
    eyeColor,
  };
  let result = JSON.stringify(object);

  console.log(result);
}
solve('Ivan', 'Ivanov', 'blue');
solve('Maria', 'Petrova', 'brown');
