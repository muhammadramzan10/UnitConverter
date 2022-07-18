const inputEl = document.getElementById("input-el")
const convertBtn = document.querySelector("#convert-btn")

let lengthConversion = document.querySelector("#lengthContent")
let volumeConversion = document.querySelector("#volumeContent")
let massConversion = document.querySelector("#massContent")


// default values

let meter = 3.281 //feet
let liter = 0.264 //gallon
let kilos = 2.204 //pound


convertBtn.addEventListener("click", function(){
    let inputValue = Number(inputEl.value)

    let stringForLength = `${inputValue} meters = ${(inputValue * meter).toFixed(3)} feet | ${inputValue} feet = ${(inputValue/meter).toFixed(3)} meters`
    lengthConversion.textContent = stringForLength

    let stringForVolume = `${inputValue} liter = ${(inputValue * liter).toFixed(3)} gallon | ${inputValue} gallon = ${(inputValue/liter).toFixed(3)} liters`
    volumeConversion.textContent = stringForVolume

    let stringForMass = `${inputValue} kilos = ${(inputValue * kilos).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue/kilos).toFixed(3)} kilos`
    massConversion.textContent = stringForMass
} )
