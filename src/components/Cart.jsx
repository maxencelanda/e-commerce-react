import { useContext } from 'react'
import { CartContext } from '../context/Cart'

export default function Cart() {

    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)

    return (
        <div>
            <div className="flex flex-col gap-4">
                {cartItems.map((item) => (
                <div className="flex justify-between items-center" key={item.id}>
                    <div className="flex gap-4">
                    <img src={item.thumbnail} alt={item.title} className="rounded-md h-24" />
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
                        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
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
        </div>
    )
}
