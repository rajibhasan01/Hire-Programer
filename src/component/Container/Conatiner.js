import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Container.css';
import Developer from '../Developer/Developer';

const Conatiner = () => {
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setDevelopers(data));
    }, []);

    const handleHire = (developer) => {
        if (cart.includes(developer)) {
            return;
        }
        const newCart = [...cart, developer];
        setCart(newCart);
    }

    return (
        <div className="container mt-3">
            <div className="d-flex d-flex justify-content-evenly">
                <div>
                    <p className="text-warning text-center fw-bold">Programer Type</p>
                    <input type="text" className="rounded border-0" />
                </div>
                <div>
                    <p className="text-warning text-center fw-bold">Country</p>
                    <input type="text" className="rounded border-0" />
                </div>
                <div>
                    <p className="text-warning text-center fw-bold">Salary Range</p>
                    <input type="range" />
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-9">
                    <div className="row g-2">
                        {
                            developers.map(developer => <Developer
                                key={developer.key}
                                developer={developer}
                                handleHire={handleHire}
                            />)
                        }
                    </div>

                </div>
                <div className="col-3 mt-3">
                    <Cart cart={cart} />
                </div>
            </div>


        </div>
    );
};

export default Conatiner;