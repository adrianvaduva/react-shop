import React from 'react';
import './ProductItem.css';
import {Link} from 'react-router-dom';

const ProductItem = (props) => {
    const {name, price, currency, image, id} = props;

    return (
        <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
            <Link to={`/product/${id}`} className="text-dark d-flex flex-column align-items-center">
                <img src={image} alt="productPhoto" className="mb-2"/>
                <p className="mb-1 text-center">{name}</p>
                <p className="text-center">{price + currency}</p>
            </Link>
            <button
                className="btn btn-outline-dark"
            >
                Adaugă în coș
            </button>
        </div>
    );
}

export default ProductItem;
