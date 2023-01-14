const palabra = document.getElementById('palabra')
const btnContar= document.getElementById('contar')
const pResultado = document.getElementById('contador')

const conteo = () => {
    var palabraIntroducida = palabra.value
    if (palabraIntroducida == "") {
        pResultado.innerText = "No has introducido ninguna palabra"
    } else {
        let oRegex = /o|ó|ò|ô/gi
        let oArray = palabraIntroducida.match(oRegex)
        if (oArray == null) {
            pResultado.innerText = "Ho hay ninguna O"
        } else {
            let oEnPalabra = oArray.length
            pResultado.innerText = `La palabra tiene ${oEnPalabra} O`
        }
    }
}