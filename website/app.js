var userSelection = 1;


// Array for messages.
var messages = [
    {fullName: "Peter Parker", numLikes: 700},
    {fullName: "Tony Stark", numLikes: 100},
    {fullName: "dash", numLikes: 0},
]

// Functions 
function pushData() {

    // Show messages.
    if (userSelection == 1) {
        for (var i = 1; i <= messages.length; i++) {
            document.write(i + ': ' + messages[i - 1].fullName + " " + messages[i - 1].numLikes + '<button type="submit" value="Submit">Like</button>' + "<button type='Delete' value='Delete'>Delete</button>" + '' + "<br/>");
        }
    }

    // Add a message.
    else if (userSelection == 2) {
        document.write(txt1);
        document.getElementById("list").innerHTML = messages;
        messages[messages.length] = (prompt('Enter a new message: '));

        // Displays list.
        for (var i = 1; i <= messages.length; i++) {
            document.write(i + ': ' + messages[i - 1] + "<br/>");
        }
    }

    // Delete a message.
    else if (userSelection == 3) {
        document.getElementById("list").innerHTML = messages;
        var delMssg = prompt('Enter the message index (between 1 and 5): ');

        // Loops to determine if user selection is between 1 and 5.
        if (delMssg <= 5 && delMssg >= 1) {
            messages.splice(delMssg - 1, 1);    // Delete a single element (choice minus 1 for index).
            document.write(txt1);
            // Displays list.
            for (var i = 1; i <= messages.length; i++) {
                document.write(i + ': ' + messages[i - 1] + "<br/>");
            }
        }
        else {
            document.write('Please refresh and select a correct command.');
        }
    }

    // Quit.
    else if (userSelection == 0) {
        document.write('Good Bye');
    }

    // If NOT a valid command selection.
    else {
        document.write('Please refresh and select a correct command.');
    }
}



// START
const list = document.getElementById("list").innerHTML = pushData();



