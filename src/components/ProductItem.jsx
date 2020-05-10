import React from 'react';
import './ProductItem.css';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {addToCart} from '../redux/actions/cart';

function ProductItem(props) {
    const {id, name, price, currency, image, addToCart} = props;

    return (
        <div className="product-item col-4 d-flex flex-column align-items-center">
            <Link to={`/product/${id}`} className="text-dark d-flex flex-column align-items-center">
                <img src={image} alt="productPhoto" className="mb-2"/>
                <p className="mb-1 text-center">{name}</p>
                <p className="text-center">{price + currency}</p>
            </Link>
            <button className="btn btn-outline-dark"
                    onClick={() => addToCart(
                        {
                            product: {
                                id, name, price, currency, image
                            }
                        }
                    )}
            >
                Add to cart
            </button>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload))
    }
}

export default connect(null, mapDispatchToProps)(ProductItem);