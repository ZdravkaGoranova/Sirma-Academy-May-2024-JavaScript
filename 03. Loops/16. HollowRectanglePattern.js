function solve(n, m) {

    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < m; j++) {
            
            if (i === 0 || i === n - 1) {
                row += "*";
            } else {
           
                if (j === 0 || j === m - 1) {
                    row += "*";
                } else {
                   
                    row += " ";
                }
            }
        }
        console.log(row);
    }

}
solve(4, 6);
console.log(`-------------`);
solve(2, 2);
console.log(`-------------`);
solve(3, 4);