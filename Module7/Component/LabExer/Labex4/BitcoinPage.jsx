import BitcoinRates from '../Labex1/BitcoinRates';
import BitcoinRates2 from '../Labex2/BitcoinRates2';
import BitcoinRatesReducer from '../Labex2/BitcoinRatesReducer';

export default function BitcoinPage() {
    return (
        <div className="BitcoinPage page-container">
            <h1>Bitcoin Rates Dashboard</h1>
            <p className="subtitle">All previous exercise logic is preserved below.</p>
            
            <section className="exercise-box">
                <h2>Exercise 1</h2>
                <BitcoinRates />
            </section>

            <section className="exercise-box">
                <h2>Exercise 2.1</h2>
                <BitcoinRates2 />
            </section>

            <section className="exercise-box">
                <h2>Exercise 2.2 (Reducer)</h2>
                <BitcoinRatesReducer />
            </section>
        </div>
    );
}