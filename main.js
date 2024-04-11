// functions
document.getElementById("rand").addEventListener("click", randomNicknames);
document.getElementById("all").addEventListener("click", allNicknames);

let nicknameList = [
  "The Animal",
  "The Shordy",
  "The Intuitive",
  "the Ambitious",
  "The Goofball",
  "The Silly",
  "The Loud Mouth",
  "Catherine",
];
let firstNameEl = document.getElementById("first");
let lastNameEl = document.getElementById("last");
let nicknameEl = document.getElementById("nickname");

function randomNicknames() {
  nameIndex = Math.randomInt(0, nicknameList.length);
  nicknameEl.innerHTML = `<p> <b>${firstNameEl.value} "${nicknameList[nameIndex]}"${lastNameEl.value}</b> <p>`;
}

function allNicknames() {
  for (i = 0; i < nicknameList.length; i++) {
    nicknameEl.innerHTML += `<p> <b>${firstNameEl.value} "${nicknameList[i]}" ${lastNameEl.value}<b/></p>`;
  }
}
