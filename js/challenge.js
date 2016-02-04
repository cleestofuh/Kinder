$("#anotherone").click(newChallenge);

function newChallenge(e) { 
    // prevent the page from reloading 
    e.preventDefault();

    var challenge = document.getElementById('challengetext');
    var newText = Math.floor((Math.random() * 6));

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
        case 3:
            challenge.innerHTML = "HOLD THE DOOR FOR SOMEONE";
            break;
        case 4:
            challenge.innerHTML = "PAY FOR PARKING FOR SOMEONE";
            break;
        case 5:
            challenge.innerHTML = "DONATE BLOOD";
            break;
        default:
            challenge.innerHTML = "GIVE SOMEONE A COMPLIMENT";
            break;
    }
};
