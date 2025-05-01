

export const formatCartProducts = (products, productID) => {
    const filteredProduct = products.filter((product) => product.id !== productID);
    const totalItemsUpdated = products.reduce((acc, product) => acc + product.quantity, 0);
    const totalPriceUpdated = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return [ filteredProduct, totalItemsUpdated, totalPriceUpdated ];
}