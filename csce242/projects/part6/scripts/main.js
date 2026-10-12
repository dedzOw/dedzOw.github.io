//toggle nav menu
document.getElementById("toggle-nav").onclick = () => {
    document.querySelector("#main-nav ul").classList.toggle("show-small");
};

//parsing json files from github pages
const base_url = "https://dedzow.github.io/csce242/projects/part6/";


//fetches units
const getUnits = async() => {
    const url = `${base_url}json/units.json`;
    const response = await fetch(url);
    return response.json();
};

//displays the units
const showUnits = async() => {
    const units = await getUnits();

    units.forEach((unit) => {
        document.querySelector("#unit-list").append(displayUnit(unit));
    });
};

//created unit card
const displayUnit = (unit) => {
    const article = document.createElement("article");
    article.classList.add("video-card");

    const pUnit = document.createElement("p");
    pUnit.innerHTML = unit.unit;
    article.append(pUnit);

    const h3 = document.createElement("h3");
    h3.innerHTML = unit.title;
    article.append(h3);

    const iframe = document.createElement("iframe");
    iframe.src = unit.video_url;
    iframe.title = unit.video_title;
    iframe.allowFullscreen = true;
    article.append(iframe);

    const pDescription = document.createElement("p");
    pDescription.classList.add("video-description");
    pDescription.innerHTML = unit.description;
    article.append(pDescription);

    const a = document.createElement("a");
    a.href = unit.review_link;
    a.innerHTML = unit.review_text + " &rarr;";
    article.append(a);

    return article;
};


//gets the links
const getUsefulLinks = async() => {
    const url = `${base_url}json/useful-links.json`;
    const response = await fetch(url);
    return response.json();
};

//displays the links
const showUsefulLinks = async() => {
    const links = await getUsefulLinks();

    links.forEach((link) => {
        document.querySelector("#useful-links").append(displayUsefulLink(link));
    });
};

//creates useful link card
const displayUsefulLink = (link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";

    const div = document.createElement("div");
    div.innerHTML = link.title;
    a.append(div);

    const span = document.createElement("span");
    span.innerHTML = link.description;
    a.append(span);

    return a;
};

if(document.querySelector("#unit-list")){
    showUnits();
}

if(document.querySelector("#useful-links")){
    showUsefulLinks();
}