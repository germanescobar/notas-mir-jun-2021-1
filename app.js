function sumarNumerosPares(arr) {
    var suma = 0
    for (let i=0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            suma += arr[i]
        }
    }
    return suma
}

console.log(sumarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(sumarNumerosPares([8, 3, 5, 6, 1, 2]))