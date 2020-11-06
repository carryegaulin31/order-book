function reconcileOrder(book, incomingOrder) {
  for (let i = 0; i < book.length && incomingOrder.quantity > 0; i++) {
    if (book[i].type !== incomingOrder.type &&
      book[i].price === incomingOrder.price) {
      let [order] = book.splice(i, 1) // removes the order and destructures it from the array to be a single object

      fulfillOrders(order, incomingOrder, book)
      i-- // rolls back the i variable as we have removed an item from the array
    }
  }
  book.push(incomingOrder)

  return book.filter(order => order.quantity !== 0)
}

// for this function, we know the order objects have the same type && price
function fulfillOrders(existingOrder, incomingOrder, book,) {
  // existingBook = object, incomingOrder = objec
  if (existingOrder.quantity === incomingOrder.quantity) {
    existingOrder.quantity = 0 // setting the existingOrder quantity VALUE to 0 signifies that it is fulfilled. and start at beginning of array again??
    incomingOrder.quantity = 0 // setting the incomingOrder's quantity to 0 signifies that it is fulfilled. and start at beginning of the array again??
  } else if (existingOrder.quantity < incomingOrder.quantity) {
    incomingOrder.quantity -= existingOrder.quantity
    existingOrder.quantity = 0
  } else {
    existingOrder.quantity -= incomingOrder.quantity
    incomingOrder.quantity = 0 // existingOrder.quantity > incomingOrder.quantity

    book.push(existingOrder)
  }

  // return book
}

module.exports = reconcileOrder
