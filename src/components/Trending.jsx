import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://api.coingecko.com/api/v3/search/trending";

function Trending() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => setTrending(res.data.coins));
  }, []);

  return (
    <div className="rounded-div my-12 py-8 text-primary">
      <h1 className="text-2xl font-bold py-4">Trending Coins</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {trending.map((coin, idx) => (
          <div
            key={idx}
            className="rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300"
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex">
                <img
                  className="rounded-full mr-4"
                  src={coin.item.small}
                  alt="/"
                />
                <div>
                  <p className="font-bold">{coin.item.name}</p>
                  <p>{coin.item.symbol}</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="w-4 m-2"
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
                  alt="/"
                />
                <p>{coin.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
