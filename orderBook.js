// order = {type: `buy` or `sell`, quantity: 10, price: 9000}

// An order book tracks all buy and sell requests from traders for Bitcoin assets at various price levels. When a trader
// submits a trade it is either fulfilled immediately, if there is a matching order in the book, or it is added to the book to be fulfilled later.

function reconcileOrder(orderBook, incomingOrder) {
  console.log(orderBook)
  // orderBook = array of objects, incoming = object
  for (let i = 0; i < orderBook.length; i++) {
    // do something with it
    if (orderBook.type === incomingOrder.type && // if equal (`buy && `buy`) || ( `sell` && `sell`)
      orderBook.price === incomingOrder.price) { // if equal (9000 && 9000), for example
      // attempt to fulfill orders (eliminate both orders)
    } else { // if not equal
      incomingOrder.push(existingbook)
    }
  }
  // for this function, we know the order objects have the same type && price
  function fulfillOrders(existingBook, incomingOrder) { // existingBook = object, incomingOrder = object
    if (existingBook.quantity === incomingOrder.quantity) {
      existingBook.quantity = 0 // setting the existingOrder's quantity to 0 signifies that it is fulfilled. and start at beginning of array again??
      incomingOrder.quantity = 0 // setting the incomingOrder's quantity to 0 signifies that it is fulfilled. and start at beginning of the array again??
    } else if (existingBook.quantity !== incomingOrder.quantity) { // if existingOrder quantity is NOT equal to incomingOrder quantity
      incomingOrder.push(existingBook) // then push that order into the exsisting book array to recirculate
    } if (existingBook.type === incomingOrder.type && existingBook.quantity >=
      incomingOrder.quantity && existingBook.price === incomingOrder.price) {
      return true
    } else {
      return incomingOrder.quantity.push(existingBook)
    }
  }
}
// existingBook.quantity - incomingOrder.quantity =  // if the right type, the right price and lower quantity 
// then in existing book fulfill and return the remainder to existing book
// if it meets nothing then it has to go to existing order



module.exports = reconcileOrder








































































/* function reconcileOrder(incomingOrder) {
  let existingBook = []

  for (var i = 0; i < incomingOrder.length; i++) {
    if (existingBook.indexOf(incomingOrder[i]))
      existingBook.push(incomingOrder[i])
  }

  return existingBook
}

module.exports reconcileOrder*/
