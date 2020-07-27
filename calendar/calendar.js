import {template} from './template.js'

export class Calendar {
    constructor(el, props){
        this.callback = props.callback || null
        this.$el = document.querySelector(el)
        this.year = new Date().getFullYear()
        this.month = new Date().getMonth()
        this.isOpen = false
        this.render(this.setEntryDay(this.year, this.month), this.month, this.year)
        this.settings()
    }

    settings(){
        this.onClick = this.onClick.bind(this)
        this.$el.addEventListener('click', this.onClick)
        this.$closingArea = document.querySelector('.calendar_closing')
        this.close = this.close.bind(this)
        this.$closingArea.addEventListener('click', this.close)
        this.choseDate(new Date())
    }

    render(day, month, year){
        this.$el.innerHTML = template(day, month, year)
       
    }

    setEntryDay(year, month){
        let d = new Date(year, month, 1, 0, 0, 0, 0).getDay()
        let firstDay = new Date(year, month, 1, 0, 0, 0, 0).getDate() - d + (d == 0 ? -6 :  1)
        return firstDay
    }

    choseDate(date){
        let ChoosenDate = new Date(date)
        document.querySelector('.calendar_input_current').textContent = `${ChoosenDate.getDate()}/${ChoosenDate.getMonth()+1}/${ChoosenDate.getFullYear()}`
        this.callback(ChoosenDate)    
    }

    onClick(e){
        const {type} = e.target.dataset
        switch (type) {
            case "open_close":
                if(!this.isOpen){
                    this.open()
                    this.isOpen = !this.isOpen
                }else{
                    this.close()
                    this.isOpen = !this.isOpen
                }
                break;

            case "next": 
                console.log('next')
                this.month++
                if(this.month>=12){
                    this.month = 0
                    this.year++
                }
                this.render(this.setEntryDay(this.year, this.month), this.month, this.year)
                break;

            case "prev": 
                this.month--
                if(this.month<0){
                    this.month = 11
                    this.year--
                }
                this.render(this.setEntryDay(this.year, this.month), this.month, this.year)
                break;

            case "day": 
                this.choseDate(e.target.dataset.value)
                break;

            default:
                break;
        }
    }

    open(){
        this.$el.classList.add('open')
    }
    close(){
        this.$el.classList.remove('open')
    }

}