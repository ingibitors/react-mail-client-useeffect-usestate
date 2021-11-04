import React, {useState,useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Inbox from "./components/Inbox/Inbox";
import axios from "axios";
import Loader from "./components/Loader/Loader";

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
            //запрос за данными на сервер или на файл:
            //если на файл то: '/emails.json'
            //на сервер http://localhost:8000/api/emails
            //и 3 вариант который решает ошибко с CORS єто когда остальная часть адреса указана в package.json:
            // ,"proxy": "http://localhost:8000" - написано в конце package.json
            //если указать как ниже, то запрос в первую очередь пойдет на тот сервер, на котором мы сейчас находимся, т.е. на http://localhost:3000/api/emails, если же там его (/api/emails) нет-
            // то тогда наш backend http://localhost:3000 попробует отправить запрос на прокси сервер по адресу http://localhost:8000 и там его найти:

            axios('/api/emails')
                .then(res => {
                    setEmails(res.data);
                    setIsLoading(false);
                   /*текст выше вместо this.setState({emails: res.data, isLoading: false})*/
                })
        }, 1500)
        //return для размонтирования компонента, но App не розмонтируется, так как єто основной компонент
return ()=>{
    console.log('return on useEffect')
}

    },[]);
    // если нужно что бы вызвалось не каждый раз то тогда в конце нужно добавить массив завсисмостей
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
