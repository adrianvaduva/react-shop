import React from 'react';
import Layout from '../components/Layout';
import {connect} from 'react-redux';

function Cart(props) {
    const {cartProducts} = props;
    return (
        <Layout>
            <div className="container-fluid container-min-max-width">
                {
                    cartProducts.map(cartProduct => {
                        return (<div className="d-flex">
                            <p>{cartProduct.name}</p>
                            <p>{cartProduct.price}{cartProduct.currency}</p>
                        </div>)
                    })
                }
            </div>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        cartProducts: state.products
    }
}

export default connect(mapStateToProps)(Cart);