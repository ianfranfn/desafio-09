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
    console.log(`Ejercicio c - Gato #${i}: ${interGatos} ${huellas}`)
}