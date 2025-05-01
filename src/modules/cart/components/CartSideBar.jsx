import { envLoader } from "../../../config/envLoader";
import { formatCurrency } from "../../../shared/utils/formatCurrency";
import useCartContext from "../context/CartContext"
import { CartProduct } from "./CartItem";


const { optionsCurrency } = envLoader

export const CartSideBar = ({ onClose }) => {

    const products = useCartContext((state) => state.products);
/*     const totalItems = useCartContext((state) => state.totalItems); */
    const totalPrice = useCartContext((state) => state.totalPrice);
    const clearCart = useCartContext((state) => state.clearCart);
    
    const handleCheckout = () => {
        alert("Pedido realizado con éxito! muchas gracias por su compra!");
        clearCart();
        onClose();
    };

    return (
        <>
            <div
                onClick={onClose}
                className="fixed inset-0 bg-gray-800/30 backdrop-blur-sm transition-opacity duration-300"
            ></div>

            <div className="fixed inset-y-0 right-0 max-w-md bg-white shadow-2xl transform transition-all ease-in-out duration-300">
                <div className="h-full flex flex-col overflow-y-auto">
                    <div className="px-4 py-6 sm:px-6 border-b border-gray-200">
                        <h2 className="text-lg font-medium text-gray-900">
                            Carrito de compras
                        </h2>
                        <button
                            onClick={onClose}
                            className="ml-3 h-7 flex items-center justify-center text-gray-400 hover:text-gray-500"
                        >
                            X
                        </button>
                    </div>

                    <div className="flex-1 px-4 sm:px-6 overflow-y-auto">
                        {
                            products.length === 0 ? (
                                <p className="text-center py-8">Tu Carrito esta vacio</p>
                            ) : (
                                <div className="flow-root">
                                    <ul className="divide-y divide-gray-300">
                                        {
                                            products.map((product) => (
                                                <CartProduct key={product._id} product={product} />
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </div>

                    {
                        products.length > 0 && (
                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Total</p>
                                    <p>{formatCurrency(totalPrice, optionsCurrency)}</p>
                                </div>

                                <div className="mt-6">
                                    <button
                                        onClick={handleCheckout}
                                        className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Pagar
                                    </button>
                                </div>
                                <div className="mt-3 flex items-center justify-center text-sm text-gray-500">
                                    <button
                                        onClick={clearCart}
                                        className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer"
                                    >
                                        Vaciar carrito
                                    </button>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </>
    )
}