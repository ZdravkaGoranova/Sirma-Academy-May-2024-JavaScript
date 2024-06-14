function countingOrcs(n, m, h) {
  let totalNmberOfOrcs = 0;

  for (let i = 1; i <= h; i++) {
    if (i === 1) {
      totalNmberOfOrcs += n;
    } else {
      n += m;
      totalNmberOfOrcs += n;
    }
  }
  console.log(totalNmberOfOrcs);
}
countingOrcs(5, 2, 3);
countingOrcs(7, 1, 2);
countingOrcs(10, -1, 1);
countingOrcs(8, -2, 3);
