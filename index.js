const form = document.querySelector('#form');
const result = document.querySelector('#result');
const errorLabel = document.querySelector('#error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  errorLabel.textContent = '';
  const amount = event.target.amount.value;
  const currency = event.target.currency.value;
  fetch(`https://api.nbp.pl/api/exchangerates/rates/A/${currency}`)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject();
      }
      return response.json();
    })
    .then((data) => {
      const rate = data?.rates?.[0]?.mid;
      if (!rate) {
        errorLabel.textContent = 'błąd';
        return;
      }
      result.textContent = (amount * rate).toFixed(2);
    })
    .catch(() => {
      errorLabel.textContent = 'błąd';
    });
});
