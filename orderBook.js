// order = {type: `buy` or `sell`, quantity: 10, price: 9000}

// An order book tracks all buy and sell requests from traders for Bitcoin assets at various price levels. When a trader
// submits a trade it is either fulfilled immediately, if there is a matching order in the book, or it is added to the book to be fulfilled later.

function reconcileOrder(book, incomingOrder) {
  // book = array of objects, incoming = object
  for (let i = 0; i < book.length && incomingOrder.quantity > 0; i++) {
    if (book[i].type !== incomingOrder.type && // if equal (`buy && `sell`) || ( `sell` && `buy`)
      book[i].price === incomingOrder.price) { // if equal (9000 && 9000), for exampleif (existingBook.quantity === incomingOrder.quantity) {
      fulfillOrders(book[i], incomingOrder)
    }
  }
  book.push(incomingOrder)

  return book.filter(order => order.quantity !== 0)
}

// for this function, we know the order objects have the same type && price
function fulfillOrders(existingOrder, incomingOrder) {
  // existingBook = object, incomingOrder = object

  // then push that order into the exsisting book array to recirculate
  if (existingOrder.quantity === incomingOrder.quantity) {
    existingOrder.quantity = 0 // setting the existingOrder quantity to 0 signifies that it is fulfilled. and start at beginning of array again??
    incomingOrder.quantity = 0 // setting the incomingOrder's quantity to 0 signifies that it is fulfilled. and start at beginning of the array again??
  } else if (existingOrder.quantity < incomingOrder.quantity) {
    incomingOrder.quantity -= existingOrder.quantity
    existingOrder.quantity = 0
  } else {
    existingOrder.quantity -= incomingOrder.quantity
    incomingOrder.quantity = 0// existingOrder.quantity > incomingOrder.quantity

  }
}


module.exports = reconcileOrder








































































