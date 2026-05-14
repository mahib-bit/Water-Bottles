const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('Cart');

    if (storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    else {
        return [];
    } 
}

const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('Cart', cartStringified);
}

const addItemToCartInLocalStorage = id => {
   const cart = getCartFromLocalStorage();
   const newCart = [...cart, id];
   saveCartToLocalStorage(newCart);
}

export { getCartFromLocalStorage as getStoredCart, 
    addItemToCartInLocalStorage as addToStoredCart };