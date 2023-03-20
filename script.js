const scoreBoardHome = document.getElementById('scoreboard-home');
const scoreBoardGuest = document.getElementById('scoreboard-guest');
const resetBtnElement = document.getElementById('reset-btn');
console.log(resetBtnElement);

let newScoreHome = 0;
let newScoreGuest = 0;

document.querySelectorAll('.btn-home').forEach((button) => {
  button.addEventListener('click', () => {
    const fired_button = parseInt(button.value);
    newScoreHome += fired_button;
    scoreBoardHome.innerHTML = `<p>${newScoreHome}</p>`;
  });
});

document.querySelectorAll('.btn-guest').forEach((button) => {
  button.addEventListener('click', () => {
    const fired_button = parseInt(button.value);
    newScoreGuest += fired_button;
    scoreBoardGuest.innerHTML = `<p>${newScoreGuest}</p>`;
  });
});

resetBtnElement.addEventListener('click', () => {
  newScoreHome = 0;
  newScoreGuest = 0;
  scoreBoardHome.innerHTML = `<p>0</p>`;
  scoreBoardGuest.innerHTML = `<p>0</p>`;
});