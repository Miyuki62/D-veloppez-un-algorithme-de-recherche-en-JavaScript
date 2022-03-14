function recipesFactory(data) {
	const { id, name, ingredients, time, description } = data;

	const CardDiv = document.getElementById("card");

	function getRecipesCardDOM() {
		let element = document.createElement("p");
		element.textContent = name;
		CardDiv.appendChild(element);
		return CardDiv;
	}

	return { id, name, ingredients, time, description, getRecipesCardDOM };
}
