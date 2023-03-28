function displayOneAnimal(animal) {
    let characterNames = document.createElement('li')
    characterNames.innerHTML = `<button class="one">${animal.name}</button>`
    document.querySelector("#animal-list").appendChild(characterNames)
    characterNames.addEventListener("click", () => {
        displayCard(animal)
    })
}
function displayCard(animal) {
    let card = document.createElement("li")
    card.className = "card col-2 m-2"
    card.innerHTML = `
    <img src=${animal.image} class="card-img-top" alt=${animal.name}>
  <div class="card-body">
    <button href="#" id="btn${animal.id}" class="btn btn-primary">${animal.votes}</button>
    </div>
    `
    document.querySelector("#animal-details").append(card)
let smallbtn = document.querySelector(`#btn${animal.id}`)

smallbtn.addEventListener('click' , (event) => {
     
let totalvotes = animal.votes + 1;
smallbtn.textContent = totalvotes

fetch(`http://localhost:3000/characters/${animal.id}`, {
method: 'PATCH',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
    votes:  totalvotes
})
}).then(response => response.JSON).catch(() => { console.log('error')})

})
}
function getAllAnimals() {
    fetch(" http://localhost:3000/characters")
    .then(res => res.json())
    .then((data) => {
        data.forEach(animal => {
            displayOneAnimal(animal)
        })
    })
}

getAllAnimals();