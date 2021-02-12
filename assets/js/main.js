let nettoZuBrutto = document.getElementById('nettoZuBrutto')
let bruttoZuNetto = document.getElementById('bruttoZuNetto')
let nineteenPercent = document.getElementById('nineteen')
let sevenPercent = document.getElementById('seven')
let price = document.getElementById('price')
let texas = document.getElementById('texas')
let total = document.getElementById('total')


function texasCalculation() {
    if (nettoZuBrutto.checked == true && nineteenPercent.checked == true) {
        texas.innerHTML = (price.value * 0.19).toFixed(2)
        total.innerHTML = (price.value * 1.19).toFixed(2)
    } else if (nettoZuBrutto.checked == true && sevenPercent.checked == true) {
        texas.innerHTML = (price.value * 0.07).toFixed(2)
        total.innerHTML = (price.value * 1.07).toFixed(2)
    } else if (bruttoZuNetto.checked == true && nineteenPercent.checked == true) {
        texas.innerHTML = (price.value / 1.19 * 0.19).toFixed(2)
        total.innerHTML = (price.value / 1.19).toFixed(2)
    } else if (bruttoZuNetto.checked == true && sevenPercent.checked == true) {
        texas.innerHTML = (price.value / 1.07 * 0.07).toFixed(2)
        total.innerHTML = (price.value / 1.07).toFixed(2)
    }
}