class Dog {
    constructor(title, breed, age, size, picture) {
        this.title = title;        
        this.breed = breed;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");
        section.classList.add("project-card");
        
        section.append(this.title());

        return section;
    }

    title() {
      const h3 = document.createElement("h3");
      const a = document.createElement("a");
      h3.append(a);
      a.textContent = this.title;
      a.href = "#";
      
      return h3;
    }
}

const dogs = [];

//coco = new Dog("coco", "yorkie", 5, "small", "yorkie.jpg"));
//dog.push(coco);

dogs.push(new Dog("coco", "yorkie", 5, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "golden retriever", 2, "large", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald", "Pit Bull", 1, "large", "pitbull.jpg"));

const dogsDiv = document.querySelector(".dogs");

dogs.forEach((dog) => {
    dogsDivs.append(dog.item);
});