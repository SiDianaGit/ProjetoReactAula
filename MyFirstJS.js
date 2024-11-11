const v1 =1;
const v2 =2; //variavel que nao muda
let aprovado = true; //variavel que muda de valor. Fica restrito dentro de uma função
var nota = 8; //variavel que muda de valor. Fica irrestrito a uma função, podendo causar conflito de codigo. Evitar a utilização



console.log("soma", 1 + 1);
console.log("---------------");

if(1 === '1') {console.log("verdadeiro")} else {console.log("falso")};
console.log("---------------");

nota = 9;
switch(nota){
    case nota < 6: console.log("Abaixo da media");
    break;
    case nota >= 6 && nota <= 7: console.log("Na media")
    break; 
    default: console.log("Acima da media");
}

console.log("---------------");
//ternario
nota > 5 ? console.log("Verdadeiro") : console.log("falso");
console.log("---------------");

for (let i = 1; i<= 10; i++) {
    if (i % 2 == 0) {
        console.log(`${i} x 5 = ${i * 5}`);
    }
}

console.log("---------------");
let x =1;
while (x < 10)
    {
      console.log(`${x} x 5 = ${x * 5}`);
      x++;
    }

console.log("---------------");

const val = [1,2,3,4,5,6,7,8,9,10];
val.forEach((val) => {
    console.log(`${val} x 5 = ${val * 5}`);
});


console.log("---------------");

const val2 = [1,2,3,4,5,6,7,8,9,10];
const resultado = val2.map((value) => {return value * 5});
console.log(resultado);

console.log("---------------");


const soma = (n1,n2) => n1 + n2;  //arrow funcition
const result = soma(1,2);
console.log(result);



console.log("---------------");

var obj = [
    {n:'Simone',
     i:46
    },
    {n:'Lellinha',
     i: 10
    }
    ];

console.log(obj[1].n);

obj.push({n:'Luis',
    i: 10
   });

console.log(obj[2].n);

obj.push(
    {n:'fulana1',
        i: 11
    },
    {n:'fulana2',
        i: 12
    }
);

console.log(obj[4].n);

const objFiltrado = obj.filter((item) => item.i > 10);
console.log(objFiltrado);

const objFind = obj.find((item) => item.n == 'Lellinha'); //retorna o 1o que encontrar
console.log(objFind);

const objFindIdx = obj.findIndex((item) => item.n == 'Lellinha'); //retorna o 1o que encontrar
console.log(`index= ${objFindIdx}`);

const idades = obj.reduce((acc, obj) => {  //soma acumulada
    return acc + obj.i;
}, 0);
console.log(idades);

const acimadenove = obj.some((item) => obj.i > 9);
const Tdacimadenove = obj.every((item) => obj.i > 9);

if(acimadenove == true) {console.log("acimadenove")};
if(Tdacimadenove == true) {console.log("Tdacimadenove")};

//operacoes basicas do DOM do HTML
getElementsByTagName
getElementsByClassName
getElementsById //unico objeto numa pagina html
querySelector

