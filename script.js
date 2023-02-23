const currentcyFirst = document.getElementById("currency-first");
const currentcySecond = document.getElementById("currency-second");
const worthFirstInput = document.getElementById("worth-first");
const worthSecondInput = document.getElementById("worth-second");
const exchangeRate = document.getElementById("exchange-rate");

updateRate();


function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/1831564494d6c8dcb5bafa10/latest/${currentcyFirst.value}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        const rate = data.conversion_rates[currentcySecond.value]
        console.log(rate);
        exchangeRate.innerText = `1 ${currentcyFirst.value} = ${rate} ${currentcySecond.value}`

        worthSecondInput.value = (worthFirstInput.value * rate).toFixed(2);
    })
}


currentcyFirst.addEventListener("change", updateRate);
currentcySecond.addEventListener("change", updateRate);
worthFirstInput.addEventListener("input", updateRate);