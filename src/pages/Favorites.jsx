import React from 'react';
import Layout from '../components/Layout';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Cart.css';
import {removeFromFavorites} from '../redux/actions/favorites';
import { ReactComponent as Close } from '../assets/icons/close.svg';

function Favorites(props) {
    return (
        <Layout>
            <div className="cart-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
                {
                    props.products.length
                        ? <div className="w-100">
                            <div className="d-flex justify-content-between text-center h4 text-bold">
                                <p className="w-25">Produs</p>
                                <p className="w-25">Pret</p>
                            </div>
                            {
                                props.products.map(product => {
                                    return <div className="d-flex justify-content-between align-items-center text-center"
                                                key={product.id}>
                                        <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                            <img src={product.image} alt="Produs"/>
                                            <p>{product.name}</p>
                                        </div>
                                        <p className="w-25">{product.price} {product.currency}</p>
                                        <div className="w-25 d-flex justify-content-center">
                                            <div onClick={() => props.removeFromFavorites({id: product.id})}>
                                                <Close/>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        : <div className="d-flex flex-column align-items-center">
                            <p className="h3">Nu exista produse la favorite!</p>
                            <Link to="/">
                                <button className="btn btn-outline-dark">Inapoi la home</button>
                            </Link>
                        </div>
                }
            </div>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        products: state.favorites.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);