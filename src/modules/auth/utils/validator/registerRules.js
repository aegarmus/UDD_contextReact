

export const registerRules = {
    nonbre: (value) => (/^[a-zA-Z]+$/.test(value) && value.length >= 3 && value.length <= 20),
    apellido: (value) => (/^[a-zA-Z]+$/.test(value) && value.length >= 3 && value.length <= 50),
    correo: (value) => {
        if(!value) return 'El Correo es requerido';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'El Correo no es valido';
    },
    telefono: (value) => {
        if (!value) return "El telefono es requerido";
        if (!/^\d{10}$/.test(value)) return "El telefono no es valido";
    },
    fecha_nacimiento: (value) => {
        if(!value) return "La fecha de nacimiento es requerida";
        const today = new Date();
        const birthDate = new Date(value);
        const age = today.getFullYear() - birthDate.getFullYear();
        if(age < 18) return "Debes ser mayor de edad para registrarte";
    },
    password: (value) => {
        if(!value) return "La contraseña es requerida";
        if(value.length < 4) return "La contraseña debe tener al menos 6 caracteres";
        if(value.length > 20) return "La contraseña no puede tener más de 20 caracteres";
        return ""
    },
    confirmPassword: (value, formData) => {
        if(!value) return "La confirmación de la contraseña es requerida";
        if(formData && value !== formData.password) return "Las contraseñas no coinciden";
        return ""
    },
    imagen: (value) => {
        if(!value) return "La imagen es requerida";

        if(value instanceof File) {
            if(!value.type.startsWith('image/')) return "El archivo no es una imagen"
            if(value.size > 2 * 1024 * 1024) return "La imagen no puede pesar más de 2MB";
        }

        if(!(value instanceof File)) {
            return "Debes enviar un archivo de tipo imagen";
        }
    }
}