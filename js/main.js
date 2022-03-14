// importer les recipes
import { recipes } from "./recipes.js";
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
	cardTitle.setAttribute("class", "card-title");
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
	var cardListItem = [];
	for (var i = 0; i < recipes.ingredients.length; i++) {
		var a = 0;
		cardListItem[a] = document.createElement("p");
		cardListItem[a].setAttribute("class", "list-item");
		cardListItem[a].textContent = recipes.ingredients[i].ingredient + ":";
		cardList.appendChild(cardListItem[a]);
		if (typeof recipes.ingredients[i].quantity == "undefined") {
		} else {
			cardListItem[a].textContent += " " + recipes.ingredients[i].quantity;
		}

		if (typeof recipes.ingredients[i].unit == "undefined") {
		} else {
			cardListItem[a].textContent += " " + recipes.ingredients[i].unit;
		}
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
