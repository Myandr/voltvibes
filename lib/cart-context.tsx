"use client"

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import {
  type Cart,
  type CartLine,
  cartCreate,
  cartLinesAdd,
  cartLinesUpdate,
  cartLinesRemove,
  getCart,
} from '@/lib/shopify'

const CART_ID_KEY = 'vv_cart_id'

interface CartContextValue {
  cart: Cart | null
  loading: boolean
  addToCart: (variantId: string, quantity?: number) => Promise<void>
  updateQuantity: (lineId: string, quantity: number) => Promise<void>
  removeItem: (lineId: string) => Promise<void>
  clearCart: () => void
  lines: CartLine[]
  totalQuantity: number
  totalAmount: number
  checkoutUrl: string | null
}

const CartContext = createContext<CartContextValue | null>(null)

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null)
  const [loading, setLoading] = useState(false)

  // Load existing cart on mount
  useEffect(() => {
    const cartId = localStorage.getItem(CART_ID_KEY)
    if (!cartId) return
    getCart(cartId)
      .then((c) => {
        if (c) setCart(c)
        else localStorage.removeItem(CART_ID_KEY)
      })
      .catch(() => localStorage.removeItem(CART_ID_KEY))
  }, [])

  const addToCart = useCallback(async (variantId: string, quantity = 1) => {
    setLoading(true)
    try {
      const cartId = localStorage.getItem(CART_ID_KEY)
      let updated: Cart
      if (cartId) {
        updated = await cartLinesAdd(cartId, variantId, quantity)
      } else {
        updated = await cartCreate(variantId, quantity)
        localStorage.setItem(CART_ID_KEY, updated.id)
      }
      setCart(updated)
    } finally {
      setLoading(false)
    }
  }, [])

  const updateQuantity = useCallback(async (lineId: string, quantity: number) => {
    if (!cart) return
    setLoading(true)
    try {
      const updated = await cartLinesUpdate(cart.id, lineId, quantity)
      setCart(updated)
    } finally {
      setLoading(false)
    }
  }, [cart])

  const removeItem = useCallback(async (lineId: string) => {
    if (!cart) return
    setLoading(true)
    try {
      const updated = await cartLinesRemove(cart.id, lineId)
      setCart(updated)
    } finally {
      setLoading(false)
    }
  }, [cart])

  const clearCart = useCallback(() => {
    localStorage.removeItem(CART_ID_KEY)
    setCart(null)
  }, [])

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        lines: cart?.lines ?? [],
        totalQuantity: cart?.totalQuantity ?? 0,
        totalAmount: cart?.totalAmount ?? 0,
        checkoutUrl: cart?.checkoutUrl ?? null,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
