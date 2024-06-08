function orthanArchivesSearch(strings, searchTerm) {
  let firstOccurrence;
  let lastOccurrence;
  let isincludes = strings.includes(searchTerm);

  if (isincludes) {
    for (let i = 0; i < strings.length; i++) {
      const record = strings[i];
      if (record === searchTerm) {
        firstOccurrence = strings.indexOf(searchTerm);
        lastOccurrence = strings.lastIndexOf(searchTerm);
        break;
      }
    }
    console.log(`First Occurrence: ${firstOccurrence}`);
    console.log(`Last Occurrence: ${lastOccurrence}`);
  } else {
    console.log(`Record not found`);
  }
}
orthanArchivesSearch(['Frodo', 'Sam', 'Frodo', 'Merry'], 'Frodo');
console.log(`------------`);
orthanArchivesSearch(['Pippin', 'Merry', 'Sam', 'Pippin'], 'Pippin');
console.log(`------------`);
orthanArchivesSearch(['Aragorn', 'Legolas', 'Gimli'], 'Boromir');
console.log(`------------`);
orthanArchivesSearch(['Gandalf', 'Sam', 'Aragorn', 'Frodo'], 'Frodo');
