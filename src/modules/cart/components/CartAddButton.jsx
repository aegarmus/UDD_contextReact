import useCartContext from "../context/CartContext";


export const CartAddButton = ({ product }) => {
    const addItem = useCartContext((state) => state.addItem);

    const handleAddToCart = () => {
        addItem(product);
        console.log('Estamos agregando un producto', product)
    }

    return (
        <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300"

        >
            Agregar al carrito
        </button>
    )
}