// importer les recipes
import { recipes } from "./recipes.js";
//-----------------------------------------------------------------------------
//global var
//-----------------------------------------------------------------------------
var arrayIngredients = [];
var arrayAppareil = [];
var arrayUstensiles = [];
var filteringredientsListItem = [];
//-----------------------------------------------------------------------------
//fonction mise en majuscule de la premiere lettre d'un string de texte
//-----------------------------------------------------------------------------
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
//-----------------------------------------------------------------------------
//gestion des Filtre
//-----------------------------------------------------------------------------
const ingredientsList = document.querySelector(".liste-ingredients");
const appareilList = document.querySelector(".liste-appareil");
const ustensilesList = document.querySelector(".liste-ustensiles");
//ingredients
const flecheingredients = document.querySelector(".fleche-ingredients");
const Listeingredients = document.querySelector(".liste-ingredients");
const rechercheIngredients = document.querySelector(".recherche-ingredients");
//appareil
const flecheappareil = document.querySelector(".fleche-appareil");
const Listeappareil = document.querySelector(".liste-appareil");
const rechercheappareil = document.querySelector(".recherche-appareil");
//appareil
const flecheustensiles = document.querySelector(".fleche-ustensiles");
const Listeustensiles = document.querySelector(".liste-ustensiles");
const rechercheustensiles = document.querySelector(".recherche-ustensiles");
//tag
const tagContainer = document.querySelector(".tag-container");

//-----------------------------------------------------------------------------
//gestion ouverture et fermeture de la liste Ingredients
//-----------------------------------------------------------------------------
flecheingredients.addEventListener("click", function () {
	if (flecheingredients.classList.contains("fa-angle-up")) {
		fermetureListeIngredients();
	} else {
		fermetureListeAppareil();
		fermetureListeUstensiles();
		ouvertureListeIngredients();
	}
});
const ouvertureListeIngredients = () => {
	flecheingredients.classList.remove("fa-angle-down");
	flecheingredients.classList.add("fa-angle-up");
	Listeingredients.style.display = "block";
	rechercheIngredients.style.width = "100%";
	if (screen.width >= 1000) {
		rechercheIngredients.style.width = "50%";
	}
};
const fermetureListeIngredients = () => {
	flecheingredients.classList.remove("fa-angle-up");
	flecheingredients.classList.add("fa-angle-down");
	Listeingredients.style.display = "none";
	rechercheIngredients.style.width = "100%";
	if (screen.width >= 1000) {
		rechercheIngredients.style.width = "200px";
	}
};
//-----------------------------------------------------------------------------
//gestion ouverture et fermeture de la liste Appareil
//-----------------------------------------------------------------------------
flecheappareil.addEventListener("click", function () {
	if (flecheappareil.classList.contains("fa-angle-up")) {
		fermetureListeAppareil();
	} else {
		fermetureListeIngredients();
		fermetureListeUstensiles();
		ouvertureListeAppareil();
	}
});
const ouvertureListeAppareil = () => {
	flecheappareil.classList.remove("fa-angle-down");
	flecheappareil.classList.add("fa-angle-up");
	Listeappareil.style.display = "block";
	rechercheappareil.style.width = "100%";
	if (screen.width >= 1000) {
		rechercheappareil.style.width = "50%";
	}
};
const fermetureListeAppareil = () => {
	flecheappareil.classList.remove("fa-angle-up");
	flecheappareil.classList.add("fa-angle-down");
	Listeappareil.style.display = "none";
	rechercheappareil.style.width = "100%";
	if (screen.width >= 1000) {
		rechercheappareil.style.width = "200px";
	}
};

