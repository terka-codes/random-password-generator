const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Sets the DOMs
let generateBtnEl = document.getElementById("generate-btn")
let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
let clickAlertEl = document.getElementById("click-alert")

// Listens for clicks on button
generateBtnEl.addEventListener("click", generatePasswords)

// Asks to generate the 2 passwords and writes them
function generatePasswords() {
    let passwordOne = makePassword()
    let passwordTwo = makePassword()
    
    password1.textContent = passwordOne
    password2.textContent = passwordTwo
}

// Generates the 2 passwords
function makePassword() {
    let password = ""
    
    for (let i = 0; i < 16; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        password += characters[randomNumber]
    }
    return password
}

// Copy the password to clipboard, but doesn't work on Scrimba
password1.addEventListener("click", copyToClipboard1)
password2.addEventListener("click", copyToClipboard2)

// Copies the first password to the clipboard
function copyToClipboard1() {
  navigator.clipboard.writeText(password1.innerText)

  clickAlertEl.textContent = "First password copied to clipboard"
}

// Copies the second password to the clipboard
function copyToClipboard2() {
  console.log(password2.value)

  navigator.clipboard.writeText(password2.innerText)

  clickAlertEl.textContent = "Second password copied to clipboard"
} 
