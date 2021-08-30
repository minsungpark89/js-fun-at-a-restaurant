function nameMenuItem(menuItemName) {
  return ('Delicious ' + menuItemName);
}


function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  };
}

function addIngredients(addIngredient, ingredients) {
  for (var i = 0; i < ingredients.length; i++) {
    if (ingredients[i] === addIngredient) {
      return;
    }
  }
  ingredients.push(addIngredient);
}
//   if (!ingredients.includes(addIngredient)) {
//     ingredients.push(addIngredient) 
//   }
// }

function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
    return price * .9;
}

function createRecipe(menuTitle, ingredients, menuItemType) {
  return {
    title: menuTitle,
    ingredients: ingredients,
    type: menuItemType
  };
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


