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
document.getElementById("remove-last").addEventListener("click", removeLast);
document.getElementById("remove-first").addEventListener("click", removeFirst);
document.getElementById("remove-at-index").addEventListener("click", removeAtIndex);

function addToEnd(){
    if (isInputEmpty()) return;
    array.push(getInput(inputParameter.value));
    printText(getInput(inputParameter.value), "addToEnd");
    updateArray(array);
    //removeText();
}

function addToStart(){
    if (isInputEmpty()) return;
    array.unshift(getInput(inputParameter.value));
    printText(getInput(inputParameter.value), "addToStart");
    updateArray(array);
    removeText();
}

function removeLast(){
    array.pop();
    printText(getInput(inputParameter.value), "removeLast");
    updateArray(array);
    removeText();
}

function removeFirst(){
    array.shift();
    printText(getInput(inputParameter.value), "removeFirst");
    updateArray(array);
    removeText();

}

function removeAtIndex(){
    if (isInputEmpty()){
        printText("Input can't be empty", "error");
        return;
    } 
    if (typeof getInput(inputParameter.value) != "number") {
        printText(colourElement(getInput(inputParameter.value)) + " is not a number", "error");
        return;
    }
    array.splice(parseInt(inputParameter.value), 1);
    printText(parseInt(inputParameter.value), "removeAtIndex");
    updateArray(array);
    removeText();
     
}

/*
    Clear the text from input field
*/
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

    if (buttonType != "error"){
        inputText = colourElement(inputText);
        console.log(inputText);
    }
    else {
        //inputText = colourElement(inputText);
        console.log(inputText);
    }

    let isError = false;

    switch (buttonType){
        case "addToEnd":
            outString += "Array.push("+ inputText + ");";
            break;
        case "addToStart":
            outString += "Array.unshift(" + inputText + ");";
            break;
        case "removeLast":
            outString += "Array.pop();";
            break;
        case "removeFirst":
            outString += "Array.shift();";
            break;
        case "removeAtIndex":
            outString += "Array.splice(" + inputText + ", " + colourElement(1) + ");"
            break;
        case "error":
            outString += inputText;
            isError = true;
            break;
    }

    // User command
    const newLine = document.createElement("div");
    newLine.classList.add("output-text");

    const outTypewriter = new Typewriter(newLine, {loop: false, cursor: "", delay: 40});
    outTypewriter.typeString(outString).start();
    outputText.appendChild(newLine);
    
    if (false){
        // Array output
        const arrayChange = document.createElement("div");
        arrayChange.classList.add("array-output", "console-text");

        const outArrayTypewriter = new Typewriter(arrayChange, {loop: false, cursor: "", delay: 20});
        outArrayTypewriter.pauseFor(1000).typeString("> " + arrayStart + getString(array) + arrayEnd).start();
        outputText.appendChild(arrayChange);

        newLine.scrollIntoView({ behavior: "instant", block: "end" });
    }
}

/*
    Takes an input and returns a string that colours the input based on its type
*/
function colourElement(element){
    let outputString = "";
    element = getInput(element);
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