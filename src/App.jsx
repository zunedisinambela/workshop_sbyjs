import { useState } from 'react'
import fundamental from './components/fundamental'
import './App.css'

function App() {
  let judul = "Tokopedia"
  let produk = [
    "Apple",
    "Samsung",
    "Vivo",
    "Realme",
  ]

  let produk2 = [
    {
      name: "Apple",
      price: "100000",
      total: 10,
      picture: "https://picsum.photos/id/0/200/300"
    },
    {
      name: "Samsung",
      price: "50000",
      total: 120,
      picture: "https://picsum.photos/id/15/200/300"
    },
    {
      name: "Vivo",
      price: "43000",
      total: 43,
      picture: "https://picsum.photos/id/18/200/300"
    },
    
    {
      name: "Realme",
      price: "880000",
      total: 17,
      picture: "https://picsum.photos/id/9/200/300"
    },
  ]

  return (
    <div>
      <div>
        <h2>{judul}</h2>
      </div>
      <div>
        {/* {produk.map((p) => {
          return <ItemCard judul={p} />
        })} */}
        
        {produk2.map((p) => {
          return <ItemCard judul={p.name} total={p.total} price={p.price} picture={p.picture} />
        })}
      </div>
    </div>
  )
}

function ItemCard({ judul, price, total, picture }) {
  return (
    <div style={{ display: 'flex', border: '1px solid black' }}>
      <div>
        <img src={picture} alt="" />
      </div>
      <div style={{ paddingLeft: '10px' }}>
        <h4>{judul}</h4>
        <p>{price}</p>
        <p>{total}</p>
      </div>
    </div>
  )
}

export default App
