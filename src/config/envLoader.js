
export const envLoader = {
    backendUrl: import.meta.env.VITE_BACKEND_URL,
    optionsCurrency: {
        currency: import.meta.env.VITE_CURRENCY,
        locale: import.meta.env.VITE_LOCALE,
        minimumFractionDigits: Number(import.meta.env.VITE_MINIMUM_FRACTION_DIGITS) || 0,
        maximumFractionDigits: Number(import.meta.env.VITE_MAXIMUM_FRACTION_DIGITS) || 0,
    },
    mp_publicKey: import.meta.env.VITE_MP_PUBLIC_KEY
}