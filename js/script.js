//16 oggetti
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Milestone 1
// Partendo dalla struttura dati fornita, 
// visualizzare in pagina un box per ogni icona, 
// in cui è presente il nome dell’icona e l’icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà “color”: 
// utilizzare questa proprietà 
// per visualizzare le icone del colore corrispondente.

const pagina = document.getElementById("container");
icons.forEach((icon) => {
    const {name,prefix,type,family,color} = icon;
	//console.log(name,prefix,type,family,color);
	//stampa in-page
	pagina.innerHTML += spampaPage(name,prefix,type,family,color); 
});

//bottone BONUS
const btn = document.querySelector(".dropbtn");
const dropMenu = document.getElementById("dropdown")

btn.addEventListener("click" ,function(){
    if(dropMenu.classList.contains("off")){
        dropMenu.classList.remove("off")
    }else{
        dropMenu.classList.add("off")
    }
})
//creazione array nuovi
const newAnimal = icons.filter((animali) => {
	return animali.type == "animal";
})


const newVeggy = icons.filter((vegetali) => {
	return vegetali.type == "vegetable";
})


const newUser = icons.filter((utenti) => {
	return utenti.type == "user";
})
// console.log(newAnimal);
// console.log(newVeggy);
// console.log(newUser);

const all = document.getElementById("all");
const animal = document.getElementById("animal");
const veggy = document.getElementById("veggy");
const user = document.getElementById("user");
all.addEventListener("click", function() {
	//console.log("sei su all");
	pagina.innerHTML = "";
	//stampa tutto
	icons.forEach((icon) => {
		const {name,prefix,type,family,color} = icon;
		//console.log(name,prefix,type,family,color);
		//stampa in-page
		pagina.innerHTML += spampaPage(name,prefix,type,family,color);
	});
})
animal.addEventListener("click", function() {
	//console.log("sei su animal");
	pagina.innerHTML = "";
	//stampasolo animal
	newAnimal.forEach((icon) => {
		const {name,prefix,type,family,color} = icon;
		//console.log(name,prefix,type,family,color);
		//stampa in-page
		pagina.innerHTML += spampaPage(name,prefix,type,family,color);
	});
})
veggy.addEventListener("click", function() {
	//console.log("sei su veggy");
	pagina.innerHTML = "";
	//stampa solo vegetaria
	newVeggy.forEach((icon) => {
		const {name,prefix,type,family,color} = icon;
		//console.log(name,prefix,type,family,color);
		//stampa in-page
		pagina.innerHTML += spampaPage(name,prefix,type,family,color);
	});
})
user.addEventListener("click", function() {
	//console.log("sei su user");
	pagina.innerHTML = "";
	//stampa solo User
	newUser.forEach((icon) => {
		const {name,prefix,type,family,color} = icon;
		//console.log(name,prefix,type,family,color);
		//stampa in-page
		pagina.innerHTML += spampaPage(name,prefix,type,family,color);  
	});
})


//funzione stampa
function spampaPage(name,prefix,type,family,color) {
	const inPage = ` 
	<div class="box">
	<i class="${family} ${prefix}${name} ${type} ${color}"></i>
	<div class="text">
			${name} 
		</div>
	</div>`
	//stampa in-page
	return inPage; 
}