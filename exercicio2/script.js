const array = [12, 4, 534, 123, 6758, 9, 89, 0]

const quintuplos = array.map((elemento, indice, array) => {
    const calculo = elemento * 5
    return calculo
})

console.log(quintuplos)

const divide = array.map((elemento, indice, array) => {
    const calculo = elemento / 2
    return calculo
})

console.log(divide)