import React from 'react'
import Products from '../Products/Products'
import Signup from '../signup/Signup'
import Cart from '../cart/Cart'
import { Routes,Route } from 'react-router-dom'

const Navigate = ({productItems , cartItems , handleAddProduct , handleRemoveProduct,handleCartClearance}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>} >     
        </Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>}></Route>
      </Routes>
    </div>
  )
}

export default Navigate