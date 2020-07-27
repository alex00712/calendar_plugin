import {Calendar} from './src/calendar'
import './src/styles.scss'

const C = new Calendar('#calendar', {
    callback(date){
        console.log(date)
    }
})


window.C = C