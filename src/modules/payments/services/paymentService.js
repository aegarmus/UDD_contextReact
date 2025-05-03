import { apiClient } from '../../../shared/services/apiClient';

export const mercadoPagoPreference = async({ cart }) => {
    try {
        const { data } = await apiClient.post("/payments/create-payment", { cart });
        return data;
    } catch (error) {
        console.error('Error al crear las preferencias de pago:', error);
        throw new Error(error);
    }
}