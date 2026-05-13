import 'react';
import { use } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';

const Bottles = ({ bottlesPromise }) => {
    const bottles = use(bottlesPromise);
    // console.log(bottles)

    return (
        <div>
            <h3>Bottles : {bottles.length}</h3>
            <div className="grid">  
                {bottles.map(bottle => (
                    <Bottle
                        key={bottle.id}
                        bottle={bottle}
                    />
                ))}
            </div>
        </div>
    );
};

export default Bottles;