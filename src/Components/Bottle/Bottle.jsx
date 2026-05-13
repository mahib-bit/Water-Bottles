import 'react';
import './Bottle.css';

const Bottle = ({ bottle , handleCart }) => {

    return (
        <div className="card">
            <img src={bottle.img} alt="" />
            <h4>Name : {bottle.name}</h4>
            <p>Price : ${bottle.price.toFixed(2)} Rating : {bottle.ratings} *</p>
            <p>Remaining : {bottle.stock}</p>
            <button onClick={() => handleCart(bottle)}>Add to Cart</button>
        </div>
    );
};

export default Bottle;