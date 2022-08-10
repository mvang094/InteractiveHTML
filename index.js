console.log("Hello world");// Appears on the HTML Page console to ensure JS script was connected correctly


const message = document.querySelector("#message"); //A new element was created to hold the HTML id = message

/*The add movie function is the main functionality of the webpage. Holds the functions to add, delete, cross-out
movies in a list. The (event) parameter refers to things like user actions (clicks/key presses) that triggers certain
outcomes*/
function addMovie(event){
    //document keyword is used to connect to the HTML script file/page
    event.preventDefault(); //preventDefault is a built-in function. Prevents default actions to run alongside program
    let inputField = document.querySelector("input"); //assigns the HTML input tag to the inputField variable
    const movie = document.createElement("li"); //variable movie that holds a new list (li) element
    const movieTitle = document.createElement("span"); //variable to hold a new span element (container for holding content)
    
    //Hold the text input from the User. inputField is followed by value because it
    //contains the default value OR the value a user types in. Needed if we are accessing an HTML element
    movieTitle.textContent = inputField.value;
    
    //Means that if the User were to click (event) on the movie title, it will cross the movie out (crossOffMovie function/callback)
    movieTitle.addEventListener("click", crossOffMovie); 
    movie.appendChild(movieTitle); //Adds a movieTitle as a child of movie
    document.querySelector("ul").appendChild(movie); //adds movie to the HTML id ul (this means that movie will inherit the properites of the ul class)
    const deleteBtn = document.createElement("button"); //creates a delete button element
    deleteBtn.textContent = "x"; //the text value of the delete button will appear as "x"

    //Means that if the User were to click (event) on the delete button, it will delete the movie out (deleteMovie function/callback)
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn); //Adds deleteBtn as a child of the movie node
    
    inputField.value = ""; //resets the input field for better usabilty
} 

//This will initiate the HTML page to accept the User input and prompt the addMovie function accordingly
document.querySelector("form").addEventListener("submit", addMovie); //Step 2

//Callback function - Deleted function
function deleteMovie(event){
   //because the delete button is a child of the parentNode, in order to delete the movie Title, it must 
   //delete the ParentNode, which holds the other child sibling that holds the movie title.
   event.target.parentNode.remove(); 

   //We only want to display the movie title but we cannot do that with just parentNode.textContent. the ParentNode
   //holds two child elements, the movie title and the button. The above would display both text contents. Since 
   //the movie Title was appended first, we can reach the movie title with the keyword firstChild.textContent.
   message.textContent = `${event.target.parentNode.firstChild.textContent} was deleted`; 

   //invokes the revealMessage function
   revealMessage();
}



function crossOffMovie (event) { //function to cross off a movie on the list
    //event target means that it returns the element that triggered the event
    //classList returns the name of CSS classe
    //toggle() function switches between hide() and show().
    //Put together, this provided the functionality to cross out movie titles that the user clicked on
    event.target.classList.toggle("checked");
     if(event.target.classList.contains("checked") === true) //Step 5
        message.textContent = `${event.target.textContent} watched!`; //If the user clicked on the title and it 
                                                                      //strikesout, then this message appears
     else
        message.textContent = `${event.target.textContent} added back!`;//The user re-clicked on the title, removing the strikeout
                                                                        //for the appearance that the movie was added back in

    revealMessage();
}

function revealMessage(){ //Function to reveal messages
    // setTimeout(() => message.classList.add("hide"), 1000); //Hides the message after 1 sec (1000 millisecs)
    setTimeout(() => message, 1000); //Does not hide the message after a certain time
}


