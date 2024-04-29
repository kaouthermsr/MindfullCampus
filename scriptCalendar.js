const calendar = document.querySelector(".calendar")
const date = document.querySelector(".date")
const daysContainer = document.querySelector(".days")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

const todayBtn = document.querySelector(".today-btn")
const gotoBtn = document.querySelector(".goto-btn")
const dateInput = document.querySelector(".date-input")

const eventDay = document.querySelector(".event-day")
const eventDate = document.querySelector(".event-date")


const textArea = document.querySelector(".textarea")
const addBtn = document.querySelector(".add-btn")

let today = new Date()
let activeDay
let month = today.getMonth()
let year = today.getFullYear()

const months = [
    "january",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]


const eventsArr = [
    {
        day: 24,
        month: 4,
        year: 2024,
        text: "hello good day today"
    },
    {
        day: 22,
        month: 4,
        year: 2024,
        text: "bad day"
    }
]


//function to add days

function initCalendar(){
    const firstDay = new Date(year, month, 1)
    
    const lastDay = new Date(year, month + 1, 0)
    
    const prevLastDay = new Date(year, month, 0)
    
    const prevDays = prevLastDay.getDate()
    const lastDate = lastDay.getDate()
    const day = firstDay.getDay()
   
    const nextDays = 7 - lastDay.getDay() - 1

    date.innerHTML = months[month] + " " + year

    let days = ""

    for(let x = day; x > 0; x--){
        days += `<div class="day prev-date">${prevDays - x + 1}</div>`
    }

    for(let i = 1; i <= lastDate; i++){

        let event = false
        
        eventsArr.forEach((eventObj)=>{
            if(eventObj.day == i && eventObj.month == month + 1 && eventObj.year == year)
                event = true
        })
    

        if(i === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth()){
            activeDay = i
            getActiveDay(i)

            updateEvents(i)

            if(event)
                days += `<div class="day today event active">${i}</div>`
            else
                days += `<div class="day today active">${i}</div>`
    
        }else{
            if(event)
                days += `<div class="day event">${i}</div>`
            else
                days += `<div class="day">${i}</div>`
        }
    }

    for(let j = 1; j <= nextDays; j++){
        days += `<div class="day next-date">${j}</div>`
    }

    daysContainer.innerHTML = days

    addListner()
}

initCalendar()

function prevMonth(){
    month--
    if(month < 0 ){
        month = 11
        year-- 
    }
    initCalendar()
}

function nextMonth(){
    month++
    if(month > 11 ){
        month = 0
        year++
    }
    initCalendar()
}


prev.addEventListener("click", prevMonth)
next.addEventListener("click", nextMonth)


todayBtn.addEventListener("click", () => {
    today = new Date()
    month = today.getMonth()
    year = today.getFullYear()
    initCalendar()
})

dateInput.addEventListener("input", (e) => {
    dateInput.value = dateInput.value.replace(/[^0-9/]/g,"")
    
    if(dateInput.value.length === 2){
        dateInput.value += "/"
    }

    if(dateInput.value.length > 7) {
        dateInput.value = dateInput.value.slice(0, 7)
    }

    if(e.inputType === "deleteContentBackward"){
        if(dateInput.value.length === 3){
            dateInput.value = dateInput.value.slice(0, 2)
        }
    }
})

gotoBtn.addEventListener("click", () => {
    const dateArr = dateInput.value.split("/")
    
    if(dateArr.length === 2){
        if(dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4){
            month = dateArr[0] - 1
            year = dateArr[1]
            initCalendar()
            return;
        }
    }
})





function addListner(){
    const days = document.querySelectorAll(".day")
    days.forEach((day) => {
        day.addEventListener("click", (e) => {
            
            activeDay = Number(e.target.innerHTML)

            getActiveDay(e.target.innerHTML)
            updateEvents(Number(e.target.innerHTML))

            days.forEach((day) => {
                day.classList.remove("active")
            })

            if(e.target.classList.contains("prev-date")){
                prevMonth()

                setTimeout(() => {
                    const days = document.querySelectorAll(".day")
                    days.forEach((day) => {
                        if(!day.classList.contains("prev-date") && day.innerHTML === e.target.innerHTML){
                            day.classList.add("active")
                        }

                    })
                }, 100)
            } else if(e.target.classList.contains("next-date")){
                nextMonth()

                setTimeout(() => {
                    const days = document.querySelectorAll(".day")
                    days.forEach((day) => {
                        if(!day.classList.contains("next-date") && day.innerHTML === e.target.innerHTML){
                            day.classList.add("active")
                        }

                    })
                }, 100)
            } else {
                e.target.classList.add("active")
            }

        })
    })
}


function getActiveDay(date) {
    const day = new Date(year, month, date)
    const dayName = day.toString().split(" ")[0]  
    eventDay.innerHTML = dayName
    eventDate.innerHTML = date +  " " + months[month] + " " + year
}

function updateEvents(date){
    let text = ""
    eventsArr.forEach((event) => {
        if (date === event.day && month + 1 === event.month && year === event.year){
            text = event.text
        }
    })

    textArea.value = text
}

addBtn.addEventListener("click", () => {
    let eventAdded = false
    if(eventsArr.length > 0){
        eventsArr.forEach((e) => {
            if(e.day === activeDay && e.month === month + 1 && e.year === year)
                eventAdded = ture
        })
    }

    if(!eventAdded) {
        eventsArr.push({
            day: activeDay,
            month: month + 1,
            year: year,
            text: textArea.value
        })
    }

    if(!document.querySelector(".day.active").classList.contains("event")){
        document.querySelector(".day.active").classList.add("event")
    }
})

// textArea.addEventListener("input", () => {
//     if(textArea.value === ""){
//         document.querySelector(".day.active").classList.remove("event")
//     }
// })