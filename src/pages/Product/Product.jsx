import React from 'react';
import Layout from '../../components/Layout/Layout';
import products from '../../utils/products.json';
import './Product.css';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/cart/CartActions';
import {addToFavorites, removeFromFavorites} from "../../redux/favorites/FavoritesActions";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        const {match} = this.props;
        const productId = match.params.productId;
        const categoryValues = Object.values(products);
        const productItems = categoryValues.reduce((accumulator, category) => {
            return [
                ...accumulator,
                ...category.items
            ]
        }, []);
        const currentProduct = productItems.find(product => {
            return Number(productId) === product.id;
        });
        this.setState({product: currentProduct});
    }

    render() {
        const {product} = this.state;
        const {favoriteProducts, addToCart, addToFavorites, removeFromFavorites} = this.props;
        const existsInFavorites = favoriteProducts.find(product => product.id === product.id);

        return (
            <Layout>
                <div className="product-page container-fluid container-min-max-width">
                    <h1 className="my-5 h2">{product.name}</h1>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img src={product.image} alt="Product presentation"/>
                        </div>
                        <div className="product-details">
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                            <button
                                className="btn btn-outline-dark mb-4 mr-2"
                                onClick={() => {
                                    addToCart({
                                        product: {
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            currency: product.currency,
                                            image: product.image
                                        }
                                    })
                                }}
                            >
                                Adauga in cos
                            </button>
                            {existsInFavorites ?
                                <button className="btn btn-dark mb-4"
                                        onClick={() => removeFromFavorites(
                                            {id: product.id}
                                        )}
                                >
                                    Sterge de la favorite
                                </button>
                                : <button className="btn btn-outline-dark mb-4"
                                          onClick={() => addToFavorites(
                                              {
                                                  product: {
                                                      id: product.id,
                                                      name: product.name,
                                                      price: product.price,
                                                      currency: product.currency,
                                                      image: product.image
                                                  }
                                              }
                                          )}
                                >
                                    Adauga la favorite
                                </button>}
                            <p><span className="font-weight-bold">Mărime</span>: {product.size}</p>
                            <p><span className="font-weight-bold">Culoare</span>: {product.colour}</p>
                            <p><span className="font-weight-bold">Material</span>: {product.material}</p>
                            <p><span className="font-weight-bold">Brand</span>: {product.brand}</p>
                            <p className="font-weight-bold mb-1">Descriere:</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);