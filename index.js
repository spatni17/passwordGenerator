const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordlength = 15
let passwordOneEl = document.getElementById("passwordone")
let passwordTwoEl = document.getElementById("passwordtwo")


function getRandomChar() {
    let randomIndex = Math.floor(Math.random()*characters.length)
    return characters[randomIndex]
}

function getPassword() {
    let firstPassword = ""
    let secondPassword = ""
    for (let i = 0; i < passwordlength; i++) {
        firstPassword += getRandomChar()
    }
    for (let i = 0; i < passwordlength; i++) {
        secondPassword += getRandomChar()
    }
  passwordOneEl.textContent = firstPassword 
  passwordTwoEl.textContent = secondPassword
}


















