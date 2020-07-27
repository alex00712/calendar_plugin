import {Calendar} from './calendar/calendar'
import './calendar/styles.scss'

const C = new Calendar('#calendar', {
    callback(date){
        console.log(date)
    }
})


window.C = C