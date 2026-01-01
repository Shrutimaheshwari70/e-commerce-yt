import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

function ProductItem({id,image,name,price}) {
    const {currency} = useContext(ShopContext)
  return (
    <>
       <Link className="cursor-pointer text-gray-700" to={`/product/${id}`}>
      <div className="overflow-hidden w-full h-"> {/* fixed height for all images */}
        <img
          className="w-full h-[400px] object-cover hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt={name}
        />
      </div>
      <p className="w-[0px] pt-2 pb-0 mr-56 text-lg">{name}</p>
      <p className="text-sm font-medium mr-56 pb-2">{currency}{price}</p>
    </Link>
    </>
  )
}

export default ProductItem
