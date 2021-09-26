import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    const { image, first_name, last_name, designation, salary } = props.cartItem;
    return (
        <div className="d-flex pt-3 justify-content-between">
            <div className="w-25 pe-3">
                <img className="img-fluid" src={image} alt="" />
            </div>
            <div>
                <p className="my-auto text-success">{first_name} {last_name}</p>
                <p className="text-muted text-center"><small>{designation}</small></p>
            </div>
            <div>
                <p className="fw-bold text-dark">${salary}</p>
            </div>

        </div>
    );
};

export default CartItem;