//-----------------------------------------------------------------------------
//gestion ouverture et fermeture de la liste ustensiles
//-----------------------------------------------------------------------------
flecheustensiles.addEventListener("click", function () {
	if (flecheustensiles.classList.contains("fa-angle-up")) {
		fermetureListeUstensiles();
	} else {
		fermetureListeAppareil();
		fermetureListeIngredients();
		ouvertureListeUstensiles();
	}
});
const ouvertureListeUstensiles = () => {
	flecheustensiles.classList.remove("fa-angle-down");
	flecheustensiles.classList.add("fa-angle-up");
	Listeustensiles.style.display = "block";
	rechercheustensiles.style.width = "100%";
	if (screen.width >= 1000) {
		rechercheustensiles.style.width = "50%";
	}
};
const fermetureListeUstensiles = () => {
	flecheustensiles.classList.remove("fa-angle-up");
	flecheustensiles.classList.add("fa-angle-down");
	Listeustensiles.style.display = "none";
	rechercheustensiles.style.width = "100%";
	if (screen.width >= 1000) {
		rechercheustensiles.style.width = "200px";
	}
};

//-----------------------------------------------------------------------------
//gestion des tag
//-----------------------------------------------------------------------------
//permet la creation des tag ingredient
const creationTagIngredients = (event) => {
	let data = event.target.textContent;
	tagContainer.innerHTML += `
    <div class="tag-select tag-select-ingredients tag-select-choix" data-tag="ingredients" data-name=${data}>${data}<i class="fa fa-times-circle close-tag"" alt="close button"></i></div>
  `;
	const tagChoisis = document.querySelectorAll(".tag-select-choix");
	const tagClose = document.querySelectorAll(".close-tag");
	const parent = document.getElementsByName(data);
	parent[0].style.display = "none";
	SuppressionTag(tagClose, tagChoisis);
};
//permet la creation des tag appareil
const creationTagAppareil = (event) => {
	let data = event.target.textContent;
	tagContainer.innerHTML += `
    <div class="tag-select tag-select-appareil tag-select-choix" data-tag="appareil" data-name=${data}>${data}<i class="fa fa-times-circle close-tag" alt="close button"></i></div>
  `;
	const tagChoisis = document.querySelectorAll(".tag-select-choix");
	const tagClose = document.querySelectorAll(".close-tag");
	const parent = document.getElementsByName(data);
	parent[0].style.display = "none";
	SuppressionTag(tagClose, tagChoisis);
};
//permet la creation des tag ustensiles
const creationTagUstensiles = (event) => {
	let data = event.target.textContent;
	tagContainer.innerHTML += `
    <div class="tag-select tag-select-ustensiles tag-select-choix" data-tag="ustensiles" data-name="${data}">${data}<i class="fa fa-times-circle close-tag" alt="close button"></i></div>
  `;
	const tagChoisis = document.querySelectorAll(".tag-select-choix");
	const tagClose = document.querySelectorAll(".close-tag");
	const parent = document.getElementsByName(data);
	parent[0].style.display = "none";
	SuppressionTag(tagClose, tagChoisis);
};

//Suppression des Tag
const SuppressionTag = (close, tag) => {
	var arrayElementSelectString = [];
	close.forEach((elt, index) => {
		elt.addEventListener("click", () => {
			const indexElement = arrayElementSelectString.indexOf(
				tag[index].textContent
			);
			if (tag[index].dataset.tag.includes("ingredients")) {
				tag[index].remove();
				let tagcreator = document.getElementsByName(tag[index].dataset.name);
				tagcreator[0].style.display = "block";
			}
			if (tag[index].dataset.tag.includes("appareil")) {
				tag[index].remove();
				let tagcreator = document.getElementsByName(tag[index].dataset.name);
				tagcreator[0].style.display = "block";
			}
			if (tag[index].dataset.tag.includes("ustensiles")) {
				tag[index].remove();
				let tagcreator = document.getElementsByName(tag[index].dataset.name);
				tagcreator[0].style.display = "block";
			}
		});
	});
};
//-----------------------------------------------------------------------------
//filtrage de l'array pour les ingredient
//-----------------------------------------------------------------------------
recipes.forEach((recipes) => {
	var arrayIngredientsTemp = [];
	for (var i = 0; i < recipes.ingredients.length; i++) {
		const count = arrayIngredientsTemp.push(recipes.ingredients[i].ingredient);
	}
	arrayIngredientsTemp.forEach((element) => {
		arrayIngredients.push(element.toLowerCase());
	});
});
//trie par l'ordre alphabétique puis on enlève les doublon
const SortIngredients = arrayIngredients.sort();
const filtereIngredientsdArray = SortIngredients.filter(
	(ele, pos) => arrayIngredients.indexOf(ele) == pos
);

