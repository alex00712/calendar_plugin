export const template = (day, month, year) => {
 
    const months = [
		'январь', 'февраль', 'март',
		'апрель', 'май', 'июнь',
		'июль', 'август', 'сентябрь',
		'октябрь', 'ноябрь', 'декабрь'
    ];
    
    const drawCalendar = () => {
        let cal = ''
        let step = 0
        for (let i = 0; i < 6; i++){
            let week = new Array()
            for (let j = 0; j < 7; j++){
                let clasS = ''
                let OneDay = new Date(year, month, day+step, 0,0,0,0)
                if (OneDay.getMonth() !== month){
                    clasS = 'disable'
                }
                week.push(`<td data-type="day" data-value = ${JSON.stringify(OneDay)} class = ${clasS}>${OneDay.getDate()}</td>`)
                step++
            }
            cal+=`<tr>${week.join('')}</tr>`
        }
        return cal
    }

    return `
            <div class = 'calendar_closing' ></div>
            <div class = 'calendar_input' data-type = "open_close" >
                <span class = 'calendar_input_current' >
                    26/07/2020
                </span>
                <i class="fa fa-calendar" aria-hidden="true" data-type = "open_close"></i>
            </div>

            <div class = 'calendar_dropdown'>
            <div class = 'calendar_dropdown_nav'>
                <i class="fa fa-caret-left" aria-hidden="true" data-type = "prev"></i>
                <span>${months[month]} ${year}</span>
                <i class="fa fa-caret-right" aria-hidden="true" data-type = "next"></i>
            </div>
            <table class = calendar_dropdown_table >
                <tr>
                    <th>Пн</th>
                    <th>Вт</th>
                    <th>Ср</th>
                    <th>Чв</th>
                    <th>Пт</th>
                    <th>Сб</th>
                    <th>Вс</th>
                </tr>
                ${drawCalendar()}
                
            </table>
        </div>
    `
}