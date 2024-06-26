const button1 = document.querySelector("#ac1")
const button2 = document.querySelector("#ac2")
const button3 = document.querySelector("#ac3")
const button4 = document.querySelector("#ac4")

const accordion1 = document.querySelector("#accordion_1")
const accordion2 = document.querySelector("#accordion_2")
const accordion3 = document.querySelector("#accordion_3")
const accordion4 = document.querySelector("#accordion_4")

const param1 = document.querySelector("#info_1")
const param2 = document.querySelector("#info_2")
const param3 = document.querySelector("#info_3")
const param4 = document.querySelector("#info_4")

const buttonArray = [button1, button2, button3, button4]
const accordion = [accordion1, accordion2, accordion3, accordion4]
const paramArray = [param1, param2, param3, param4]
const iconType = ['<img src="assets/images/icon-plus.svg" alt="plusIcon">', '<img src="assets/images/icon-minus.svg" alt="minusIcon">']

param1.classList.add("open")
param1.style.display = "block"

for(let i = 0; i < buttonArray.length; i++){
    accordion[i].addEventListener("click", () => {
        if(paramArray[i].classList.contains("open")){
            paramArray[i].classList.remove("open")
            buttonArray[i].innerHTML = iconType[0]
        } else {
            paramArray[i].classList.add("open")
            buttonArray[i].innerHTML = iconType[1]
        }
        
    })
}