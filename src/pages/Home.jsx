import React from 'react';
import Layout from "../components/Layout";
import HomeCategory from "../components/HomeCategory";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: []
        }
    }

    render() {
        return (
            <Layout>
                <div className="container-fluid d-flex">
                    <HomeCategory/>
                </div>
            </Layout>
        );
    }
}

export default Home;