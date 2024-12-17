
let cantidadDeGatos = 10

let gatos = ['😺', '😸', '😹']

for (let i = 1; i <= cantidadDeGatos; i++) {
    let emoji = gatos[(i - 1) % 3]
    console.log('Ejercicio a - Gato #' + i + ': ' + emoji)
}