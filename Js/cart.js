window.addEventListener('DOMContentLoaded', function () {
  const placeOrderBtn = document.querySelector('.placeOrder')
  const AddressDetails = document.querySelector('.AddressDetails')
  const CustomerDetails = document.querySelector('.CustomerDetails')
  const continueButton = document.querySelector('.cntButton')
  const OrderSummary = document.querySelector('.OrderSummary')
  const OrderSummary1 = document.querySelector('.OrderSummary1')
  const cartContainer = document.querySelector('.cart-container')

  placeOrderBtn.addEventListener('click', function () {
    AddressDetails.style.display = 'none';
    CustomerDetails.style.display = 'flex';
    placeOrderBtn.style.display = 'none';
  })

  continueButton.addEventListener('click', function () {
    OrderSummary.style.display = 'none';
    OrderSummary1.style.display = 'flex';

  })

  var result;
  let cartItem_id;
  let token = localStorage.getItem('token');
  console.log(token)
  let id = localStorage.getItem('bookid');
  console.log(id)

  //  let data = {
  //   "quantityToBuy": 1,
  // }

  //getbooks();
  addtocart();
  function addtocart() {
    // console.log(token)
    $.ajax({
      url: `https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items`,
      type: 'GET',
      headers: {
        'x-access-token': token,
        'Content-type': 'application/json',  
      },
      // 'x-access-token': this.token,
      success: function (result) {
       // console.log(result.result);
        let bookNum3 = result.result;
        console.log(bookNum3);

        //cartContainer.innerHTML = bookNum3.map(function(cartItem) {
        document.getElementById('cartdemo').innerHTML = bookNum3.map((cartItem) =>
          `<div class="bookHead" id="${cartItem._id}">
         <div class="bookContainer" id="${cartItem._id}">
             <img src="../assets/Image 11.png" width="100%" height="100%" id="${cartItem._id}">
         </div>
         <div class="detailContainer" id="${cartItem._id}">
             <div class="bookName1" id="bookName">${cartItem.product_id.bookName}</div>
             <div class="author1" id="author">${cartItem.product_id.author}</div>
             <div class="price1" id="${cartItem._id}">
                 <div class="price11" id="${cartItem._id}">Rs. ${cartItem.product_id.discountPrice}</div>
                 <div class="originalPrice1" id="${cartItem._id}"> ${cartItem.product_id.price}</div>
             </div> <div class="counterHead" id="${cartItem._id}">
             <button class="counter-minus" id="${cartItem._id}">-</button>
             <div class="counter-display" id="${cartItem._id}">${cartItem.quantityToBuy}</div>
             
             <button class="counter-plus" id="${cartItem._id}">+</button>
             
             <button class="remove_Item" id="${cartItem._id}">Remove</button>  
     </div>
         </div>
     </div>`
         // } )
       )
      }
    })
  }

//  $(document).on('click', '.removeItem', function (event) {
  //   console.log(token)
  //   // console.log(event.target.id)

  //   $.ajax({
  //     url: `https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id}`,
  //     type: 'DELETE',
  //     // data: JSON.stringify(req),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'x-access-token':token,
  //     },
  //     success: function (result) {
  //       console.log(result);
  
  //     },
  //     error: function (error) {
  //       console.log(error);
  //     }
  //   });
  // })

  //  function addtocart() {
  //     $.ajax({
  //       url: `https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id}`,
  //       type: 'PUT',
  //       headers: {
  //         'x-access-token':token,
  //         'Content-Type': 'application/json',  
  //       },
  //       success: function (result) {

  //         },



  //         })
  //       }



})
