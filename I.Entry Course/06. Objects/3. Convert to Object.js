function solve(textJson) {
  let data = JSON.parse(textJson);

  for (const key in data) {
    console.log(`${key}:  ${data[key]}`);
  }
}
solve('{ "name": "Ivan", "age": 40, "town": "Sofia" }');
solve('{ "firstName": "Ivan", "lastName": "Ivanov" }');
