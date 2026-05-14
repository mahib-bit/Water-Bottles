import { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { addToStoredCart, getStoredCart } from '../../utilities/localStorage';

const Bottles = ({ bottlesPromise }) => {
    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        let mounted = true;
        bottlesPromise
            .then(data => {
                if (mounted) setBottles(data);
            })
            .catch(() => {
                if (mounted) setBottles([]);
            });
        return () => { mounted = false };
    }, [bottlesPromise]);

    const [cart, setCart] = useState([]);

    // Hydrate cart from stored ids once bottles are loaded
    useEffect(() => {
        const storedCartIds = getStoredCart();
        if (!storedCartIds || storedCartIds.length === 0 || bottles.length === 0) return;

        const storedCart = [];
        for (const id of storedCartIds) {
            const cartBottle = bottles.find(b => b.id === id);
            if (cartBottle) storedCart.push(cartBottle);
        }
        setCart(storedCart);
    }, [bottles]);

    const handleCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToStoredCart(bottle.id);
    };

   

    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
            <p>Cart Items: {cart.length}</p>
            <div className="grid">  
                {bottles.map(bottle => (
                    <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleCart={handleCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default Bottles;