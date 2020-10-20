//order = {type: `buy` or `sell`, quantity: 10, price: 9000}

//An order book tracks all buy and sell requests from traders for Bitcoin assets at various price levels. When a trader su
//submits a trade it is either fulfilled immediately, if there is a matching order in the book, or it is added to the book to be fulfilled later.

function reconcileOrder(orderBook, incomingOrder) { // orderBook = array of objects, incoming = object
  for (let i = 0; i < orderBook.length; i++) {
    // do something with it
    if (orderBook.type === incomingOrder.type && // if equal (`buy && `buy`) || ( `sell` && `sell`)
      orderBook.price === incomingOrder.price) { // if equal (9000 && 9000), for example
      // attempt to fulfill orders (eliminate both orders)
    } else { //if not equal
      incomingOrder.push(existingbook)
    }
  }
}
// for this function, we know the order objects have the same type && price
function fulfillOrders(existingBook, incomingOrder) { // existingBook = object, incomingOrder = object
  if (existingBook.quantity === incomingOrder.quantity) {
    existingBook.quantity = 0 // setting the existingOrder's quantity to 0 signifies that it is fulfilled.
    incomingOrder.quantity = 0 // setting the incomingOrder's quantity to 0 signifies that it is fulfilled.
  } else if (existingBook.quantity !== incomingOrder.quantity) {
    incomingOrder.push(existingBook)
  }

} else
  // handle the other condition (else if)
  // handle the last condition (else)








































































/*function reconcileOrder(incomingOrder) {
  let existingBook = []

  for (var i = 0; i < incomingOrder.length; i++) {
    if (existingBook.indexOf(incomingOrder[i]))
      existingBook.push(incomingOrder[i])
  }

  return existingBook
}

module.exports reconcileOrder*/
