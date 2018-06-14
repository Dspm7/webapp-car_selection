const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
    car('Ford', 'Mondeo', 'Максим', '2016', '+7 929 132 45 67','img/mondeo.png'),
    car('Ford', 'Focus', 'Владимир', '2018', '+7 916 564 74 57','img/focus.png'),
    car('Porsche', 'Panamera', 'Ирина', '2015', '+7 917 512 45 17','img/panamera.png')
]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs:[],
        selectCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility:false
    },
    methods: {
        selectCar(index) {
        this.car = cars[index]
        this.selectCarIndex = index
        },
        newOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Успешная покупка: ${this.car.name} - ${this.car.model}`, 'Успешная покупка')
            )
        },
        cancelOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Отмена покупки: ${this.car.name} - ${this.car.model}`, 'Отмена покупки')
            )
        }
    },
    computed:{
        phoneBtnText() {
            return this.phoneVisibility ? 'Спрятать телефон' : 'Показать телефон'
        }
    ,
    filteresCars(){
        return this.cars.filter(car => {
            return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
        })
    }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }
})
