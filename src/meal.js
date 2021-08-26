function nameMenuItem(menuItemName) {
  return ('Delicious ' + menuItemName)
}


function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
}


function addIngredients(ingredient, ingredients) {
  for (var i = 0; i < ingredient.length; i++) {
    if (ingredients[i] === ingredient) {
      return;
    }
  }
  ingredients.push(ingredient);
}


function formatPrice(price) {
  return `$${price}`
}


function decreasePrice(price) {
    return price - 0.60; 
}


function createRecipe(menuTitle, ingredients, menuItemType) {
  return {
    title: menuTitle,
    ingredients: ingredients,
    type: menuItemType
  }
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


