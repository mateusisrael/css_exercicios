"use strict";

// var pc = new Object;
// pc.gabinete = 'grande'


// var pc = {
//     gabinete : {
//         motheboard : "Gigabyte - Atx",
//         memoria : "4gb",
//         hd : "3Tb",

//     }
// }


//   ===>   Construtor
function Pc(gabinete, motheboard, memoria) {
    this.gabinete = gabinete;
    this.motheboard = motheboard;
    this.memoria = memoria;
}


var computer = new Pc("Atx", "Gigabyte", "4Gb");
console.log(computer.gabinete);
console.log(computer.motheboard);
console.log(computer.memoria);


var computer2 = new Pc("ITX", "Asus", "8Gb");

console.log(computer2);
console.log(computer);
