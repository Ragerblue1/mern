import React from 'react'
import './MoreProducts.css'
import Item from '../Item/Item'
import data_product from '../Assets/data'

const MoreProducts = () => {
  return (
    <div className='Moreproducts'>
      <h1>More Products</h1>
      <hr />
      <div className="Moreproducts-item">
        {data_product.map((item)=>{
            return <Item id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default MoreProducts
