//Funciones de orden superior

// Ejemplo: hacer que los numeros dentro del array tenga el doble de valor
//.map
let numbers = [1, 5, 10, 15];

let double = numbers.map(function (x) {
    return x * 2;
})
console.log(double)
// Con funcion flecha
var double2 = numbers.map((x) => {
    if (x > 5) {
        return (x * 2)
    } else {
        return x
    }
})
console.log(double2)

//ForEach

//Imprimir una linea por cada elemento

double.forEach(function (d) {
    console.log(d)
})

double.forEach(d => console.log(d))

//.filter

const paises = ['Argentina', 'Uruguay', 'Brasil', 'Chile', 'Peru']

//Forma larfa con function
const result1 = paises.filter(function(pais){
    return pais.length > 5
})
console.log(result1)

//Forma corta con funcion =>
const result2 = paises.filter(pais=> pais.length>6)
console.log(result2)