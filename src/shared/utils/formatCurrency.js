/**
 * Formatea un número como una moneda especifica
 * @param {number} amount - El monto a formatear
 * @param {object} options - Opciones adicionales de formateo
 * @param {string} options.currency - La divisa que se utlizara (ej: 'USD', 'EUR', 'COP', 'CLP')
 * @param {string} options.locale - El locale que se utilizara (ej: 'en-US', 'es-CO', 'es-CL')
 * @param {number} options.minimumFractionDigits - Número mínimo de dígitos decimales
 * @param {number} options.maximumFractionDigits - Número máximo de dígitos decimales
 * @returns {string} - El monto formateado como una cadena de texto
 */

export const formatCurrency = ( 
    amount,
    { 
        currency, 
        locale, 
        minimumFractionDigits = 0, 
        maximumFractionDigits = 0 
    }
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(amount);
};

