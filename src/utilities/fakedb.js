// Use local storage as your db for now

const addToDb = id => {
    // const exits = localStorage.getItem(id);
    // console.log(exits);
    // if (!exits) {
    //     localStorage.setItem(id, 1);
    // }
    // else {
    //     const newCount = parseInt(exits) + 1;
    //     localStorage.setItem(newCount);
    // }
    const exits = localStorage.getItem('shopping_cart');
    let shopping_cart = {};

    if (!exits) {
        shopping_cart[id] = 1;
    }
    else {
        shopping_cart = JSON.parse(exits);
        if (shopping_cart[id]) {
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
        }
        else {
            shopping_cart[id] = 1;
        }
    }
    localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart));
}

const getDb = () => localStorage.getItem('shopping_cart');
const updateDb = cart => localStorage.setItem('shopping_cart', JSON.stringify(cart));
const removeFromDb = id => {
    const exits = getDb();
    if (!exits) {

    }
    else {
        const shopping_cart = JSON.parse(exits);
        delete shopping_cart[id];
        updateDb(shopping_cart);
    }
}

export { addToDb, removeFromDb }