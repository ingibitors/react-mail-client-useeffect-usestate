import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header=({title="Default title"})=> {

        return (
            <div>
                <h3>Header</h3>
                <h2>{title} </h2>
            </div>


        )

}

Header.propTypes = {
    title: PropTypes.string
}
//если мы не передаем в App то будет дефолтное значение:
Header.defaultProps={
    title:"Default Title"
}
export default Header;