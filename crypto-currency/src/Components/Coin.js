import React from 'react'

function Coin({key,name,image,symbol,marketcap,price,priceChange,volume}) {
  return (
    <div>
    <img src={image} />
    {name}
    {symbol}
    {price}
    {volume}
    {priceChange}
    {marketcap}
    </div>
  )
}

export default Coin