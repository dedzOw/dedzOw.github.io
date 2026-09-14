// Shows the speech bubble when clicked by user
document.getElementById("speech-card").onclick = (e) => {
    document.getElementById("speech-message").innerHTML = "Hi!";
    document.getElementById("speech-message").classList.toggle("show");
};

// Shows the beverage messagge
document.getElementById("beverage-select").onchange = (e) => {
    document.getElementById("beverage-message").innerHTML =
        e.target.value + ": Nice Choice!";
};

// adds an emoji when sun baby face is clicked
document.getElementById("sun-img").onclick = (e) => {
    const sticker = document.createElement("span");

    sticker.classList.add("sticker");
    sticker.innerHTML = "😈";
    sticker.style.left = "15%";
    sticker.style.top = "20%";

    document.getElementById("sticker-img").append(sticker);
};