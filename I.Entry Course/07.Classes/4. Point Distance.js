class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(pointA, pointB) {
    let xdistance = Math.abs(pointA.x - pointB.x);
    let ydistance = Math.abs(pointA.y - pointB.y);
    let result = Math.sqrt(Math.pow(xdistance, 2) + Math.pow(ydistance, 2));
    return result;
  }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