//generation de la liste d'ingredient avec une lettre majuscule au debut

for (var i = 0; i < filtereIngredientsdArray.length; i++) {
	var a = 0;
	filteringredientsListItem[a] = document.createElement("li");
	filteringredientsListItem[a].textContent = capitalizeFirstLetter(
		filtereIngredientsdArray[i]
	);
	filteringredientsListItem[a].setAttribute(
		"class",
		"liste-element text-truncate"
	);
	filteringredientsListItem[a].setAttribute(
		"name",
		capitalizeFirstLetter(filtereIngredientsdArray[i])
	);
	filteringredientsListItem[a].setAttribute("data-categorie", "ingredients");
	filteringredientsListItem[a].addEventListener(
		"click",
		creationTagIngredients
	);
	ingredientsList.appendChild(filteringredientsListItem[a]);
}
//-----------------------------------------------------------------------------
//filtrage de l'array pour les Appareil
//-----------------------------------------------------------------------------
recipes.forEach((recipes) => {
	var arrayAppareilTemp = [];
	const count = arrayAppareilTemp.push(recipes.appliance);

	arrayAppareilTemp.forEach((element) => {
		arrayAppareil.push(element.toLowerCase());
	});
});
//trie par l'ordre alphabétique puis on enlève les doublon
const SortAppareil = arrayAppareil.sort();
const filtereAppareildArray = SortAppareil.filter(
	(ele, pos) => arrayAppareil.indexOf(ele) == pos
);
//generation de la liste d'Appareil avec une lettre majuscule au debut
var filterAppareilListItem = [];
for (var i = 0; i < filtereAppareildArray.length; i++) {
	var a = 0;
	filterAppareilListItem[a] = document.createElement("li");
	filterAppareilListItem[a].textContent = capitalizeFirstLetter(
		filtereAppareildArray[i]
	);
	filterAppareilListItem[a].setAttribute(
		"class",
		"liste-element text-truncate"
	);
	filterAppareilListItem[a].setAttribute(
		"name",
		capitalizeFirstLetter(filtereAppareildArray[i])
	);
	filterAppareilListItem[a].setAttribute("data-categorie", "appareil");
	filterAppareilListItem[a].addEventListener("click", creationTagAppareil);
	appareilList.appendChild(filterAppareilListItem[a]);
}
//-----------------------------------------------------------------------------
//filtrage de l'array pour les ustensiles
//-----------------------------------------------------------------------------
recipes.forEach((recipes) => {
	var arrayUstensilesTemp = [];
	for (var i = 0; i < recipes.ustensils.length; i++) {
		const count = arrayUstensilesTemp.push(recipes.ustensils[i]);
	}
	arrayUstensilesTemp.forEach((element) => {
		arrayUstensiles.push(element.toLowerCase());
	});
});
//trie par l'ordre alphabétique puis on enlève les doublon
const SortUstensiles = arrayUstensiles.sort();
const filtereUstensilesArray = SortUstensiles.filter(
	(ele, pos) => arrayUstensiles.indexOf(ele) == pos
);
//generation de la liste d'ustensiles avec une lettre majuscule au debut
var filterUstensilesListItem = [];
for (var i = 0; i < filtereUstensilesArray.length; i++) {
	var a = 0;
	filterUstensilesListItem[a] = document.createElement("li");
	filterUstensilesListItem[a].textContent = capitalizeFirstLetter(
		filtereUstensilesArray[i]
	);
	filterUstensilesListItem[a].setAttribute(
		"class",
		"liste-element text-truncate"
	);
	filterUstensilesListItem[a].setAttribute(
		"name",
		capitalizeFirstLetter(filtereUstensilesArray[i])
	);
	filterUstensilesListItem[a].setAttribute("data-categorie", "ustensiles");
	filterUstensilesListItem[a].addEventListener("click", creationTagUstensiles);

	ustensilesList.appendChild(filterUstensilesListItem[a]);
}

