
export const FormField = ({
    id,
    label,
    name,
    type = "text",
    value = "",
    onChange,
    placeholder,
    required = false,
    error = null
}) => {
    return (
        <div className="flex flex-col space-y-1">
            <label htmlFor={id} className="text-gray-700">
                {label}
                {required && "*"}
            </label>
            <input 
                type={type}
                id={id}
                name={name}
                value={value || ""}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={ `border ${
                        error ? "border-red-500" : "border-gray-300"
                    } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`
                }   
            />
            {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>
    )
}