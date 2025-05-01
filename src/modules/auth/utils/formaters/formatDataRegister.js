

export const formatDataRegister = (formData) => {
    const formDataToSend = new FormData();

    const fieldsToExclude = ["confirmPassword", "imagen"];

    Object.entries(formData).forEach(([key, value]) => {
      if (
        !fieldsToExclude.includes(key) &&
        value !== null &&
        value !== undefined
      ) {
        formDataToSend.append(key, value);
      }
    });
    
    
    if (formData.imagen instanceof File) {
      formDataToSend.append("file", formData.imagen);
    }

    return formDataToSend;
}