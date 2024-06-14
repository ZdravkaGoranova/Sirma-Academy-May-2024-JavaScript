function solve(string) {
  let onehalves = string.slice(0, string.length / 2).split('');
  let twohalves = string.slice(string.length / 2).split('');

  const reversedonehalves = onehalves.reverse();

  const reversedtwohalves = twohalves.reverse();
  console.log(reversedonehalves.join(''));
  console.log(reversedtwohalves.join(''));
}
solve('tluciffiDsIsihTgnizamAoSsIsihT');
console.log(`-------`);
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
