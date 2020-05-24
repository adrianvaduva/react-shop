import React from 'react';
import {Link} from 'react-router-dom';

function HomeCategory(props) {
    const {name, description, image, route} = props;
    return (
        <div className="col-12 col-md-6 my-3">
            <Link to={`/category/${route}`} className="text-dark">

                <img className="w-100" src={image} alt={name}/>
                <h2 className="h4 my-1"><strong>{name}</strong></h2>
                <p className="m-0">{description}</p>
            </Link>
        </div>
    );
}

export default HomeCategory;