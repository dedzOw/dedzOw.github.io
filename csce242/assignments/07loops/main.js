const loadCars = (numberOfCars, colors, road) => {
    for(let i = 0; i < numberOfCars; i++) {
        const car = document.createElement("i");

        car.classList.add("fa-solid", "fa-car-side", "car");
        car.style.color = colors[i % colors.length];
        car.style.left = Math.floor(Math.random() * 85) + "%";

        if(Math.random() < .5) {
            car.style.top = Math.floor(Math.random() * 50) + 15 + "px";
        } else {
            car.style.top = Math.floor(Math.random() * 35) + 115 + "px";
        }

        road.append(car);
    }
};

const road = document.getElementById("road");
const colors = ["#8f0e05", "#ffffff", "#000000", "#2d0f9a", "#742787"];

loadCars(5, colors, road);