import React from 'react'
import {PRODUCTS} from "../../Product";
import { Items } from './Items';
import "./shop.css";
const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>OK Shop</h1>
      </div>
      <div className='products'>
         {PRODUCTS.map((prod)=> <Items data={prod}/>)}
      </div>
      
    </div>
  )
}

export default Shop;