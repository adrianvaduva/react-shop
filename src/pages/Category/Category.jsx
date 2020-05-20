import React from 'react';
import Layout from '../../components/Layout/Layout';
import products from '../../utils/products.json'
import ProductList from "../../components/ProductList/ProductList";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {},
            items: [],
        }
    }

    componentDidMount() {
        const {match} = this.props;
        const categoryName = match.params.categoryName;
        this.setState({
            category: products[categoryName],
            items: products[categoryName].items,
        });
    }

    render() {
        return (
            <Layout>
                <div className="content-min-height container-fluid container-min-max-width">
                    <h2>{this.state.category.name}</h2>
                    <div className="row">
                        <ProductList products={this.state.items}/>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Category;