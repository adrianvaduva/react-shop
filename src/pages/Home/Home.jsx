import React from 'react';
import Layout from "../../components/Layout/Layout";
import products from "../../utils/products.json"
import '../../utils/utility-classes.css'
import HomeCategory from "../../components/HomeCategory/HomeCategory";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        this.setState({
            categories: Object.keys(products)
        })
    }

    render() {
        return (
            <Layout>
                <div className="container-fluid container-min-max-width">
                    <div className="row">
                        {this.state.categories.map((category, index) => {
                            return <HomeCategory
                                key={index}
                                name={products[category].name}
                                description={products[category].description}
                                image={products[category].image}
                                route={category}
                            />
                        })}
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Home;