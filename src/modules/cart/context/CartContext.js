import { create } from "zustand";
import { persist } from "zustand/middleware";
import { formatCartProducts } from "../../products/utils/formatCartProduct";

const useCartContext = create(
    persist(
        (set, get) => ({
            products: [],
            totalItems: 0,
            totalPrice: 0,

            addItem: (product) => {
                const products = get().products;
                const existingProduct = products.find((item) => item._id === product._id);

                if(existingProduct) {
                    const updateProduct = products.map((product) => product._id === existingProduct._id 
                        ? { ...product, quantity: product.quantity + 1}
                        : product
                    )


                    set((state) => ({
                        products: updateProduct,
                        totalItems: state.totalItems + 1,
                        totalPrice: state.totalPrice + product.precio

                    }));                  
                } else {
                    const productWithQuantity = { ...product, quantity: 1 };
         

                    set((state) => ({
                        products: [...state.products, productWithQuantity],
                        totalItems: state.totalItems + 1,
                        totalPrice: state.totalPrice + product.precio
                    }))
                }
            },
            removeOneItem: (productID) => {
                const products = get().products;
                /*  const productsSorted = [ ...products ].sort(() => {}) */
                const existingProduct = products.find(
                  (product) => product._id === productID
                );

                if (!existingProduct) return;

                if(existingProduct.quantity === 1) {
                    set((state) => ({
                        products: state.products.filter((product) => product._id !== productID),
                        totalItems: state.totalItems - 1,
                        totalPrice: state.totalPrice - existingProduct.precio
                    }))
                } else {
                    const updatedProducts = products.map((product) =>
                        product._id === productID ? { ...product, quantity: product.quantity - 1 } : product
                    )

                    set((state) => ({
                        products: updatedProducts,
                        totalItems: state.totalItems - 1,
                        totalPrice: state.totalPrice - existingProduct.precio
                    }))
                }
            },
            removeItem: (productID) => {
                const products = get().products;
               /*  const productsSorted = [ ...products ].sort(() => {}) */
                const existingProduct = products.find(product => product._id === productID);

                if(!existingProduct) return;

                const [ updatedProducts, totalItemsUpdated, totalPriceUpdated ] = formatCartProducts(products, productID);               

                set(() => ({
                    products: updatedProducts,
                    totalItems: totalItemsUpdated,
                    totalPrice: totalPriceUpdated
                }))
            },
            clearCart: () => {
                set(() => ({
                    products: [],
                    totalItems: 0,
                    totalPrice: 0
                }))
            }
        }),
        {
            name: "cart-storage", //Nombre para la persistencia en el localStorage
            getStorage: () => localStorage, //Usar el localStorage para guardar los datos

        } 
    )
)

export default useCartContext

/*
    {
        Toda la info del producto
        Quantity: 1
    }
*/


/*
Metodos de Array
 1. Los que mutan el arreglo original
    
    - push
    - pop
    - shift
    - unshift
    - splice
    - sort
    - reverse

    const array = [1,2,3,4,5]
    array.push(6) // [1,2,3,4,5,6]

    array => [1,2,3,4,5,6] -> Aquí no hay cambio de referencia

 2 . Los que no mutan el arreglo original

    - map
    - filter   
    - reduce
    - find
    - every
    - some
    - includes
    - indexOf
    - slice
    - concat
    - forEach
    - flat
    - toSorted() => Lo mismo que sort pero devuelve un nuevo arreglo y no muta el original
    -toReversed()

    estos metodos devuelven un nuevo arreglo y no mutan el original
    const array = [1,2,3,4,5]
    const newArray = array.map((item) => item * 2) // [2,4,6,8,10]
    array => [1,2,3,4,5] -> Aquí hay cambio de referencia
    newArray => [2,4,6,8,10] -> Aquí no hay cambio de referencia


Que esto de la referencia

 Cuando tenemos un objeto, los valores primetivos se almacenan en la pila y los objetos en el heap. Ubicado en la RAM
 El puntero de referencia o simplemente referencia es un valor que apunta a la dirección de memoria donde se encuentran los valores primitvos de un objeto.

 Los Arrays son Objetos en el mundo de JavaScript, por lo que cuando hacemos una copia de un array, en realidad estamos copiando la referencia a ese array y no el array en sí.



Como diablos afecta a React
-> React  reacciona a los cambios de estado, y para detectar los cambios de estado, verifica las referencias nen los datos
*/


/* 
 Método Reduce -> Convierte un arreglo en un unico valor - Sin alterar el arreglo original

    const array = [ 1,2,3,4,5]

    const total = array.reduce( (acumulador, numero, index) => {

            numero * acumulador
            console.log(acumulador, numero, index)
        }, 1)


    const arrayMaped = array.map((numero, index) => )
*/