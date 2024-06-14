function findValidNames(input) {
  const regex = /\b([A-Z][a-z]+) ([A-Z][a-z]+)\b/g;
  let matches = [];
  let match;

  while ((match = regex.exec(input)) !== null) {
    matches.push(match[0]);
  }

  console.log(matches.join(','));
  return matches;
}

findValidNames(
  'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov',
);
