function reconcileOrder(book, incomingOrder) {
  for (let i = 0; i < book.length && incomingOrder.quantity > 0; i++) {
    if (book[i].type !== incomingOrder.type &&
      book[i].price === incomingOrder.price) {
      let [order] = book.splice(i, 1)

      fulfillOrders(order, incomingOrder, book)
      i--
    }
  }
  book.push(incomingOrder)

  return book.filter(order => order.quantity !== 0)
}

function fulfillOrders(existingOrder, incomingOrder, book,) {
  if (existingOrder.quantity === incomingOrder.quantity) {
    existingOrder.quantity = 0
    incomingOrder.quantity = 0
  } else if (existingOrder.quantity < incomingOrder.quantity) {
    incomingOrder.quantity -= existingOrder.quantity
    existingOrder.quantity = 0
  } else {
    existingOrder.quantity -= incomingOrder.quantity
    incomingOrder.quantity = 0

    book.push(existingOrder)
  }
}

module.exports = reconcileOrder
