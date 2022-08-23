//Funciones de orden superior

// Ejemplo: hacer que los numeros dentro del array tenga el doble de valor
//.map
let numbers= [1,5,10,15];

let double = numbers.map(function(x){
    return x*2;
})
console.log(double)