import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = (props) => {

    const { cart } = props;
    let total = 0;
    if (cart.length) {
        total = cart.reduce((prev, current) => prev + current.salary, 0);
    }
    return (
        <div className="bg-warning rounded mt-5 px-3 sticky-top">
            <p className="text-center pt-3 text-dark fw-bold fs-5 text">Employee Hired: <span className="text-danger">{cart.length}</span></p>
            {
                cart.map(cartItem =>
                    <CartItem
                        key={cartItem.key}
                        cartItem={cartItem}
                    />)
            }
            <hr />
            <div className="d-flex justify-content-between pb-3 px-2">
                <h6>Total</h6>
                <h6 className="text-muted fw-bold">$<span className="text-danger fw-bold">{total}</span></h6>
            </div>

        </div>
    );
};

export default Cart;