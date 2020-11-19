// DOM Elements
const currency1El = document.getElementById("currency1");
const currency2El = document.getElementById("currency2");
const amount1El = document.getElementById("amount1");
const amount2El = document.getElementById("amount2");
const rateEl = document.getElementById("rate");
const btnEl = document.getElementById("btn");

async function getRate() {
  const currency1 = currency1El.value;
  const currency2 = currency2El.value;
  const res = await fetch(
    `https://api.exchangeratesapi.io/latest?base=${currency1}`
  );
  const data = await res.json();
  const rate = data.rates[currency2];
  amount2El.value = rate * amount1El.value;

  rateEl.innerText = `1 ${currency1} = ${rate} ${currency2}`;
}

// Eventlisteners

currency1El.addEventListener("change", getRate);
currency2El.addEventListener("change", getRate);
amount1El.addEventListener("input", getRate);
amount2El.addEventListener("input", getRate);
btnEl.addEventListener("click", () => {
  const currency1temp = currency1El.value;
  currency1El.value = currency2El.value;
  currency2El.value = currency1temp;
  getRate();
});

getRate();
