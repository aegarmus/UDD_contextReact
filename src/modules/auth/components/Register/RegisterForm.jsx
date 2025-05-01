import { useCallback, useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom";

import { FormField } from "./FormFiled";
import { ImageUploader } from "../../../../shared/components/ImageUploader";

import { FORM_INITIAL_STATE } from "../../utils/types/initialFormSate";
import { useValidateRegisterForm } from "../../hooks/useValidateRegisterForm";
import { formatDataRegister } from "../../utils/formaters/formatDataRegister";


export const RegisterForm = () => {
    const { register } = useContext(AuthContext)
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState(FORM_INITIAL_STATE);
    const [ formError, setFormError ] = useState("");

    const { errors, validateField, validateForm } = useValidateRegisterForm(formData);

    const handleChange = useCallback((event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        validateField(name, value);
    }, [validateField]);

    useEffect(() => {
        if(formData.confirmPassword) {
            validateField("confirmPassword", formData.confirmPassword);
        }
    }, [formData.password, formData.confirmPassword, validateField]);

    const handleSubmit = async(event) => {
        event.preventDefault();
        setFormError("");

        if(validateForm()) {
            setFormError('Por favor, corrige los errores antes de continuar.');
            return;
        }

        try {
            const formDataToSend = formatDataRegister(formData);
           
            console.log("formDataToSend", formDataToSend);
            await register(formDataToSend);
            alert("Usuario registrado correctamente, por favor inicie sesión.");
            navigate('/login');
        } catch (error) {
            console.error("Error registering:", error);
            setFormError("Error al registrar el usuario. Por favor, inténtelo de nuevo más tarde.");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4" >
            {
                formError && (
                    <div className="bg-red-200 text-red-700 p-3 rounded-md">
                        {formError}
                    </div>
                )
            }

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                    id="nombre"
                    label="Nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    required={true}
                    error={errors.nombre}
                />

                <FormField
                    id="apellido"
                    label="Apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    placeholder="Apellido"
                    required={true}
                    error={errors.apellido}
                />
            </div>
            
            <FormField
                id="correo"
                label="Correo"
                name="correo"
                type="email"
                value={formData.correo}
                onChange={handleChange}
                placeholder="Correo"
                required={true}
                error={errors.correo}
            />
            <FormField
                id="telefono"
                label="Teléfono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                required={true}
                error={errors.telefono}
            />
            <FormField
                id="fecha_nacimiento"
                label="Fecha de Nacimiento"
                name="fecha_nacimiento"
                type="date"
                value={formData.fecha_nacimiento}
                onChange={handleChange}
                placeholder="Fecha de Nacimiento"
                required={true}
                error={errors.fecha_nacimiento}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                    id="password"
                    label="Contraseña"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Contraseña"
                    required={true}
                    error={errors.password}
                />
                <FormField
                    id="confirmPassword"
                    label="Confirmar Contraseña"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirmar Contraseña"
                    required={true}
                    error={errors.confirmPassword}
                />
            </div>

            <ImageUploader 
                onChange={handleChange}
                error={errors.imagen}
            />
           
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
                type="submit"
            >
                Registrate
            </button>
        </form>
    )
    
}

/*
Entries devuelve un array bidimensional con los pares clave-valor de un objeto.
[[key, value], [key, value], ...]
*/