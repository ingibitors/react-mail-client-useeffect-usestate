import React, {useState,useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Inbox from "./components/Inbox/Inbox";
import axios from "axios";
import Loader from "./components/Loader/Loader";


/*state = {
    title: 'Mail Client',
    emails: [],
    isLoading: true,//переменная, которая показывает что загрузка с сервера выполнена
}

componentDidMount() {
    setTimeout(() =>{
        axios('/emails.json')
            .then(res => {
                console.log(res)
                this.setState({emails: res.data,isLoading:false})
            })
    },1500)

    /!*fetch('/emails.json')
        .then(res=>res.json())
        .then(res=>)*!/
}*/


const App = () => {
//первая переменная само значение и 2 переменная функция по ее изменению как setter
    //изначальное значение указывается в useState()
    //ниже текст с useState тоже самое, что :
    //state = {
    //     emails: [],
    //     isLoading: true,//переменная, которая показывает что загрузка с сервера выполнена
    // }
    const [emails, setEmails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    /*const { emails, isLoading} = this.state*/
    //вызывается каждый раз после рендера
    useEffect(() => {
        console.log('Executed after each render');
        setTimeout(() => {
            axios('/emails.json')
                .then(res => {
                    setEmails(res.data);
                    setIsLoading(false);
                   /*текст выше вместо this.setState({emails: res.data, isLoading: false})*/
                })
        }, 1500)

    },[]);
//импортируем (передаем) компоненту  методы и объект user из state и emails
    return (
        <div className="App">
            <Header/>
            {/*{emails.length === 0 && <Loader/>}*/}
            {isLoading && <Loader/>}
            {/*компонент inbox не показываем когда идет загрузка(You don`t have any emails не показывается, если мы уберем !isLoading && то он будет постоянно показываться)*/}
            {/*{!isLoading && <Inbox emails={emails}/>}*/}
            {<Inbox emails={emails}/>}
            <Footer/>

            {/* <Test IncrementAge={this.IncrementAge} updateTitle={this.updateTitle} user={user} emails={emails}/>*/}
        </div>
    );
}


export default App;
