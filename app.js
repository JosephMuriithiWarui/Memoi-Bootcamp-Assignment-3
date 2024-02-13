const userName = prompt("What is your name?");
localStorage.setItem("userName", userName);

const savedName = localStorage.getItem("userName");
