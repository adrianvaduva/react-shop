import React from 'react';
import './ProductItem.css';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {addToCart} from '../redux/actions/cart';
import {addToFavorites, removeFromFavorites} from "../redux/actions/favorites";

function ProductItem(props) {
    const {id, name, price, currency, image, addToCart, addToFavorites, favoriteProducts, removeFromFavorites} = props;
    console.log(favoriteProducts)

    const existsInFavorites = favoriteProducts.find(product => product.id === id);

    return (
        <div className="product-item col-4 d-flex flex-column align-items-center">
            <Link to={`/product/${id}`} className="text-dark d-flex flex-column align-items-center">
                <img src={image} alt="productPhoto" className="mb-2"/>
                <p className="mb-1 text-center">{name}</p>
                <p className="text-center">{price + currency}</p>
            </Link>
            <button className="btn btn-outline-dark mb-2"
                    onClick={() => addToCart(
                        {
                            product: {id, name, price, currency, image}
                        }
                    )}
            >
                Add to cart
            </button>
            {existsInFavorites ?
                <button className="btn btn-outline-dark"
                        onClick={() => removeFromFavorites(
                            {id: id}
                        )}
                >
                    Remove from Favorites
                </button>
                : <button className="btn btn-outline-dark"
                          onClick={() => addToFavorites(
                              {
                                  product: {id, name, price, currency, image}
                              }
                          )}
                >
                    Add to Favorites
                </button>}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        favoriteProducts: state.favorites.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavorites: (payload) => dispatch(addToFavorites(payload)),
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);