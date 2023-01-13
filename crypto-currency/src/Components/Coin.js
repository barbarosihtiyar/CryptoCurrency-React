import React from "react";

function Coin({
  key,
  name,
  image,
  symbol,
  marketcap,
  price,
  priceChange,
  volume,
}) {
  return (
    <div className="coinFlex">
      <div className="image-name">
        <img src={image} alt="" />
        <span>{name}</span>
      </div>
      <div className="symbol">{symbol}</div>
      <div className="price">{price}</div>
      <div className="volume">{volume}</div>
      {priceChange < 0 ? (
        <div className="priceChange red">{priceChange.toFixed(2)}</div>
      )  : (
        <div className="priceChange green">{priceChange.toFixed(2)}</div>
      )}
      <div className="marketCap">Mkt Cap:{marketcap}</div>
    </div>
  );
}

export default Coin;
