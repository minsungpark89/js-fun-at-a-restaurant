class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }
 
  greetCustomer(name, morning) {
    if (morning === true) {
      return `Good morning, ${name}!`;
      } else {
      return `Hello, ${name}!`;
      }
    }

  checkForFood(food) {
    if (this.restaurant.menus[food.type].includes(food)) {
      return `Yes, we're serving ${food.name} today!`;
      } else {
      return `Sorry, we aren't serving ${food.name} today.`;
      }
    };
}



module.exports = Chef;