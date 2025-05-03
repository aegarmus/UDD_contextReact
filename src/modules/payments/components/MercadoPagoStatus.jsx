import { Link, useLocation } from "react-router-dom"

import { message } from "../utils/message"
import { statusStyles } from "../utils/stylesFormat"



export const MercadoPagoStatus = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get('status');

    const { title, description } = message[status] || message.default

    return (
        <div className={`max-w-md mx-auto mt-8 p-6 rounded-lg shadow-md border-1-4 ${statusStyles[status] || statusStyles.default}`}>
            <h2 className='text-2x1 font-bold mb-4'>{title}</h2>
            <p className='text-gray-700 mb-6'>{description}</p>
            <Link
                to={'/products'}
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
                Volver a la tienda
            </Link>

        </div>
    )

}


/* 

const location =  http://localhost:5173/mercadopago/status?status=variable&otros=parametros... 
const queryParams = { status: 'variable', otros: 'parametros...' }
const status = 'variable'

*/