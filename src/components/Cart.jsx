import { useContext } from 'react'
import { CartContext } from '../context/Cart'

export default function Cart() {

    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

    return (
        <div>
            <p className='mx-10 text-3xl font-bold'>CART</p>
            <div className='grid grid-cols-3 my-10'>
                <div className="flex flex-col gap-4 col-span-2 bg-white w-11/12 rounded-xl border shadow-lg mx-auto">
                    {cartItems.map((item) => (
                    <div className="flex justify-between items-center" key={item.id}>
                        <div className="flex gap-4">
                        <img src={item.image} alt={item.title} className="rounded-md h-24" />
                        <div className="flex flex-col">
                            <h1 className="text-lg font-bold">{item.title}</h1>
                            <p className="text-gray-600">{item.price}</p>
                        </div>
                        </div>
                        <div className="flex gap-4">
                        <button
                            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                            onClick={() => {
                            addToCart(item)
                            }}
                        >
                            +
                        </button>
                        <p>{item.quantity}</p>
                        <button
                            className="mr-4 px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                            onClick={() => {
                            removeFromCart(item)
                            }}
                        >
                            -
                        </button>
                        </div>
                    </div>
                    ))}
                </div>
                <div className='bg-white border shadow-lg col-span-1 w-11/12 mx-auto rounded-xl'>
                    { cartItems.length > 0 ? <p className='text-center my-5 text-xl font-semibold'>Total: { getCartTotal() }€</p> : <p className='mx-10 text-xl font-semibold'>Your cart is empty</p> }
                </div>
            </div>
            <button onClick={clearCart} className='text-center mx-10 mt-10 bg-black text-white font-semibold p-2 rounded-md'>Clear Cart</button>
        </div>
    )
}
