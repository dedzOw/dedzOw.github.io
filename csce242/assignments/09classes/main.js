class Vacation {
    constructor(title, type, description, thingsToDo, image, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.image = image;
        this.mapSrc = mapSrc;
    }

    getCard() {
        const card = document.createElement("section");

        card.classList.add("vacation-card");
        card.innerHTML = `
            <h3>${this.title}</h3>
            <p>${this.type} Vacation</p>
            <img src="${this.image}" alt="${this.title}">
        `;

        card.onclick = () => {
            showModal(this);
        };

        return card;
    }
}

const vacationGallery = document.getElementById("vacation-gallery");
const modal = document.getElementById("id01");
const vacationMap = document.getElementById("vacation-map");

const showModal = (vacation) => {
    document.getElementById("modal-title").innerHTML = vacation.title;
    document.getElementById("modal-type").innerHTML = `<strong>Type:</strong> ${vacation.type}`;
    document.getElementById("modal-description").innerHTML = `<strong>Description:</strong> ${vacation.description}`;
    document.getElementById("modal-things").innerHTML = `<strong>Things To Do:</strong> ${vacation.thingsToDo}`;

    vacationMap.src = vacation.mapSrc;
    modal.style.display = "block";
};

const vacations = [
    new Vacation(
        "Asheville",
        "Mountain",
        "A mountain city in North Carolina with beautiful views and a fun downtown area.",
        "Hike and stuff.",
        "images/asheville.jpg",
        "https://www.google.com/maps?q=Asheville,+North+Carolina&output=embed"
    ),

    new Vacation(
        "Boone",
        "Mountain",
        "A small mountain town known for hiking, skiing, and Appalachian State University(ouch).",
        "Go skiing and stuff",
        "images/boone.jpg",
        "https://www.google.com/maps?q=Boone,+North+Carolina&output=embed"
    ),

    new Vacation(
        "Zion National Park",
        "Mountain",
        "A national park in Utah with tall cliffs and hiking trails.",
        "Hike The Narrows and stuff.",
        "images/zion.jpg",
        "https://www.google.com/maps?q=Zion+National+Park&output=embed"
    ),

    new Vacation(
        "Myrtle Beach",
        "Beach",
        "A popular and crowded South Carolina beach with a boardwalk, restaurants, and attractions.",
        "Enjoy the merchstores and the ugly chaos.",
        "images/myrtle-beach.jpg",
        "https://www.google.com/maps?q=Myrtle+Beach,+South+Carolina&output=embed"
    ),

    new Vacation(
        "Edisto Beach",
        "Beach",
        "A much nicer beach compared to Myrtle Beach.",
        "Go swimming, walk on the beach, and visit Edisto Island.",
        "images/edisto-beach.jpg",
        "https://www.google.com/maps?q=Edisto+Beach,+South+Carolina&output=embed"
    ),

    new Vacation(
        "Pawleys Island",
        "Beach",
        "A nice beach area by the coasts of South Carolina.",
        "Relax on the beach, do beach stuff, beach around all day.",
        "images/pawleys-island.jpg",
        "https://www.google.com/maps?q=Pawleys+Island,+South+Carolina&output=embed"
    )
];

for(let i = 0; i < vacations.length; i++) {
    vacationGallery.append(vacations[i].getCard());
}