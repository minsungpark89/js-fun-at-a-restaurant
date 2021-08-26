function takeOrder(order, orders) {
  if (orders.length < 3) {
    orders.push(order)

  }
}

function refundOrder(number, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === number) {
      deliveryOrders.splice(i, 1);
    }
  }
  return deliveryOrders;
}

function listItems(orders) {
  var items = [];
  for (var i = 0; i < orders.length; i++) {
    items.push(orders[i].item);
  }
  return items.join(", ");
}

function searchOrder(list, order) {
  var isListed = false;
  for (var i = 0; i < list.length; i++) {
    if (list[i].item === order) {
      isListed = true;
    }
  }
  return isListed;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}