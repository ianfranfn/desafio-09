let cantGatos = 5
let cantPasos = 3

for (let i = 1; i <= cantGatos; i++) {
    let huellas = ""
    for (let h = 1; h <= cantPasos; h++) {
        huellas += "🐾 "
    }
    console.log('Ejercicio b - gato #' + i + ': 🐈 ' + huellas)
}