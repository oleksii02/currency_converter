import './App.scss';
import React from "react";
import Header from "./components/Header/Header";
import {useState} from "react";
import axios from "axios";
import Converter from "./components/Converter/Converter";


function App() {
    const [loading, setLoading] = useState(true)

    const [usduah, setUsdUah] = useState(0);
    const [euruah, setEurUah] = useState(0);

    React.useEffect(() => {
        getCurrency('uah', 'usd', '1', setUsdUah)
        getCurrency('uah', 'eur', '1', setEurUah)
    }, [])



    async function getCurrency(to = 'uah', from = 'usd', amount ='1', func) {
        try {
            setLoading(true)
            let response = await axios.get(`https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`, {
                headers: 'apikey: AIUIvPfNpQoLLreRNcFBBUEQAuvUv6Yw'
            })
            func((response.data.result === undefined) ? '' : String(response.data.result))
            setLoading(false)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="App">
            {(loading) ? <div className="spinner"></div> : <></>}
            <Header
                Loading={loading}
                USDUAH={usduah}
                EURUAH={euruah}
            />

            <Converter
                getCurrency={getCurrency}
            />

        </div>
    );
}

export default App;
