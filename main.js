function buttonClicked() {
    let newText = "Button was clicked!"; 

    // Select an element in the DOM by id
    let buttonDiv = document.getElementById("button-div");

    // Update the HTML code inside of an element
    buttonDiv.innerHTML = newText; 
}
