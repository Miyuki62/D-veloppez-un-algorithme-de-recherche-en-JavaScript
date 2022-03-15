// importer les recipes
import { recipes } from "./recipes.js";
var arrayIngredients = [];

//gestion des filtre
const ingredientsList = document.querySelector(".liste-ingredients");
const appareilList = document.querySelector(".liste-appareil");
const ustensilesList = document.querySelector(".liste-ustensiles");
//filtrage de l'array pour les ingredient
recipes.forEach((recipes) => {
	var arrayIngredientstemp = [];
	for (var i = 0; i < recipes.ingredients.length; i++) {
		const count = arrayIngredientstemp.push(recipes.ingredients[i].ingredient);
	}
	arrayIngredientstemp.forEach((element) => {
		arrayIngredients.push(element.toLowerCase());
	});
});
const filtereIngredientsdArray = arrayIngredients.filter(
	(ele, pos) => arrayIngredients.indexOf(ele) == pos
);
//generation de la liste d'ingredient
var filteringredientsListItem = [];
for (var i = 0; i < filtereIngredientsdArray.length; i++) {
	var a = 0;
	filteringredientsListItem[a] = document.createElement("li");
	filteringredientsListItem[a].textContent = filtereIngredientsdArray[i];

	ingredientsList.appendChild(filteringredientsListItem[a]);
}

// generation des recette
const CardDiv = document.querySelector(".card-container");

recipes.forEach((recipes) => {
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
	CardDiv.appendChild(cardMaster);
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
});
