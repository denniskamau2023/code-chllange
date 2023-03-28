const card = document.createElement("li");
function animalCharacters(characters){
    card.className = "card"
    card.innerHTML = `
<img src="${characters.image}" class="card-img-top" alt="${characters.name}">
    <div class="card-body">
      <h5 class="card-title">${characters.name}</h5>
      <a href="#" class="btn btn-primary">votes:${characters.votes}</a>
    </div>
    `
}
  
    document.querySelector(".char").append(card)
    card.addEventListener


function fetchcharacters(){
    fetch("http://localhost:3000/characters")
    .then(res => res.json())
    .then((characters) =>{
        characters.forEach((characters) => {
            animalCharacters(characters)
        });
    }) 

}

fetchcharacters()