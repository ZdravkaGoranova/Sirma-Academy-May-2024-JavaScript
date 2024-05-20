function solve(floors, rooms) {

    for (let i = floors; i > 0; i--) {
        let building = '';
        for (let j = 0; j < rooms; j++) {
                if (i===floors) {
                    building +="L" + i + j + " ";
                }else if(i %2===0){
                    building +="O" + i + j + " ";
                }else{
                    building +="A" + i + j + " ";
                }  
        }
        console.log(building)
    }
}
solve(6, 4);
console.log(`-------------`);
solve(3, 3);
console.log(`-------------`);
solve(4, 4);
