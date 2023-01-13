import "./App.css"
import "./reset.css"
import axios from 'axios';
import {useState,useEffect} from 'react';
import Coin from "./Components/Coin";
function App() {
  const [search,setSearch] = useState("")
  const [coins,setCoins] = useState([]);

  const changeInput = (e) => {
    setSearch(e.target.value)
  }
  
  useEffect(() => {
    axios
    .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(res => {
    setCoins(res.data);
    console.log(res.data);
  }).catch(err => console.log(err));
    }, [])

    const filteredCoins =
      coins.filter(coin  =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      );
  
  return (
    <div className="App">
    <div className="appContainer">
      <div className="appWrapper">
      <div className="coinSearch">
      <h1 className="searchTitle">Search a Currency</h1>
        <form>
          <input placeholder="Search" type="text" className="searchInput" onChange={changeInput} />
        </form>
        </div>
        <div className="coinInfo">
          {filteredCoins.map((coin,index) => 
              <div className="coin" key={index}>
          <Coin 
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          />
          </div>
        )  
        }
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
