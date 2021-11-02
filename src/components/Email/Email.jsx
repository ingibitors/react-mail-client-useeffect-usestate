import React from 'react';
import './Email.css';
import PropTypes from 'prop-types';

import Globe from "../theme/icons/globe";
import Icon from "../Icon/Icon";

const Email=({email})=>{
/*class Email extends Component {*/
    /*render() {*/
        //получаем email и выводим topic из объекта
        /*const {email} = props;
*/
        return (
            <li className="email">
                today we have buy {email.topic} with price:
                {email.head} UAH
                {email.title}
               {/* <Star color='red' filled='purple'/>
                <Star color='black' filled='blue'/>
                <Star color='orange' filled='red'/>*/}
               <Globe/>

               <Icon type='star' className='icon-star'/>
               <Icon type='star' color='green' className='icon-star2'/>
               <Icon type='global' className='icon-global'/>
            </li>);

}
//PropTypes
//установка: npm i prop-types
//это проаверка типов данных, которые мы хотим получить
    //string,booolean,array,symbol,number,function
//isRequired

//proptypes проще всего писать в виде Email.propTypes = {} передавая объект с конфигурацией
// можем еще static propTypes={}, но єто работает только в классовых компонентах а вариант Email.propTypes = {} работает как в классовом так и функциональном компоненте
//импортируем большой объект PropTypes
     Email.propTypes = {
        /*email: PropTypes.string.isRequired,*/
        /*title: PropTypes.string.isRequired,*/
         email: PropTypes.shape({
             id:PropTypes.number,
                 topic:PropTypes.string
}).isRequired,
    }

/*
Email.propTypes = {
/!*email: PropTypes.string.isRequired,*!/
/!*title: PropTypes.string.isRequired,*!/
email: PropTypes.exact({
    id:PropTypes.number.isRequired,
    topic:PropTypes.string.isRequired,
    body: PropTypes.string
}).isRequired,
}*/

//возможные функции:
//instanceOf, oneOf([1,2,3]), oneOfType([]), arrayOf//массив конкретных значений, shape,exact

export default Email;