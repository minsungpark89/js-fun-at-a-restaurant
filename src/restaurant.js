function createRestaurant(name) {
  return {
  name: name,
  menus: {
    breakfast: [],
    lunch: [],
    dinner: []
    }
  };
}

function addMenuItem(restaurant, menuItem) {
  if (menuItem.type === 'lunch' && !restaurant.menus.lunch.includes(menuItem)) {
    restaurant.menus.lunch.push(menuItem);
  } else if (menuItem.type === 'breakfast' && !restaurant.menus.breakfast.includes(menuItem)) {
    restaurant.menus.breakfast.push(menuItem);
  } else if (menuItem.type === 'dinner' && !restaurant.menus.dinner.includes(menuItem)) {
    restaurant.menus.dinner.push(menuItem);
  }
};

function removeMenuItem(restaurant, itemName, itemType) {
  for (var i = 0; i < restaurant.menus[itemType].length; i++) {
    if (itemName === restaurant.menus[itemType][i].name) {
      restaurant.menus[itemType].splice(i, 1);
      return `No one is eating our ${itemName} - it has been removed from the ${itemType} menu!`;
    }
  }
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
};






module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}