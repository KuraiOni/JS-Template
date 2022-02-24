// Icons
let icon = document.querySelectorAll(".icons");

// Apply and delete the active class on icons
icon.forEach(function (ele) {
    ele.onclick = function () {
        icon.forEach(function (ele) {
            ele.classList.remove("active");
        })
        this.classList.add("active")
    }
})

 const d = new Date();

const renderCalender = () => {
    // array of months
    const months = ["Jan","Feb","March","April","May","June","July","August","September","October","November","December"];

    // now date
    let nowDate = document.querySelector(".now");

    // get the month's days
    const days = new Date(d.getFullYear(),d.getMonth()+1, 0).getDate();
    // get the previous month's days
    const prevLastDays = new Date(d.getFullYear(),d.getMonth(), 0).getDate();
    // get the index of the final day
    const lastDayIndex = new Date(d.getFullYear(),d.getMonth()+1, 0).getDay();
    // calc the number of days printed from the next month
    const nextDays = 7 - lastDayIndex - 1;

    d.setDate(1);
    let firstDayIndex = d.getDay();

    nowDate.innerHTML= `${months[d.getMonth()]} ${d.getFullYear()}`

    // get the days div
    let divNums = document.querySelector(".numbers");

    let dayNum = "";

    for (let x = firstDayIndex; x > 0; x--) {
        dayNum += `<div class="prev-date">${prevLastDays - x + 1}</div>`;
        divNums.innerHTML = dayNum;
    }


    for (let i = 1; i <= days; i++) {
        if (i === new Date().getDate() && d.getMonth() === new Date().getMonth()) {
            dayNum += `<div class="today">${i}</div>`
        } else {
            dayNum += `<div>${i}</div>`
        }
    }

    for (let j = 1 ; j <= nextDays; j++) {
        dayNum += `<div class="next-date">${j}</div>`;
        divNums.innerHTML = dayNum;
    }
};


document.querySelector(".less").addEventListener("click", () => {
    d.setMonth(d.getMonth() - 1);
    renderCalender();
});

document.querySelector(".greater").addEventListener("click", () => {
    d.setMonth(d.getMonth() + 1);
    renderCalender();
});

renderCalender();