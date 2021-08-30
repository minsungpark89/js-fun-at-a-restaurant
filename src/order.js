function takeOrder(deliveryOrder, orders) {
  if (orders.length < 3) {
    return orders.push(deliveryOrder);
  };
}

function takeOrder(orders, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(orders);
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1);
    }
  }
  return deliveryOrders;
}

function listItems(deliveryOrders) {
  var orderList = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    orderList.push(deliveryOrders[i].item);
  }
  return orderList.join(", ");
}

function searchOrder(deliveryOrders, itemName) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === itemName) {
      return true;
    }
  }
  return false;
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}