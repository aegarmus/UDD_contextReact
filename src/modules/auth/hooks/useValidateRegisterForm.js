import { useCallback, useState } from "react"
import { registerRules } from "../utils/validator/registerRules";


export const useValidateRegisterForm = (formData) => {
    const [ errors, setErrors ] = useState({});

    const validateField = useCallback((name, value) => {
        let error = "";

        if(registerRules[name]) {
            error = registerRules[name](value);
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: error
        }))

        return error;
    }, [formData]);

    const validateForm = useCallback(() => {
        const newErrors = {};
        let hasError = false;

        const formProperties = Object.keys(formData)

        formProperties.forEach((property) => {
            const error = validateField(property, formData[property]);
            if(error) {
                newErrors[property] = error;
                hasError = true;
            }
        });

        setErrors(newErrors);
        return hasError;   
    }, [formData, validateField])

    return {
        errors,
        validateField,
        validateForm
    }


}
