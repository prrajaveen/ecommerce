// for scaling

  
  
  
  // useful jquery attribute
  // $('classname').on('click','button.id' function()){
  
  // }$( document ).ready(function() {

  

  $('.card').mouseover(function () {
    let id = this.id
    $('#' + id).addClass("raja")
  });
  
  
  if(localStorage.getItem('cart')==null){
    var cart={}
  }else{
    cart = JSON.parse(localStorage.getItem('cart'));
  }
  $('.addcard').click(function () {
    let id = this.id.toString()
    if(cart[id]==undefined){
      cart[id]=1
    }else{
      cart[id]=cart[id]+1
    }
    update(cart, id)
    updatecart(cart, id)
  });
  
  //generate html for plus minus
  function update(cart, thisid) {
    for (var item in cart) {
      id = 'p' + item.slice(2,);
      if (item == thisid) {
        document.getElementById(id).innerHTML = `<button id='${'minus' + item}' class='btn btn-primary'>-</button>
                                                <span id='${'val' + item}' class='mx-2'>${cart[item]}</span>
                                                <button id='${'plus' + item}' class='btn btn-primary'>+</button>`
      }
    }
  }
  
  //plus and minus logic
  function updatecart(cart, id) {
    $('#minus' + id).click(function () {
      cart[id] = cart[id] - 1
      cart[id] = Math.max(0, cart[id])
      document.getElementById('val' + id).innerHTML = cart[id]
      localStorage.setItem('cart', JSON.stringify(cart))
      console.log(cart)
    });
    
    $('#plus' + id).click(function () {
      cart[id] = cart[id] + 1
      document.getElementById('val' + id).innerHTML = cart[id]
      localStorage.setItem('cart', JSON.stringify(cart))
      console.log(cart)
    }); 
  }
  
  