import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import {ReactComponent as ShoppingCart} from '../assets/icons/shopping-cart.svg';
import './Header.css';
import {connect} from 'react-redux';


function Header(props) {
    const {numberOfProducts} = props;
    return (
        <header className="border-bottom mb-3">
            <div className="container-fluid container-min-max-width
                            d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    <img src={Logo} alt="Sirluggia Shop" className="logo"/>
                </Link>
                <div>
                    <div className="d-flex justify-content-end">
                        <Link to="/cart">
                            <ShoppingCart className="ml-2"/>
                        </Link>
                        <p>{numberOfProducts}</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.products.length
    };
}

export default connect(mapStateToProps)(Header);