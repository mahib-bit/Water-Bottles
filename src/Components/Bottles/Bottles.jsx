import 'react';
import { use } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { useState } from 'react';

const Bottles = ({ bottlesPromise }) => {
    const bottles = use(bottlesPromise);

    const [cart, setCart] = useState([]);
    const handleCart = (bottle) => {
        console.log(`Bottle is added to cart!!`, bottle)
    }

    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
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