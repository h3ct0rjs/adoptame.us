//Create a simple model to the adoptar option
// when user add new pet to the cart, we want to update 
// the relation between cart and the user. Anonymous users 
// are able to add pets, will go to validate this before
module.exports = function Cart(oldCart) {
    //recreate the object to avoid search
    this.items = oldCart.items;
    this.totalQty = oldCart.totalQty;

    this.add = function(item, id) {
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = {
                item: item,
                qty: 0
            };
        }
        storedItem.qty++;
        this.totalQty++;
    }
    this.generaArray = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id])
        }
        return arr;
    };
};

