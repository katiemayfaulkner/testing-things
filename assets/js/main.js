//styling header element
var heyDude = document.getElementById("hey-dude")

heyDude.style.fontSize = "35px"
heyDude.style.color = "rgb(160, 64, 224)"
heyDude.style.wordSpacing = "0px"


// making text content change when it's clicked on
var clickMe = document.getElementById("click-me");

clickMe.onclick = function() {
    clickMe.innerText = 'JAVASCRIPT WAS HERE';
    
};


// bloop appears when rainbow button is clicked
var raindbowBtn = document.getElementById("other-btn")
var bloopBtn = document.getElementById("bloop-btn")

raindbowBtn.onclick = function() {
    bloopBtn.style.display = "block"
}


// alert appears when frog button is clicked
var frogBtn = document.getElementById("alert-btn") 

frogBtn.onclick = function() {
    alert("you fed the frog!");
}


//content changes when plant button is clicked
var plantBtn = document.getElementById("changes-btn")

console.log(plantBtn) // ---> always console log to check if element(s) = selected

plantBtn.onclick = function() {

    plantBtn.style.backgroundColor ="lightgreen"
    plantBtn.innerText = "🌻"
}

// if (plantBtn.clicked = true) {
//     plantBtn.innerHTML = "🌻";
//   } else {
//     plantBtn.innerHTML = "🌱";
//   }
// ---> stays as sunflower even after refresh


//stuff changes when bloop is clicked
var bloopBtn = document.getElementById("bloop-btn")

console.log(bloopBtn)

bloopBtn.onclick = function() {
    // bloopBtn.classList.toggle('fqncy')
    heyDude.style.color = "lightgreen"
    bloopBtn.style.backgroundColor = "hotpink"
    bloopBtn.style.color = "white"
    bloopBtn.style.borderRadius = "0"

}

// saving input value even if refreshed

var inputBox = document.getElementById("textInput")

// If ze qlreqdy hqve a value, retreive it
if(localStorage.getItem('userInput')) {
    // Updqte input zith old/existing user input
    var oldUserInput = localStorage.getItem('userInput');
    inputBox.value = oldUserInput;
    console.log("retrieve existing local storage key")
} else {
    // Store user input in locql storqge
    localStorage.setItem('userInput', ''); 
    console.log("register new local storage key")
}

console.log(inputBox)


inputBox.addEventListener("keyup", function() {
    localStorage.setItem('userInput', inputBox.value)
    console.log(inputBox.value)

})



























/*
IF State,ent

if(condition) {
    // The condition is true, do so,ething
} else {
    // The condition is false, do so,ething else!
}


Data Types
- Nu,ber
    - INT -> Integer Nu,bers
    - FLOAT/DECIMAL -> $23.94
- Text -> String -> It needs to be surrounded by single or double auotes '' - ""
- Option - RIGHT / WRONG

*/


//save color choice to localStorage

// check if userColor key existed
if(localStorage.getItem('colorInput')) {
    
}
// If so, store its value to color input, and change body background
// If not, register the userColor key to our localStorage

var colorInput = document.querySelector('#colorInput');
colorInput.addEventListener('change', function() {
    console.log(colorInput.value)
    document.body.style.backgroundColor = colorInput.value
})


/*






FOR Loop

for(inital value; condition; stepper) {
    // What you want to iterate

}

*/

for(var i = 12; i > 0; i--) {
    var result = 2 * i;
    console.log(`2 * ${i} = ${result}`)
}