import { envLoader } from "../../../config/envLoader";
import { formatCurrency } from "../../../shared/utils/formatCurrency";
import useCartContext from "../context/CartContext"

import flechaAtras from "../../../assets/flechaAtras.svg"
import flechaAdelante from "../../../assets/flechaAdelante.svg"

const { optionsCurrency } = envLoader

export const CartProduct = ({ product }) => {

    const addItem = useCartContext((state) => state.addItem);
    const removeOneItem = useCartContext((state) => state.removeOneItem);
    /* const removeItem = useCartContext((state) => state.removeItem);
    const clearCart = useCartContext((state) => state.clearCart); */

    return (
      <li className="py-6 flex z-50">
        <div className="flex-shrink-0 w-24 h24 border border-gray-200 rounded-md-overflow-hidden">
          <img
            className="w-full h-full object-center object-cover"
            src={product.imagen}
            alt={product.nombre}
          />
        </div>

        <div className="ml-4 flex-1 flex-flex-column">
          <h3>{product.nombre}</h3>
          <p className="ml-4">
            {formatCurrency(product.precio, optionsCurrency)}
          </p>
        </div>

        <div className="flex-1 flex items-end justify-between text-sm">
          <div className="flex items center">
            <button
              onClick={() => removeOneItem(product._id)}
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <img
                src={flechaAtras}
                alt="flecha de quitar elemento"
                className="h-5 w-5"
              />
            </button>

            <span className="mx-2 text-gray-700">{product.quantity}</span>

            <button
              onClick={() => addItem(product)}
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <img
                src={flechaAdelante}
                alt="flecha de quitar elemento"
                className="h-5 w-5"
              />
            </button>
          </div>
        </div>
      </li>
    );
}