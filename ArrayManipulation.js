const listElement = document.querySelector("ul");
const inputParameter = document.querySelector("input[type='text']");
const arrayDisplay = document.getElementById("array-display");
const outputText = document.getElementById("output-text");

var array = [];
const arrayStart = "Array = [ ";
const arrayEnd = " ]"

document.getElementById("add-to-end").addEventListener("click", addToEnd);
document.getElementById("add-to-start").addEventListener("click", addToStart);




function addToEnd(){
    if (isInputEmpty()) return;
    array.push(getInput(inputParameter.value));
    printText(inputParameter.value, "addToEnd");
    updateArray();
    removeText();
}

function addToStart(){
    if (isInputEmpty()) return;
    array.unshift(getInput(inputParameter.value));
    printText(inputParameter.value, "addToStart");
    updateArray();
    removeText();
}

function removeLast(){
    if (isInputEmpty()) return;

}

function removeFirst(){
    if (isInputEmpty()) return;

}

function removeAtIndex(){
    if (isInputEmpty()) return;
     
}

function removeText(){
    inputParameter.value = "";
}

/* 
    Changes the array display to the new array
*/
function updateArray(){
    arrayDisplay.textContent = arrayStart + getString(array) + arrayEnd;
}

/*

*/
function printText(inputText, buttonType){
    let outString = "";
    switch (buttonType){
        case "addToEnd":
            outString += "Array.push("+ inputText + ");";
            break;
        case "addToStart":
            outString += "Array.unshift(" + inputText + ");";
            break;
    }

    const newText = document.createElement("p");
    newText.textContent = outString;
    newText.classList.add("typewriter-effect");

    outputText.appendChild(newText);

    // Set up typewriter effect
    let text = outputText.childNodes[outputText.childNodes.length-1];
    const typewriter = new Typewriter(text, {loop: false, autoStart: true,}); 

    typewriter.typeString(outString).start();
}


/*  
    Creates the string used to show the contents of the array
*/
function getString(currentArray){
    let outString = "";

    for (let i = 0; i < currentArray.length; i++){
        outString += currentArray[i];

        if (i < currentArray.length-1){
            outString += ", ";
        }
    }
    return outString;
}

/*  
    Converts a string input into a value
    Checks to see if the value can be converted to a number first
    Then checks if it is a boolean or a null value
    If there is no match, returns the value as a string #
*/
function getInput(input){
    let parsedInput = null;
    
    // Check if value is number
    parsedInput = Number(input);

    // True bool
    if (isNaN(parsedInput)){
        if (input == "true"){
            return true;
        }
        // False bool
        else if (input == "false"){
            return false;
        }
        // Null
        else if (input == "null"){
            return null;
        }
        else {
            // No conversion
            return input;
        }
    }
    else {
        return parsedInput;
    }
}

/*  
    Checks to see if the input text is empty 
*/
function isInputEmpty(){
    if (inputParameter.value == ""){
        return true;
    }
    return false;
}