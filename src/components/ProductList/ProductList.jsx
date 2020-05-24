import React from 'react';
import ProductItem from "../ProductItem/ProductItem";

const ProductList = (props) => {
    const {products} = props;

    return (
            <div className="row my-4">
                {products
                    ? products.map((product) => {
                        return <ProductItem
                            {...product}
                            key={product.id}
                        />
                    })
                    : null
                }
        </div>
    );
}

export default ProductList;