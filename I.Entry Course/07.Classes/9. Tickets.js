class Ticket {
  constructor(destination, price, status) {
    this.destination = destination;
    this.price = price;
    this.status = status;
  }
}

function tickets(arrayStrings, sortingCriterion) {
  let array = [];
  let sortedArray = [];
  for (let i = 0; i < arrayStrings.length; i++) {
    const element = arrayStrings[i].split('|');
    let [destination, price, status] = element;
    price = Number(price);
    const ticket = new Ticket(destination, price, status);

    array.push(ticket);
  }

  switch (sortingCriterion) {
    case 'destination':
      sortedArray = array.sort((a, b) =>
        a.destination.localeCompare(b.destination),
      );
      break;
    case 'price':
      sortedArray = array.sort((a, b) => a.price - b.price);
      break;
    case 'status':
      sortedArray = array.sort((a, b) => a.status.localeCompare(b.status));
      break;
    default:
      break;
  }

  sortedArray.forEach((ticket) => console.log(ticket));
}
tickets(
  [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed',
  ],
  'destination',
);
console.log(`-----------------`);
tickets(
  [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed',
  ],
  'status',
);
