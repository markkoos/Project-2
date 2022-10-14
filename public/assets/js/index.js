// client side js 

// Grabs the buttons from HTML page
const registerBtn = document.getElementById(`register`);
const loginBtn = document.getElementById(`login`);

// Event Listeners for each button
registerBtn.addEventListener(`click`, () => {
    window.location.assign(`../form.html`)
});

loginBtn.addEventListener(`click`, () => {
    window.location.assign(`../login.html`)
});