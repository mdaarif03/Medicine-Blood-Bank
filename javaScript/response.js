function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    else if(input=="how it is use"){
        return "first of all submit the form"
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    }
     else if (input == "hi") {
        return "Hello there!";
    }
     else if (input == "goodbye") {
        return "Talk to you later!";
    }
     else {
        return "Try asking something else!";
    }
}