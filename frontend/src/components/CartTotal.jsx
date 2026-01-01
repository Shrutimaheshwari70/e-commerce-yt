import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

function CartTotal() {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext)

  const subtotal = getCartAmount()
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee

  return (
    <div className="max-w-md w-full bg-white border rounded-2xl p-6 shadow-md space-y-5">
      
      <Title text1="CART" text2="TOTALS" />

      <div className="space-y-4 text-gray-700">

        {/* Subtotal */}
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Subtotal</p>
          <p className="font-semibold">
            {currency}{subtotal}
          </p>
        </div>

        {/* Shipping */}
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Shipping fee</p>
          <p className="font-semibold">
            {currency}{delivery_fee}.00
          </p>
        </div>

        <hr className="border-dashed" />

        {/* Total */}
        <div className="flex justify-between items-center text-lg font-bold">
          <p>Total</p>
          <p className="text-orange-500">
            {currency}{total}.00
          </p>
        </div>

      </div>

      {/* Info */}
      <div className="text-xs text-gray-500 text-center pt-2">
        Inclusive of all taxes
      </div>
    </div>
  )
}

export default CartTotal
