import { useRef, useState } from "react";
import previewSvg from '../../assets/preview.svg';

export const ImageUploader = ({ onChange, error }) => {
    const [ preview, setPreview ] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if(file) {
            const  objectUrl = URL.createObjectURL(file)
            setPreview( objectUrl);

            onChange({
                target: {
                    name: "imagen",
                    value: file
                }
            });
        }
    };

    const handleClick = () => {
        fileInputRef.current.click()
    }

    return (
        <div className="flex flex-col space-y-2">
            <label className="text-gray-700">Imange de Perfil</label>
            <div 
                className={`border-2 border-dashed ${
                    error ? "border-red-500" : "border-gray-300"
                    } rounded- lg p-4 text-center cursor-pointer hover:bg-gray-50 transition duration-200 ease-in-out`}
                onClick={handleClick}
            >
                {
                    preview ? (
                        <div className="flex flex-col items-center">
                            <img 
                                src={preview} 
                                alt="Imagen para el preview"
                                className="w-32 h-32 object-cover rounded-full mb-2"    
                            />
                            <p className="text-sm text-blue-600">Cambiar Imagen</p>
                        </div>
                    ) : (
                        <div className="py-4">
                            <img 
                                src={previewSvg} 
                                alt="preview default" 
                                className="mx-auto w-16 h-16 text-gray-400 mb-2"    
                            />
                            <p className="mt-1 text-sm text-gray-600">
                                Haz Click para seleccionar una imagen
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                PNG, JPG o JPEG max hasta 2MB
                            </p>
                        </div>
                    )
                }

                <input 
                    ref={fileInputRef}
                    type="file" 
                    accept='image/*'
                    onChange={handleFileChange}
                    className="hidden"
                />

                {error && <p className="text-red-500 text-xs">{error}</p>}
            </div>
        </div>
    )

}