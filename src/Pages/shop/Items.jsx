import React from 'react'

export const Items = ({data}) => {
    const {id, product_name, price, productImage}=data;
  return (
    <div className='prod'>
        <img src={productImage} alt="" />
        <div className='description'>
          <b><p>{product_name}</p></b>
          <p>${price}</p>
        </div>
        <button className='cartBtn'>Add to Cart</button>
    </div>
  )
}
