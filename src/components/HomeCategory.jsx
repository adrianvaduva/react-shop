import React from 'react';
import {Link} from 'react-router-dom';

function HomeCategory(props) {
    const {name, description, image, route} = props;
    return (
        <div className="col-12 col-md-6 my-3">
            <Link to={`/category/${route}`} className="text-dark">

                <img className="w-100" src={image} alt={name}/>
                <h1 className="h2 my-2">{name}</h1>
                <p>{description}</p>
            </Link>
        </div>
    );
}

export default HomeCategory;