//-----------------------------------------------------------------------------
// generation des recette
//-----------------------------------------------------------------------------
function generateRecipe(recipes) {
	let cardMaster = document.createElement("div");
	let imgCard = document.createElement("img");
	let cardBody = document.createElement("div");
	let cardHeaderContainer = document.createElement("div");
	let cardTitle = document.createElement("h5");
	let cardTimeContainer = document.createElement("div");
	let cardClockIcon = document.createElement("i");
	let cardTime = document.createElement("p");
	let cardTexteContainer = document.createElement("div");
	let cardList = document.createElement("div");
	let cardDescription = document.createElement("p");
	//
	cardMaster.setAttribute("class", "card");
	//
	imgCard.setAttribute("class", "card-img-top");
	imgCard.setAttribute("alt", "placeholder");
	imgCard.setAttribute("src", "assets/images/plat.svg");
	//
	cardBody.setAttribute("class", "card-body");
	//
	cardHeaderContainer.setAttribute("class", "card-header-container");
	//
	cardTitle.setAttribute("class", "card-title text-truncate");
	cardTitle.textContent = recipes.name;
	//
	cardTimeContainer.setAttribute("class", "card-time");
	//
	cardClockIcon.setAttribute("class", "fa fa-clock-o");
	//
	cardTime.textContent = recipes.time + " min";
	//
	cardTexteContainer.setAttribute("class", "card-texte-container");
	//
	cardList.setAttribute("class", "list");
	//
	//declaration des array pour générer les ingredient
	var cardListItemContainer = [];
	var cardListItemTittle = [];
	var cardListItemTexte = [];
	//boucle for pour passer en revue le sous array des ingredient de chaque recette
	for (var i = 0; i < recipes.ingredients.length; i++) {
		var a = 0;
		cardListItemContainer[a] = document.createElement("div");
		cardListItemContainer[a].setAttribute("class", "list-item-container");
		//
		cardListItemTittle[a] = document.createElement("p");
		cardListItemTittle[a].setAttribute(
			"class",
			"list-item list-item-tittle text-truncate"
		);
		cardListItemTittle[a].textContent = recipes.ingredients[i].ingredient;
		//
		cardListItemTexte[a] = document.createElement("p");
		cardListItemTexte[a].setAttribute(
			"class",
			"list-item list-item-texte text-truncate"
		);
		//generation du nom de l'ingredient puis si il y a une quantity on ajoute des : et la quantités
		if (typeof recipes.ingredients[i].quantity == "undefined") {
		} else {
			cardListItemTittle[a].textContent += ":";
			cardListItemTexte[a].textContent = recipes.ingredients[i].quantity;
		}
		//si il y a une unité on l'ajoute également
		if (typeof recipes.ingredients[i].unit == "undefined") {
		} else {
			cardListItemTexte[a].textContent += " " + recipes.ingredients[i].unit;
		}
		cardList.appendChild(cardListItemContainer[a]);
		cardListItemContainer[a].appendChild(cardListItemTittle[a]);
		cardListItemTittle[a].appendChild(cardListItemTexte[a]);
	}
	//
	cardDescription.setAttribute("class", "card-description ");
	cardDescription.textContent = recipes.description;
	//
	cardMaster.appendChild(imgCard);
	cardMaster.appendChild(cardBody);
	cardBody.appendChild(cardHeaderContainer);
	cardBody.appendChild(cardTexteContainer);
	//
	cardHeaderContainer.appendChild(cardTitle);
	cardHeaderContainer.appendChild(cardTimeContainer);
	//
	cardTimeContainer.appendChild(cardClockIcon);
	cardTimeContainer.appendChild(cardTime);
	//
	cardTexteContainer.appendChild(cardList);
	cardTexteContainer.appendChild(cardDescription);

	return cardMaster;
}
const divcard = document.querySelector(".card-Container");
recipes.forEach((recipes) => {
	const recette = generateRecipe(recipes);
	divcard.appendChild(recette);
});

//-----------------------------------------------------------------------------
// Algo de recherche Principal
//-----------------------------------------------------------------------------
