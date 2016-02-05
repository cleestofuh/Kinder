$("#friend1").click(showStreak);

function showStreak(e) {
  e.preventDefault();
  $(".friend-streaks").toggle();
  //texterino = pickChallenge();
  //appendChallenge(texterino);
}
