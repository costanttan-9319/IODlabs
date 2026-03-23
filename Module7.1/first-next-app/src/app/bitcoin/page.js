// src/app/bitcoin/page.js
import BitcoinRates from '../../components/BitcoinRates';

export default function BitcoinPage() {
  return (
    <div className="container">
      <h1>Bitcoin Rates</h1>
      <BitcoinRates />
    </div>
  )
}