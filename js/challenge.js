$("#anotherone").click(newChallenge);

function newChallenge(e) { 
    // prevent the page from reloading 
    e.preventDefault();

    var challenge = document.getElementById('challengetext');
    var newText = Math.floor((Math.random() * 3));

    switch(newText) {
        case 0:
            challenge.innerHTML = "GIVE SOMEONE A COMPLIMENT";
            break;
        case 1:
            challenge.innerHTML = "PAY FOR FRIEND'S LUNCH";
            break;
        case 2:
            challenge.innerHTML = "DONATE TO CHARITY";
            break;
        default:
            challenge.innerHTML = "GIVE SOMEONE A COMPLIMENT";
            break;
    }
};
