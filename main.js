"use strict";

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal

let btns = document.querySelectorAll(".myBtn");
for (btn of btns) {
    btn.addEventListener('click', ("btns") => {
        modal.style.display = "block";
    })
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}