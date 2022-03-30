// importer les recipes
import { recipes } from "./recipes.js";
//-----------------------------------------------------------------------------
//global var
//-----------------------------------------------------------------------------
var arrayIngredients = [];
var arrayAppareil = [];
var arrayUstensiles = [];
var sortRecette = [];
var recettefilterArray = [];

var searchFiltereIngredientsdArray = [];
var searchFiltereAppareildArray = [];
var searchFiltereUstensilesdArray = [];

var tagIngredients = [];
var tagAppareil = [];
var tagUstensiles = [];
//-----------------------------------------------------------------------------
//fonction mise en majuscule de la premiere lettre d'un string de texte
//-----------------------------------------------------------------------------
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function intersect(a, b) {
	const intersection = a.filter((element) => b.appliance.includes(element));
	return intersection;
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
const ingredientsInput = document.querySelector(".ingredients-input");
//appareil
const flecheappareil = document.querySelector(".fleche-appareil");
const Listeappareil = document.querySelector(".liste-appareil");
const rechercheappareil = document.querySelector(".recherche-appareil");
const appareilsInput = document.querySelector(".appareil-input");
//ustensiles
const flecheustensiles = document.querySelector(".fleche-ustensiles");
const Listeustensiles = document.querySelector(".liste-ustensiles");
const rechercheustensiles = document.querySelector(".recherche-ustensiles");
const ustensilesInput = document.querySelector(".ustensiles-input");
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
    <div class="tag-select tag-select-ingredients tag-select-choix" data-tag="ingredients">${data}<i class="fa fa-times-circle close-tag"" alt="close button"></i></div>
  `;
	const tagChoisis = document.querySelectorAll(".tag-select-choix");
	const tagClose = document.querySelectorAll(".close-tag");
	const parent = document.getElementsByName(data);
	const count = tagIngredients.push(data.toLocaleLowerCase());
	try {
		parent[1].style.display = "none";
	} catch (error) {
		parent[0].style.display = "none";
	}
	getResults();
	SuppressionTag(tagClose, tagChoisis);
};
//permet la creation des tag appareil
const creationTagAppareil = (event) => {
	let data = event.target.textContent;
	tagContainer.innerHTML += `
    <div class="tag-select tag-select-appareil tag-select-choix" data-tag="appareil">${data}<i class="fa fa-times-circle close-tag" alt="close button"></i></div>
  `;
	const tagChoisis = document.querySelectorAll(".tag-select-choix");
	const tagClose = document.querySelectorAll(".close-tag");
	const parent = document.getElementsByName(data);
	const count = tagAppareil.push(data.toLocaleLowerCase());
	if (data === "Casserole" || data === "Saladier") {
		try {
			parent[0].style.display = "none";
		} catch (error) {
			parent[1].style.display = "none";
		}
	} else {
		try {
			parent[0].style.display = "none";
		} catch (error) {
			parent[1].style.display = "none";
		}
	}
	getResults();
	SuppressionTag(tagClose, tagChoisis);
};
//permet la creation des tag ustensiles
const creationTagUstensiles = (event) => {
	let data = event.target.textContent;
	tagContainer.innerHTML += `
    <div class="tag-select tag-select-ustensiles tag-select-choix" data-tag="ustensiles">${data}<i class="fa fa-times-circle close-tag" alt="close button"></i></div>
  `;
	const tagChoisis = document.querySelectorAll(".tag-select-choix");
	const tagClose = document.querySelectorAll(".close-tag");
	const parent = document.getElementsByName(data);
	const count = tagUstensiles.push(data.toLocaleLowerCase());
	if (data === "Casserole" || data === "Saladier") {
		try {
			parent[1].style.display = "none";
		} catch (error) {
			parent[0].style.display = "none";
		}
	} else {
		try {
			parent[0].style.display = "none";
		} catch (error) {
			parent[1].style.display = "none";
		}
	}
	getResults();
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
				let tagcreator = document.getElementsByName(tag[index].textContent);
				try {
					tagcreator[0].style.display = "block";
				} catch (error) {}
				const positionTagInArray = tagIngredients.indexOf(
					tag[index].textContent.toLocaleLowerCase()
				);
				if (positionTagInArray > -1) {
					tagIngredients.splice(positionTagInArray, 1);
				}
				getResults();
			}
			if (tag[index].dataset.tag.includes("appareil")) {
				tag[index].remove();
				let tagcreator = document.getElementsByName(tag[index].textContent);
				if (
					tag[index].textContent === "Casserole" ||
					tag[index].textContent === "Saladier"
				) {
					try {
						tagcreator[0].style.display = "block";
					} catch (error) {}
				} else {
					try {
						tagcreator[0].style.display = "block";
					} catch (error) {}
				}
				const positionTagInArray = tagAppareil.indexOf(
					tag[index].textContent.toLocaleLowerCase()
				);
				if (positionTagInArray > -1) {
					tagAppareil.splice(positionTagInArray, 1);
				}
				getResults();
			}
			if (tag[index].dataset.tag.includes("ustensiles")) {
				tag[index].remove();
				let tagcreator = document.getElementsByName(tag[index].textContent);
				if (
					tag[index].textContent === "Casserole" ||
					tag[index].textContent === "Saladier"
				) {
					try {
						tagcreator[1].style.display = "block";
					} catch (error) {}
				} else {
					try {
						tagcreator[0].style.display = "block";
					} catch (error) {}
				}
				const positionTagInArray = tagUstensiles.indexOf(
					tag[index].textContent.toLocaleLowerCase()
				);
				if (positionTagInArray > -1) {
					tagUstensiles.splice(positionTagInArray, 1);
				}
				getResults();
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
function generateListeIngredients(data) {
	let filteringredientsListItem = document.createElement("li");
	//
	filteringredientsListItem.textContent = capitalizeFirstLetter(data);
	//
	filteringredientsListItem.setAttribute(
		"class",
		"liste-element text-truncate"
	);
	filteringredientsListItem.setAttribute("name", capitalizeFirstLetter(data));
	filteringredientsListItem.setAttribute("data-categorie", "ingredients");
	//
	filteringredientsListItem.addEventListener("click", creationTagIngredients);
	//
	return filteringredientsListItem;
}
//generation des ingredient en fonction de la recherche
function generateSearchListIngredients(recetteIngredientsdArray) {
	var searchArrayIngredientsTemp = [];
	var searchArrayIngredients = [];
	recetteIngredientsdArray.forEach((recetteIngredientsdArray) => {
		for (var i = 0; i < recetteIngredientsdArray.ingredients.length; i++) {
			const count = searchArrayIngredientsTemp.push(
				recetteIngredientsdArray.ingredients[i].ingredient
			);
		}
		searchArrayIngredientsTemp.forEach((element) => {
			searchArrayIngredients.push(element.toLowerCase());
		});
	});

	//trie par l'ordre alphabétique puis on enlève les doublon
	const SortIngredients = searchArrayIngredients.sort();
	searchFiltereIngredientsdArray = SortIngredients.filter(
		(ele, pos) => searchArrayIngredients.indexOf(ele) == pos
	);
	ingredientsList.innerHTML = "";

	searchFiltereIngredientsdArray.forEach((searchFiltereIngredientsdArray) => {
		//
		const search = generateListeIngredients(searchFiltereIngredientsdArray);
		//
		ingredientsList.appendChild(search);
	});
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
function generateListAppareil(data) {
	let filterAppareilListItem = document.createElement("li");
	//
	filterAppareilListItem.textContent = capitalizeFirstLetter(data);
	//
	filterAppareilListItem.setAttribute("class", "liste-element text-truncate");
	filterAppareilListItem.setAttribute("name", capitalizeFirstLetter(data));
	filterAppareilListItem.setAttribute("data-categorie", "appareil");
	//
	filterAppareilListItem.addEventListener("click", creationTagAppareil);
	//
	return filterAppareilListItem;
}
//generation des appareil en fonction de la recherche
function generateSearchListAppareil(recetteAppareildArray) {
	var searchArrayAppareilTemp = [];
	var searchArrayAppareil = [];
	recetteAppareildArray.forEach((recetteAppareildArray) => {
		const count = searchArrayAppareilTemp.push(recetteAppareildArray.appliance);
		searchArrayAppareilTemp.forEach((element) => {
			searchArrayAppareil.push(element.toLowerCase());
		});
	});

	//trie par l'ordre alphabétique puis on enlève les doublon
	const SortAppareil = searchArrayAppareil.sort();
	searchFiltereAppareildArray = SortAppareil.filter(
		(ele, pos) => searchArrayAppareil.indexOf(ele) == pos
	);
	appareilList.innerHTML = "";
	searchFiltereAppareildArray.forEach((searchFiltereAppareildArray) => {
		//
		const search = generateListAppareil(searchFiltereAppareildArray);
		//
		appareilList.appendChild(search);
	});
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
function generateListeUstensiles(data) {
	let filterUstensilesListItem = document.createElement("li");
	//
	filterUstensilesListItem.textContent = capitalizeFirstLetter(data);
	//
	filterUstensilesListItem.setAttribute("class", "liste-element text-truncate");
	filterUstensilesListItem.setAttribute("name", capitalizeFirstLetter(data));
	filterUstensilesListItem.setAttribute("data-categorie", "ustensiles");
	//
	filterUstensilesListItem.addEventListener("click", creationTagUstensiles);
	//
	return filterUstensilesListItem;
}
//generation des ustensiles en fonction de la recherche
function generateSearchLisUstensiles(recetteUstensilesdArray) {
	var searchArrayUstensilesTemp = [];
	var searchArrayUstensiles = [];
	recetteUstensilesdArray.forEach((recetteUstensilesdArray) => {
		for (var i = 0; i < recetteUstensilesdArray.ustensils.length; i++) {
			const count = searchArrayUstensilesTemp.push(
				recetteUstensilesdArray.ustensils[i]
			);
		}
		searchArrayUstensilesTemp.forEach((element) => {
			searchArrayUstensiles.push(element.toLowerCase());
		});
	});
	//trie par l'ordre alphabétique puis on enlève les doublon
	const SortAppareil = searchArrayUstensiles.sort();
	searchFiltereUstensilesdArray = SortAppareil.filter(
		(ele, pos) => searchArrayUstensiles.indexOf(ele) == pos
	);
	ustensilesList.innerHTML = "";
	searchFiltereUstensilesdArray.forEach((searchFiltereUstensilesdArray) => {
		//
		const search = generateListeUstensiles(searchFiltereUstensilesdArray);
		//
		ustensilesList.appendChild(search);
	});
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
// Initialisation des fonction
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
	const search = generateListAppareil(filtereAppareildArray);
	//
	appareilList.appendChild(search);
});
//ustensiles
filtereUstensilesArray.forEach((filtereUstensilesArray) => {
	//
	const search = generateListeUstensiles(filtereUstensilesArray);
	//
	ustensilesList.appendChild(search);
});
//activation des différente fonction qui gere la recherche pour les filtre
checkIngredients();
checkAppareil();
checkUstensiles();
//-----------------------------------------------------------------------------
// recherche principal
//-----------------------------------------------------------------------------

function selectElement(selector) {
	return document.querySelector(selector);
}
function clearResult() {
	selectElement(".card-Container").innerHTML = "";
}
function clearAll() {
	selectElement(".card-Container").innerHTML = "";
	ingredientsList.innerHTML = "";
	appareilList.innerHTML = "";
	ustensilesList.innerHTML = "";
	tagContainer.innerHTML = "";
}
function clearFilterList() {
	ingredientsList.innerHTML = "";
	appareilList.innerHTML = "";
	ustensilesList.innerHTML = "";
	tagContainer.innerHTML = "";
}

function getResults() {
	const search = selectElement(".recherche-principal").value;
	checkIngredients();
	checkAppareil();
	checkUstensiles();
	clearResult();
	sortRecette = [];
	for (let i = 0; i < recipes.length; i++) {
		if (search.length >= 3) {
			fermetureListeIngredients();
			fermetureListeAppareil();
			fermetureListeUstensiles();
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
					if (tagIngredients.length >= 1) {
						//ingredient
						sortRecette.push(recipes[i]);
						const data = rechercheTagIngredients(sortRecette);
						generateSearchListfiltre(data);
						generateRecipeTag(data);
					} else if (tagAppareil.length >= 1) {
						//Appareil
						sortRecette.push(recipes[i]);
						const data = rechercheTagAppareil(sortRecette);
						generateSearchListfiltre(data);
						generateRecipeTag(data);
					} else if (tagUstensiles.length >= 1) {
						//ustensiles
						sortRecette.push(recipes[i]);
						const data = rechercheTagUstensiles(sortRecette);
						generateSearchListfiltre(data);
						generateRecipeTag(data);
					} else if (
						tagIngredients.length == 0 &&
						tagAppareil.length == 0 &&
						tagUstensiles.length == 0
					) {
						console.log("sortie defaut");
						sortRecette.push(recipes[i]);
					}
				}
			}
		}

		recettefilterArray = sortRecette.filter(
			(ele, pos) => sortRecette.indexOf(ele) == pos
		);
	}

	if (sortRecette == "" && search.length < 2) {
		recipes.forEach((recipes) => {
			const recette = generateRecipe(recipes);
			divcard.appendChild(recette);
		});
		if (
			tagIngredients.length == 0 &&
			tagAppareil.length == 0 &&
			tagUstensiles.length == 0
		) {
			clearFilterList();
			filtereIngredientsdArray.forEach((filtereIngredientsdArray) => {
				//
				const search = generateListeIngredients(filtereIngredientsdArray);
				//
				ingredientsList.appendChild(search);
			});
			//appareil
			filtereAppareildArray.forEach((filtereAppareildArray) => {
				//
				const search = generateListAppareil(filtereAppareildArray);
				//
				appareilList.appendChild(search);
			});
			//ustensiles
			filtereUstensilesArray.forEach((filtereUstensilesArray) => {
				//
				const search = generateListeUstensiles(filtereUstensilesArray);
				//
				ustensilesList.appendChild(search);
			});
		}
	} else {
		if (sortRecette == "" && search.length >= 3) {
			divcard.innerHTML = `<h2>Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc</h2>`;
		} else {
			if (
				tagIngredients.length == 0 &&
				tagAppareil.length == 0 &&
				tagUstensiles.length == 0
			) {
				generateSearchListfiltre(recettefilterArray);
				recettefilterArray.forEach((recettefilterArray) => {
					const searchList = generateRecipe(recettefilterArray);
					divcard.appendChild(searchList);
				});
			}
		}
	}
}
selectElement(".recherche-principal").addEventListener("keyup", getResults);
//-----------------------------------------------------------------------------
// recherche avec les filtre
//-----------------------------------------------------------------------------
function generateSearchListfiltre(data) {
	generateSearchListIngredients(data);
	generateSearchListAppareil(data);
	generateSearchLisUstensiles(data);
}

function generateRecipeTag(data) {
	selectElement(".card-Container").innerHTML = "";
	data.forEach((data) => {
		const searchList = generateRecipe(data);
		divcard.appendChild(searchList);
	});
}
function rechercheTagIngredients(sortRecette) {
	recettefilterArray = sortRecette.filter(
		(ele, pos) => sortRecette.indexOf(ele) == pos
	);
	var data = [];
	recettefilterArray.forEach((recettefilterArray) => {
		for (var b = 0; b < tagIngredients.length; b++) {
			for (var a = 0; a < recettefilterArray.ingredients.length; a++) {
				const intersection = tagIngredients.filter((element) =>
					recettefilterArray.ingredients[a].ingredient
						.toLocaleLowerCase()
						.includes(element)
				);

				if (intersection.length == 1) {
					const count = data.push(recettefilterArray);
				} else {
				}
			}
		}
	});
	return data;
}

function rechercheTagAppareil(sortRecette) {
	recettefilterArray = sortRecette.filter(
		(ele, pos) => sortRecette.indexOf(ele) == pos
	);
	var data = [];
	recettefilterArray.forEach((recettefilterArray) => {
		for (var b = 0; b < tagAppareil.length; b++) {
			const intersection = tagAppareil.filter((element) =>
				recettefilterArray.appliance.toLocaleLowerCase().includes(element)
			);
			if (intersection.length == 1) {
				const count = data.push(recettefilterArray);
			} else {
			}
		}
	});
	return data;
}

function rechercheTagUstensiles(sortRecette) {
	recettefilterArray = sortRecette.filter(
		(ele, pos) => sortRecette.indexOf(ele) == pos
	);
	var data = [];
	recettefilterArray.forEach((recettefilterArray) => {
		for (var b = 0; b < tagUstensiles.length; b++) {
			for (var a = 0; a < recettefilterArray.ustensils.length; a++) {
				const intersection = tagUstensiles.filter((element) =>
					recettefilterArray.ustensils[a].toLocaleLowerCase().includes(element)
				);

				if (intersection.length == 1) {
					const count = data.push(recettefilterArray);
				} else {
				}
			}
		}
	});
	return data;
}
//-----------------------------------------------------------------------------
// recherche secondaire ingredients
//-----------------------------------------------------------------------------
function checkIngredients() {
	//si on est pas en recherche c'est elle qui sera appeler
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
	//si on est en recherche c'est elle qui sera appeler
	function getIngredientsInSearchResults() {
		const search = selectElement(".ingredients-input").value;
		ingredientsList.innerHTML = "";
		searchFiltereIngredientsdArray.forEach((searchFiltereIngredientsdArray) => {
			if (
				searchFiltereIngredientsdArray
					.toLocaleLowerCase()
					.includes(search.toLocaleLowerCase())
			) {
				ouvertureListeIngredients();
				fermetureListeAppareil();
				fermetureListeUstensiles();
				const searchList = generateListeIngredients(
					searchFiltereIngredientsdArray
				);
				ingredientsList.appendChild(searchList);
			}
		});
	}
	ingredientsInput.addEventListener("keyup", getIngredientsResults);
	if (recettefilterArray.length == 0) {
		ingredientsInput.removeEventListener(
			"keyup",
			getIngredientsInSearchResults
		);
		ingredientsInput.addEventListener("keyup", getIngredientsResults);
	} else {
		ingredientsInput.removeEventListener("keyup", getIngredientsResults);
		ingredientsInput.addEventListener("keyup", getIngredientsInSearchResults);
	}
}
//-----------------------------------------------------------------------------
// recherche secondaire Appareil
//-----------------------------------------------------------------------------
function checkAppareil() {
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
				const searchList = generateListAppareil(filtereAppareildArray);
				appareilList.appendChild(searchList);
			}
		});
	}
	function getAppareilInSearchResults() {
		const search = selectElement(".appareil-input").value;
		appareilList.innerHTML = "";
		searchFiltereAppareildArray.forEach((searchFiltereAppareildArray) => {
			if (
				searchFiltereAppareildArray
					.toLocaleLowerCase()
					.includes(search.toLocaleLowerCase())
			) {
				ouvertureListeAppareil();
				fermetureListeIngredients();
				fermetureListeUstensiles();
				const searchList = generateListAppareil(searchFiltereAppareildArray);
				appareilList.appendChild(searchList);
			}
		});
	}
	appareilsInput.addEventListener("keyup", getAppareilResults);
	if (recettefilterArray.length == 0) {
		appareilsInput.removeEventListener("keyup", getAppareilInSearchResults);
		appareilsInput.addEventListener("keyup", getAppareilResults);
	} else {
		appareilsInput.removeEventListener("keyup", getAppareilResults);
		appareilsInput.addEventListener("keyup", getAppareilInSearchResults);
	}
}
//-----------------------------------------------------------------------------
// recherche secondaire ustensiles
//-----------------------------------------------------------------------------
function checkUstensiles() {
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
				const searchList = generateListeUstensiles(filtereUstensilesArray);
				ustensilesList.appendChild(searchList);
			}
		});
	}

	function getUstensilesInSearchResults() {
		const search = selectElement(".ustensiles-input").value;
		ustensilesList.innerHTML = "";
		searchFiltereUstensilesdArray.forEach((searchFiltereUstensilesdArray) => {
			if (
				searchFiltereUstensilesdArray
					.toLocaleLowerCase()
					.includes(search.toLocaleLowerCase())
			) {
				ouvertureListeUstensiles();
				fermetureListeIngredients();
				fermetureListeAppareil();
				const searchList = generateListeUstensiles(
					searchFiltereUstensilesdArray
				);
				ustensilesList.appendChild(searchList);
			}
		});
	}
	ustensilesInput.addEventListener("keyup", getUstensilesResults);
	if (recettefilterArray.length == 0) {
		ustensilesInput.removeEventListener("keyup", getUstensilesInSearchResults);
		ustensilesInput.addEventListener("keyup", getUstensilesResults);
	} else {
		ustensilesInput.removeEventListener("keyup", getUstensilesResults);
		ustensilesInput.addEventListener("keyup", getUstensilesInSearchResults);
	}
}
