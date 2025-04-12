import { ProductCard } from "../components/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts"


export const ProductPage = () => {
    const { productos, loading, error } = useFetchProducts();   
    
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3x1 font-bold mb-6 text-center text-gray-800">
                Nuestros Productos
            </h1>

            { loading && (
                <div className="flex justify-center-items-center-py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            )}

            { error && (
                <div className="bg-red-100 text-red-700 p-4 rounded md text-center mb-6">
                    <p className="font-semibold">Error: {error.message}</p>
                </div>
            )}

            { productos.length === 0 && !loading && !error && (
                <div className="text-center-py-10 text-gray-500">
                    <p className="text-xl font-semibold">No hay productos disponibles</p>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                { productos.map( producto => (
                    <ProductCard key={producto._id} producto={producto} />
                ))}
            </div>
        </div>
    )
}

//Go To Hell length