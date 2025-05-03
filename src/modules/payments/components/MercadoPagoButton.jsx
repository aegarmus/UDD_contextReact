import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useEffect, useState } from 'react';
import { mercadoPagoPreference } from '../services/paymentService';

import { envLoader } from "../../../config/envLoader";

const { mp_publicKey, optionsCurrency: { locale } } = envLoader

export const MercadoPagoButton = ({ cart, onPaymentSuccess }) => {
    const [ preferenceId, setPreferenceId ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        initMercadoPago(mp_publicKey, { locale });
    }, [])

    const handleGeneratePreference = async() => {
        setLoading(true);
        try {
            const { data } = await  mercadoPagoPreference({ cart });
            setPreferenceId(data.id)
        } catch (error) {
            console.error('Error al procesar el pago', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='flex flex-col items-center justify-center space-y-4'>
            <button
                onClick={handleGeneratePreference}
                className='cursor-pointer w-full py-3 px-4 bg-blue-500 text-white rounded-md font-medium shadow-md hover:bg-blue-700 transition duration-300 disabled:bg-gray-300 disabled:cursor-not-alloweed'
                disabled={loading}
            >
                {loading ? 'Cargando pasarela de pago...' : 'Pagar con Mercado Pago'}
            </button>

            {
                preferenceId && (
                    <div className="w-full max-w-md-mt-4">
                        <Wallet 
                            initialization={{ preferenceId }}
                            onReady={() => console.log('Mercado Pago Wallet esta listeilor')}
                            onError={(error) => console.error('Error en la pasarela de pago', error)}
                            onPayment={(details) => onPaymentSuccess(details)}
                        />      
                    </div>
                )
            }
        </div>
    )

}