import React from 'react';
/*import {globe,star} from '../../theme/icons';*/
//код выше упрощается до:
import * as Icons from '../theme/icons';

const Icon = ({type,className='', ...rest}) => {
    console.log('Icons',Icons,type);
    const iconJsx=Icons[type]
    if (!iconJsx) {
        return null;
    }
    return (
//передаем все свойства в iconJsx
        //создаем span с классом который передан внутрь
        <span className={`icon icon--type ${className}`}>

            {iconJsx({...rest})}
        </span>
    );
};

export default Icon;