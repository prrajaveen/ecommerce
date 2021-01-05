//parse data

cart = localStorage.getItem('cart')
if (cart == null) {
    var cartobj = {};
} else {
    cartobj = JSON.parse(cart)
}
cartlen = Object.keys(cartobj).length;
document.getElementById('cardItem').innerHTML = cartlen;

// for cart item
$('.addcard').click(function () {

    id = this.id.toString()
    if (cartobj[id] == undefined) {
        cartobj[id] = cartobj[id] + 1;
    } else {
        cartobj[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cartobj));
    cartlen = Object.keys(cartobj).length
    document.getElementById('cardItem').innerHTML = cartlen;
});



// popover generation
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
});
document.getElementById("popcard").setAttribute('data-bs-content', '<h5>Card</h5>')

// update cart
