import './css/estilos-1.css'

let cantidadDeGatos = 10

let gatos = ['😺', '😸', '😹']


for (let i = 1; i <= cantidadDeGatos; i++) {
    let emoji = gatos[(i - 1) % 3]
    console.log('Gato #' + i + ': ' + emoji)
}

let cantGatos = 5
let cantPasos = 3

for (let i = 1; i <= cantGatos; i++) {
    let huellas = ""
    for (let h = 1; h <= cantPasos; h++) {
        huellas += "🐾 "
    }
    console.log('gato #' + i + ': 🐈 ' + huellas)
}

cantGatos = 10
cantPasos = 4

for (let i = 1; i <= cantGatos; i++) {
    let interGatos = '🐈'
    if (i % 2 === 0) {
        interGatos += '🐈‍⬛'
    }

    let huellas = ""
    for (let h = 1; h <= cantPasos; h++) {
        huellas += "🐾 "
    }
    console.log(`Gato #${i}: ${interGatos} ${huellas}`)
}
