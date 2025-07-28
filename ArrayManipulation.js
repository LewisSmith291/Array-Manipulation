const listElement = document.querySelector("ul");
const inputParameter = document.querySelector("input[type='text']");

var array = [];

function addElement(...args){
    if (args.length < 0) return;
    args.forEach(element => {
        array.push(element);
    });

    displayArray();
}

function addToEnd(){
    if (isInputEmpty()) return;

    array.push(getInput(inputParameter.value));
}

function addToStart(){
    if (isInputEmpty()) return;

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

function displayArray(){

    while(listElement.getElementsByTagName("li").length > 0){
        listElement.removeChild(0);
    }

    for (let i = 0; i < array.length; i++){
        const NewListItem = document.createElement("li");

        const IndexCol = document.createElement("div");
        IndexCol.classList.add("");

        const valueCol = document.createElement("div");
        
        
        listElement.appendChild(NewListItem);
    }
    
}

function getInput(input){
    let parsedInput = null;
    
    // Check if value is number
    parsedInput = Number(input);

    if (isNaN(parsedInput)){
        if (input == "true"){
            return true;
        }
        else if (input == "false"){
            return false;
        }
        else if (input == "null"){
            return null;
        }
        else {
            return input;
        }
    }
    else {
        return parsedInput;
    }
}

function isInputEmpty(){
    if (inputParameter.value == ""){
        return true;
    }
    return false;
}