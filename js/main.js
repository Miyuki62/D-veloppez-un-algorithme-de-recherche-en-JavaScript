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
function generateListeIngredients(filtereIngredientsdArray) {
	let filteringredientsListItem = document.createElement("li");
	//
	filteringredientsListItem.textContent = capitalizeFirstLetter(
		filtereIngredientsdArray
	);
	//
	filteringredientsListItem.setAttribute(
		"class",
		"liste-element text-truncate"
	);
	filteringredientsListItem.setAttribute(
		"name",
		capitalizeFirstLetter(filtereIngredientsdArray)
	);
	filteringredientsListItem.setAttribute("data-categorie", "ingredients");
	//
	filteringredientsListItem.addEventListener("click", creationTagIngredients);
	//
	return filteringredientsListItem;
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
function generateListAppareil(filtereAppareildArray) {
	let filterAppareilListItem = document.createElement("li");
	//
	filterAppareilListItem.textContent = capitalizeFirstLetter(
		filtereAppareildArray
	);
	//
	filterAppareilListItem[a].setAttribute(
		"class",
		"liste-element text-truncate"
	);
	filterAppareilListItem[a].setAttribute(
		"name",
		capitalizeFirstLetter(filtereAppareildArray)
	);
	filterAppareilListItem.setAttribute("data-categorie", "appareil");
	//
	filterAppareilListItem.addEventListener("click", creationTagAppareil);
	//
	return filterAppareilListItem;
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
function generateListeUstensiles(filtereUstensilesArray) {
	let filterUstensilesListItem = document.createElement("li");
	//
	filterUstensilesListItem.textContent = capitalizeFirstLetter(
		filtereUstensilesArray
	);
	//
	filterUstensilesListItem.setAttribute("class", "liste-element text-truncate");
	filterUstensilesListItem.setAttribute(
		"name",
		capitalizeFirstLetter(filtereUstensilesArray)
	);
	filterUstensilesListItem.setAttribute("data-categorie", "ustensiles");
	//
	filterUstensilesListItem.addEventListener("click", creationTagUstensiles);
	//
	return filterUstensilesListItem;
}

//-----------------------------------------------------------------------------
// generation des recette
//-----------------------------------------------------------------------------
function generateRecipe(data) {
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
	cardTitle.textContent = data.name;
	//
	cardTimeContainer.setAttribute("class", "card-time");
	//
	cardClockIcon.setAttribute("class", "fa fa-clock-o");
	//
	cardTime.textContent = data.time + " min";
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
	for (var i = 0; i < data.ingredients.length; i++) {
		var a = 0;
		cardListItemContainer[a] = document.createElement("div");
		cardListItemContainer[a].setAttribute("class", "list-item-container");
		//
		cardListItemTittle[a] = document.createElement("p");
		cardListItemTittle[a].setAttribute(
			"class",
			"list-item list-item-tittle text-truncate"
		);
		cardListItemTittle[a].textContent = data.ingredients[i].ingredient;
		//
		cardListItemTexte[a] = document.createElement("p");
		cardListItemTexte[a].setAttribute(
			"class",
			"list-item list-item-texte text-truncate"
		);
		//generation du nom de l'ingredient puis si il y a une quantity on ajoute des : et la quantités
		if (typeof data.ingredients[i].quantity == "undefined") {
		} else {
			cardListItemTittle[a].textContent += ":";
			cardListItemTexte[a].textContent = data.ingredients[i].quantity;
		}
		//si il y a une unité on l'ajoute également
		if (typeof data.ingredients[i].unit == "undefined") {
		} else {
			cardListItemTexte[a].textContent += " " + data.ingredients[i].unit;
		}
		cardList.appendChild(cardListItemContainer[a]);
		cardListItemContainer[a].appendChild(cardListItemTittle[a]);
		cardListItemTittle[a].appendChild(cardListItemTexte[a]);
	}
	//
	cardDescription.setAttribute("class", "card-description ");
	cardDescription.textContent = data.description;
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
//-----------------------------------------------------------------------------
// Initialisation fonction
//-----------------------------------------------------------------------------
var divcard = document.querySelector(".card-Container");
recipes.forEach((recipes) => {
	const recette = generateRecipe(recipes);
	divcard.appendChild(recette);
});
//ingredients
filtereIngredientsdArray.forEach((filtereIngredientsdArray) => {
	//
	const search = generateListeIngredients(filtereIngredientsdArray);
	//
	ingredientsList.appendChild(search);
});
//appareil
filtereAppareildArray.forEach((filtereAppareildArray) => {
	//
	const search = generateListeIngredients(filtereAppareildArray);
	//
	appareilList.appendChild(search);
});
//ustensiles
filtereUstensilesArray.forEach((filtereUstensilesArray) => {
	//
	const search = generateListeIngredients(filtereUstensilesArray);
	//
	ustensilesList.appendChild(search);
});
//-----------------------------------------------------------------------------
// recherche principal
//-----------------------------------------------------------------------------

function selectElement(selector) {
	return document.querySelector(selector);
}
function clearResult() {
	selectElement(".card-Container").innerHTML = "";
}

function getResults() {
	const search = selectElement(".recherche-principal").value;

	clearResult();
	for (let i = 0; i < recipes.length; i++) {
		fermetureListeIngredients();
		fermetureListeAppareil();
		fermetureListeUstensiles();
		if (search.length >= 3) {
			for (var a = 0; a < recipes[i].ingredients.length; a++) {
				if (
					recipes[i].ingredients[a].ingredient
						.toLocaleLowerCase()
						.includes(search.toLocaleLowerCase()) ||
					recipes[i].name
						.toLocaleLowerCase()
						.includes(search.toLocaleLowerCase()) ||
					recipes[i].description
						.toLocaleLowerCase()
						.includes(search.toLocaleLowerCase())
				) {
					const recette2 = generateRecipe(recipes[i]);
					divcard.appendChild(recette2);
				}
			}
		}
	}
}
selectElement(".recherche-principal").addEventListener("keyup", getResults);

//-----------------------------------------------------------------------------
// recherche secondaire ingredients
//-----------------------------------------------------------------------------
function getIngredientsResults() {
	const search = selectElement(".ingredients-input").value;
	ingredientsList.innerHTML = "";
	filtereIngredientsdArray.forEach((filtereIngredientsdArray) => {
		if (
			filtereIngredientsdArray
				.toLocaleLowerCase()
				.includes(search.toLocaleLowerCase())
		) {
			ouvertureListeIngredients();
			fermetureListeAppareil();
			fermetureListeUstensiles();
			const searchList = generateListeIngredients(filtereIngredientsdArray);
			ingredientsList.appendChild(searchList);
		}
	});
}
selectElement(".ingredients-input").addEventListener(
	"keyup",
	getIngredientsResults
);
//-----------------------------------------------------------------------------
// recherche secondaire Appareil
//-----------------------------------------------------------------------------
function getAppareilResults() {
	const search = selectElement(".appareil-input").value;
	appareilList.innerHTML = "";
	filtereAppareildArray.forEach((filtereAppareildArray) => {
		if (
			filtereAppareildArray
				.toLocaleLowerCase()
				.includes(search.toLocaleLowerCase())
		) {
			ouvertureListeAppareil();
			fermetureListeIngredients();
			fermetureListeUstensiles();
			const searchList = generateListeIngredients(filtereAppareildArray);
			appareilList.appendChild(searchList);
		}
	});
}
selectElement(".appareil-input").addEventListener("keyup", getAppareilResults);
//-----------------------------------------------------------------------------
// recherche secondaire ustensiles
//-----------------------------------------------------------------------------
function getUstensilesResults() {
	const search = selectElement(".ustensiles-input").value;
	ustensilesList.innerHTML = "";
	filtereUstensilesArray.forEach((filtereUstensilesArray) => {
		if (
			filtereUstensilesArray
				.toLocaleLowerCase()
				.includes(search.toLocaleLowerCase())
		) {
			ouvertureListeUstensiles();
			fermetureListeIngredients();
			fermetureListeAppareil();
			const searchList = generateListeIngredients(filtereUstensilesArray);
			ustensilesList.appendChild(searchList);
		}
	});
}
selectElement(".ustensiles-input").addEventListener(
	"keyup",
	getUstensilesResults
);
