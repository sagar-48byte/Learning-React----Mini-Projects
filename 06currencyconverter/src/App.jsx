import { useState, useEffect } from 'react'
// import useCurrencyInfo from './hooks/usecurrencyinfo'
import InputBox from './components/Input'

const[data, setdata] = useState({})

function useCurrencyInfo(from) {


  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
      .then((res) => res.json)
      .then((res) => setdata(res[currency]))
  },
    [currency])

  return data
}

function App() {
  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [convertedamt, setconvertedamt] = useState(0)
  const [currencyInfo, setCurrencyInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    useCurrencyInfo(from)
      .then(data => {
        setIsLoading(false);
        setCurrencyInfo(data);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      });
  }, [from]);

  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  function swap() {
    setfrom(to)
    setto(from)
    setconvertedamt(amt)
    setamount(convertedamt)
  }
   
  const convert = ()=> {
    setconvertedamt(amount * currencyInfo[to])
  }

  return (
    
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{backgroundImage: `url('https://images.pexels.com/photos/4386451/pexels-photo-4386451.jpeg?auto=compress&cs=tinysrgb&w=600')`}}
        
        >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        amount={amount}
                        currencyOptions={options}
                        onAmtChange={(amount)=> setamount(amount)}
                        onCurrencychange={(currency)=>
                          {setamount(amount)
                          setfrom(currency)}
                        }
                        selectCurrency={from}

                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"    
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <InputBox
                        label="To"
                        amount={convertedamt}
                        currencyOptions={options}
                        onCurrencychange={(currency)=>
                          setto(currency)
                        }
                        selectCurrency={to}
                        amountDisable
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </form>
            </div>
          </div>
        </div>
  )
}

export default App
