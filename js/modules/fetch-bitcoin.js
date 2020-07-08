export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then(responseBitcoin => responseBitcoin.json())
    .then(jsonBitcoin => {
      const btcPrice = document.querySelector('.price-btc');

      btcPrice.innerText = (1000 / jsonBitcoin.BRL.sell).toFixed(4);
    })
    .catch(err => {
      console.log(Error(err));
    });
}
