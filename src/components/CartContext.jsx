import React, { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // { id, name, price, qty, image }
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen((s) => !s);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = (item) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id);
      if (idx !== -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setIsOpen(true);
  };

  const removeItem = (id) => setItems((prev) => prev.filter((p) => p.id !== id));
  const increment = (id) => setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)));
  const decrement = (id) => setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p)));
  const clearCart = () => setItems([]);

  const subtotal = useMemo(() => items.reduce((sum, it) => sum + it.price * it.qty, 0), [items]);
  const count = useMemo(() => items.reduce((sum, it) => sum + it.qty, 0), [items]);

  const value = useMemo(
    () => ({ items, addItem, removeItem, increment, decrement, clearCart, subtotal, count, isOpen, toggleCart, openCart, closeCart }),
    [items, subtotal, count, isOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
