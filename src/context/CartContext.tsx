import { createContext, ReactNode, useState } from 'react'

interface ShoppingCartProviderProps {
    children: ReactNode
}

interface ItemType {
    id: string,
    name: string,
    description: string,
    image: string,
    type: string[],
    price: number,
    isLive: boolean,
    popularity: number
}

interface ShoppingCartContext {
    addToCart: (item: ItemType) => void
    removeFromCart: (id: string) => void
    removeUnityFromCart: (item: ItemType) => void
    addUnityToCart: (item: ItemType) => void
    clearCart: () => void
    inCart: (id: string) => boolean
    calculateTotalPrice: () => number
    calculateItemsQuantity: () => number
    cart: ItemType[]
}

//creando el contexto
export const newContext = createContext({} as ShoppingCartContext);

export function CartContext({children}: ShoppingCartProviderProps) {

    //definiendo el estado del carrito
    const [cart, setCart] = useState<ItemType[]>([]);

    //agregando productos al carrito
    const addToCart= (item: ItemType) => {
        
        
    }

    //eliminando producto del carrito
    const removeFromCart = (id: string) => {
    }

    //eliminar una unidad del producto
    const removeUnityFromCart= (item: ItemType) => {
        
    }

    //agregando una unidad del producto al carrito
    const addUnityToCart = (item: ItemType) => {
        
    }

    //vaciando el carrito
    const clearCart= () => {
        setCart([])
    }

    //consulto si el producto esta en el carrito
    const inCart= (id: string) =>{
        return false
    }

    //calculo el precio total del carrito
    const calculateTotalPrice = () => {
        return 0
    }

    //calculo la cantidad de unidades del carrito
    const calculateItemsQuantity = () => {
        return 0
    }

  return (
    <newContext.Provider value={{
        cart, 
        addToCart, 
        removeFromCart, 
        removeUnityFromCart, 
        addUnityToCart,
        clearCart, 
        inCart, 
        calculateTotalPrice, 
        calculateItemsQuantity
    }}>
        {children}
    </newContext.Provider>
  )
}