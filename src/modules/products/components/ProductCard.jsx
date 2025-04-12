import { Link } from "react-router-dom"
import { formatCurrency } from "../../../shared/utils/formatCurrency"
import { envLoader } from "../../../config/envLoader";

const { optionsCurrency } = envLoader

export const ProductCard = ({ producto }) => {

    return (
      <div className="bg-white rounded-lg shadow-md p-5 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <div className="w-full h-48 overflow-hidden">
          <Link to={`/productos/${producto._id}`}>
            <img
              className="w-full h-full object-cover"
              src={producto.imagen}
              alt={producto.nombre}
            />
          </Link>
        </div>
        <div>
          <h2 className="text-x1 font-semibold mb-2 text-gray-800">
            {producto.nombre}
          </h2>

          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-bold text-blue-600">
              {formatCurrency(producto.precio, optionsCurrency)}
            </span>
            <span className="text-sm px-2 py-1 rounded-full text gray-600">
              {producto.createdAt
                ? new Date(producto.createdAt).toLocaleDateString()
                : "Nuevo"}
            </span>
          </div>

          <p className="text-gray-600 mb-4-line-clamp-2">
            {producto.descripcion}
          </p>

          <div className="flex justify-between items-center">
            <span className="text-sm text-grqay-500">
              {producto.stock > 0
                ? `${producto.stock} disponible(s)`
                : "Agotado"}
            </span>
            <button>Agregar al carrito</button>
          </div>
        </div>
      </div>
    );
}