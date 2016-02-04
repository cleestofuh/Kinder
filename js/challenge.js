$("#anotherone").click(newChallenge);

var challenge;
function appendChallenge(challenge) {
  $('#func').append("<h1 class='animated slideInRight'id='challengetext'\
  style='font-size:100pt;font-weight:600;color:white;'>" + challenge + "</h1>")
}

function newChallenge(e) {
  e.preventDefault();
  $("#challengetext").remove();
  var texterino = pickChallenge();
  appendChallenge(texterino);
}

function pickChallenge() {
  var newText = Math.floor((Math.random() * 6));
  var challenger;
  switch(newText) {
      case 0:
          challenger = "GIVE SOMEONE A COMPLIMENT";
          break;
      case 1:
          challenger = "PAY FOR FRIEND'S LUNCH";
          break;
      case 2:
          challenger = "DONATE TO CHARITY";
          break;
      case 3:
          challenger = "HOLD THE DOOR FOR SOMEONE";
          break;
      case 4:
          challenger = "PAY FOR PARKING FOR SOMEONE";
          break;
      case 5:
          challenger = "DONATE BLOOD";
          break;
      default:
          challenger = "GIVE SOMEONE A COMPLIMENT";
          break;
  }
  return challenger;
}
/*
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
};*/
