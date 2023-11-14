import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
//Styles
import { Image } from './Thumb.styles';
// `` is a template literal
const Thumb = ({ image, movieId, clickable }) => (
    <div>
        {clickable ? ( // if clickable is true
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumb' />
            </Link>


        ) : (
            <Image src={image} alt='movie-thumb' />
        )}

    </div>
)

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool
};

export default Thumb;