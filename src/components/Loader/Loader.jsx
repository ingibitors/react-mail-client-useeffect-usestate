import React, {useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner'


const Loader=()=> {
    useEffect(()=> {
        console.log("Mounted loader")
//return для размонтирования компонента,
    return() =>{
        console.log("UnMounting loader...")
    }
},[]);

        return  (
            <div className="loader">
                <Spinner animation="grow" />
            </div>
        );
    }


export default Loader;