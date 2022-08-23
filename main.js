//Funciones de orden superior

// Ejemplo: hacer que los numeros dentro del array tenga el doble de valor
//.map recorre e imprime
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

//ForEach recorre pero no tre nada

//Imprimir una linea por cada elemento

double.forEach(function (d) {
    console.log(d)
})

double.forEach(d => console.log(d))

//.filter filtra

const paises = ['Argentina', 'Uruguay', 'Brasil', 'Chile', 'Peru']

//Forma larga con function
const result1 = paises.filter(function (pais) {
    return pais.length > 5
})
console.log(result1)

//Forma corta con funcion =>
const result2 = paises.filter(pais => pais.length > 6)
console.log(result2)

//.sort ordena segun codigo ascii

let frutas = ['bananara', 'manzana', 'pera', 'sandia', 'naranja']
frutas.sort()
console.log(frutas)
let puntos = [1, 2, 19, 21]
puntos.sort()
console.log(puntos)
let cosas = ['2 perros', '2 Perros', '1 platano', '2 platanos']
cosas.sort()
console.log(cosas)

//ordeno numeros pero como debe ser forma larga
let puntos1 = [1, 12, 53, 4, 13, 19, 61, 12, 6]
for (let i = 0; i < puntos1.length - 1; i++) {
    for (let j = i + 1; j < puntos1.length; j++) {
        if (puntos1[i] > puntos1[j]) {
            let aux = puntos1[i]
            puntos1[i] = puntos1[j]
            puntos1[j] = aux
        }
    }
}
console.log(puntos1)

// Forma mediana
let puntos2 = [1, 12, 53, 4, 13, 19, 61, 12, 6]
puntos2.sort(function (a, b) {
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }
    return 0
})
console.log(puntos2)

//Forma corta con =>
let puntos3 = [1, 12, 53, 4, 13, 19, 61, 12, 6]
puntos3.sort((a, b) => a - b)
console.log(puntos3)