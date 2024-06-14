function movies(array) {
  let movies = [];

  for (const commandLine of array) {
    if (commandLine.includes('addMovie')) {
      let commandArr = commandLine.split(' ');

      commandArr.shift();
      let movieName = commandArr.join(' ');

      let movie = {
        name: movieName,
      };
      movies.push(movie);
    } else if (commandLine.includes('directedBy')) {
      let info = commandLine.split(' directedBy ');
      let movieName = info[0];
      let directorName = info[1];
      let movie = movies.find(function (element) {
        return element.name === movieName;
      });

      if (movie) {
        movie.director = directorName;
      }
    } else if (commandLine.includes('onDate')) {
      let info = commandLine.split(' onDate ');
      let movieName = info[0];
      let movieDate = info[1];

      let movie = movies.find(function (element) {
        return element.name === movieName;
      });

      if (movie) {
        movie.date = movieDate;
      }
    }
  }

  for (const movie of movies) {
    let movieJSON = JSON.stringify(movie);
    console.log(movieJSON);
  }
}
movies([
  'addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  ' Spinderman 2 onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen',
]);
movies([
  'addMovie The Avengers',
  'addMovie Spiderman',
  'The Avengers directedBy Pesho Peshov',
  'The Avengers onDate 30.07.2010',
  'Captain America onDate 30.07.2010',
  'Captain America directedBy Joe Russo',
  'The Avengers directedBy Anthony Russo',
]);
