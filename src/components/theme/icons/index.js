//все иконки собираем вместе и экспортируем в виде одного большого объекта
//export from -это сквозной экспорт когда мы мортируя сразу экспортируем
export {star} from './star'
export {default as globe} from './globe'

//тоже самое что :
/*
import {star} from './star';
import globe from './globe';

export default {
    star,globe
}
*/
