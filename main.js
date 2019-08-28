let price = 0;
let km = Number(prompt("Import km"));

function priceTaxi() {
    if (km <= 1) {
        price = 5000;
    } else if ((km > 1) && (km <= 30)) {
        price = km * 4000;
    } else {
        price = km * 3000;
    }
    return price;
}

function showDisplay() {
    document.getElementById('km').innerHTML = km;
    document.getElementById('price').innerHTML = priceTaxi();
}
