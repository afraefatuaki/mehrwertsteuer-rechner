let nettoZuBrutto = document.getElementById('nettoZuBrutto')
let bruttoZuNetto = document.getElementById('bruttoZuNetto')
let nineteenPercent = document.getElementById('nineteen')
let sevenPercent = document.getElementById('seven')
let price = document.getElementById('price')
let texas = document.getElementById('texas')
let total = document.getElementById('total')
let Label1 = document.getElementById('brutoLabel')
let Label2 = document.getElementById('netoLabel')


function texasCalculation() {
    if (nettoZuBrutto.checked && nineteenPercent.checked) {
        texas.innerHTML = (price.value * 0.19).toFixed(2)
        total.innerHTML = (price.value * 1.19).toFixed(2)
    } else if (nettoZuBrutto.checked && sevenPercent.checked) {
        texas.innerHTML = (price.value * 0.07).toFixed(2)
        total.innerHTML = (price.value * 1.07).toFixed(2)
    } else if (bruttoZuNetto.checked && nineteenPercent.checked) {
        texas.innerHTML = (price.value / 1.19 * 0.19).toFixed(2)
        total.innerHTML = (price.value / 1.19).toFixed(2)
    } else if (bruttoZuNetto.checked && sevenPercent.checked) {
        texas.innerHTML = (price.value / 1.07 * 0.07).toFixed(2)
        total.innerHTML = (price.value / 1.07).toFixed(2)
    }
}

function changeLabel() {
    bruttoZuNetto.checked ? (Label1.innerHTML = 'Bruttobetrag') && (Label2.innerHTML = 'Nettobetrag') : (Label1.innerHTML = 'Nettobetrag') && (Label2.innerHTML = 'Bruttobetrag')
}