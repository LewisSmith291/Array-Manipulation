const listElement = document.querySelector("ul");
const inputParameter = document.querySelector("input[type='text']");
const arrayDisplay = document.getElementById("array-display");
const outputText = document.getElementById("output-text-container");

const consoleArrayDisplay = document.querySelector(".console-array-display");

var array = [];
const arrayStart = "Array = [ ";
const arrayEnd = " ]"

document.getElementById("add-to-end").addEventListener("click", addToEnd);
document.getElementById("add-to-start").addEventListener("click", addToStart);

function addToEnd(){
    if (isInputEmpty()) return;
    array.push(getInput(inputParameter.value));
    printText(getInput(inputParameter.value), "addToEnd");
    updateArray(array);
    removeText();
}

function addToStart(){
    if (isInputEmpty()) return;
    array.unshift(getInput(inputParameter.value));
    printText(getInput(inputParameter.value), "addToStart");
    updateArray(array);
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
function updateArray(targetArray){
    arrayDisplay.innerHTML = arrayStart + getString(targetArray) + arrayEnd;
}

/*
    Prints text showing what the user would have to type to use the function they click on
*/
function printText(inputText, buttonType){
    let outString = "";

    inputText = colourElement(inputText);

    switch (buttonType){
        case "addToEnd":
            outString += "Array.push("+ inputText + ");";
            break;
        case "addToStart":
            outString += "Array.unshift(" + inputText + ");";
            break;
    }

    const newLine = document.createElement("div");
    newLine.classList.add("output-text");

    const outTypewriter = new Typewriter(newLine, {loop: false, cursor: "", delay: 40});
    outTypewriter.typeString(outString).start();
    
    outputText.appendChild(newLine);

}

/*
    Takes an input and returns a string that colours the input based on its type
*/
function colourElement(element){
    let outputString = "";
    if (typeof element == "string"){
        //console.log("string");
        outputString = "<span style='color: rgb(216, 130, 17)'>'"+element+"'</span>"; 
    }
    else if (typeof element == "number"){
        //console.log("num");
        outputString = "<span style='color: rgb(0, 174, 255)'>"+element+"</span>";
    }
    else if (typeof element == "boolean"){
        //console.log("bool");
        outputString = "<span style='color: rgb(200, 35, 200)'>"+element+"</span>";
    }
    else if (element == null){
        //console.log("null");
        outputString = "<span style='color: rgba(139, 139, 139, 1)'>"+element+"</span>";
    }
    return outputString;
}

/*  
    Creates the string used to show the contents of the array
*/
function getString(currentArray){
    let outString = "";

    for (let i = 0; i < currentArray.length; i++){
        outString += colourElement(currentArray[i]);

        if (i < currentArray.length-1){
            outString += ", ";
        }

    }
    return outString;
}

/*  
    Converts a string input into a value
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