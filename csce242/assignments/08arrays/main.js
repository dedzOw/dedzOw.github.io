// links to national parks
const nationalParks = [];
nationalParks["Yellowstone National Park"] = "https://www.google.com/maps?q=Yellowstone+National+Park&output=embed";
nationalParks["Yosemite National Park"] = "https://www.google.com/maps?q=Yosemite+National+Park&output=embed";
nationalParks["Zion National Park"] = "https://www.google.com/maps?q=Zion+National+Park&output=embed";
nationalParks["Grand Canyon National Park"] = "https://www.google.com/maps?q=Grand+Canyon+National+Park&output=embed";

//links to waterfalls
const waterfalls = [];
waterfalls["Niagara Falls"] = "https://www.google.com/maps?q=Niagara+Falls&output=embed";
waterfalls["Multnomah Falls"] = "https://www.google.com/maps?q=Multnomah+Falls&output=embed";
waterfalls["Yosemite Falls"] = "https://www.google.com/maps?q=Yosemite+Falls&output=embed";
waterfalls["Havasu Falls"] = "https://www.google.com/maps?q=Havasu+Falls&output=embed";

const destinationType = document.getElementById("destination-type");
const destinationLinks = document.getElementById("destination-links");
const map = document.getElementById("map");

//google maps popup
const showMap = (mapLink) => {
    map.innerHTML = `<iframe src="${mapLink}"></iframe>`;
    map.classList.remove("hidden");
};

const showDestinations = (destinations) => {
    destinationLinks.innerHTML = "";

    for(let destination in destinations) {
        const link = document.createElement("a");

        link.href = "#";
        link.innerHTML = destination;
        link.classList.add("destination-link");

        link.onclick = (event) => {
            event.preventDefault();
            showMap(destinations[destination]);
        };

        destinationLinks.append(link);
    }
};

destinationType.onchange = () => {
    map.classList.add("hidden");
    map.innerHTML = "";

    if(destinationType.value === "parks") {
        showDestinations(nationalParks);
    }

    if(destinationType.value === "waterfalls") {
        showDestinations(waterfalls);
    }
};