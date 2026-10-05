//toggle nav menu
document.getElementById("toggle-nav").onclick = () => {
    document.querySelector("#main-nav ul").classList.toggle("show-small");
};

//arrow bounce animation
setInterval(() => {
    document.getElementById("scroll-arrow").classList.toggle("bounce-arrow");
}, 500);