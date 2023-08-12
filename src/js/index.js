const buttonSwitch = document.querySelector(".billing__options__switch");
const optionYearly = document.querySelector("#option-yearly");
const optionMonthly = document.querySelector("#option-monthly");

buttonSwitch.addEventListener("click", () => {    
    let yearlySelected = buttonSwitch.firstElementChild.classList.contains("bullet--yearly");
    let monthlySelected = buttonSwitch.firstElementChild.classList.contains("bullet--monthly");

    if (yearlySelected) {
        buttonSwitch.firstElementChild.classList.remove("bullet--yearly");
        buttonSwitch.firstElementChild.classList.add("bullet--monthly");
        optionMonthly.checked = true;

        console.log("Yearly: ", optionYearly.checked);
        console.log("Monthly: ", optionMonthly.checked);
    }
    
    if (monthlySelected) {
        buttonSwitch.firstElementChild.classList.remove("bullet--monthly");
        buttonSwitch.firstElementChild.classList.add("bullet--yearly");
        optionYearly.checked = true;

        console.log("Yearly: ", optionYearly.checked);
        console.log("Monthly: ", optionMonthly.checked);
    }
});
