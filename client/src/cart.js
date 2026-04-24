// src/cart.js

export const getCart = () => {
  const cart = localStorage.getItem("cart")
  return cart ? JSON.parse(cart) : []
}

export const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart))
}

export const addToCart = (product) => {
  const cart = getCart()
  cart.push(product)
  saveCart(cart)
}

export const removeFromCart = (id) => {
  const cart = getCart().filter(item => item.id !== id)
  saveCart(cart)
}