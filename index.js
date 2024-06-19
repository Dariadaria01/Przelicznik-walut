const currency = document.querySelector('#currency');

const getCurrency = () => {fetch('https://api.nbp.pl/?ref=public-apis')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
 } });
