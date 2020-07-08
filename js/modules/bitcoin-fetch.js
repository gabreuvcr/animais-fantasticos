export default function initBitcoinFetch() {
  fetch('https://blockchain.info/ticker')
    .then(bitcoinResponse => bitcoinResponse.json())
    .then(bitcoinJson => {
      const bitcoinPrice = document.querySelector('.price-btc');

      bitcoinPrice.innerText = (1000 / bitcoinJson.BRL.sell).toFixed(4);
    })
    .catch(err => {
      console.log(Error(err));
    });
}
