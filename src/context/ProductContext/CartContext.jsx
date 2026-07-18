import React, { useState } from 'react'
import { createContext } from 'react'

export const CartContext=createContext()

export const CartProvider = ({children}) => {
   const [wishlist, setWishlist] = useState([]);
const [cart, setCart] = useState([]);


const removeItem = (product, setter) => {
  setter((prev) => prev.filter((item) => item.id !== product.id));
};

const toggleItem = (product, setter) => {
  setter((prev) => {
    const exists = prev.some((item) => item.id === product.id);

    if (exists) {
      return prev.filter((item) => item.id !== product.id);
    }

    return [...prev, product];
  });
};

const moveToCart = (product) => {
  // Add to cart
  setCart((prev) => {
    const exists = prev.some((item) => item.id === product.id);

    if (exists) return prev;

    return [...prev, product];
  });

  // Remove from wishlist
 removeItem(product, setWishlist);
};
    
  return (
<CartContext.Provider value={{ wishlist, cart,setCart,setWishlist, toggleItem ,moveToCart,removeItem}}>
{children}
</CartContext.Provider>
  )
}

