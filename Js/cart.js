window.addEventListener('DOMContentLoaded', function() {
const placeOrderBtn = document.querySelector('.placeOrder')
const AddressDetails = document.querySelector('.AddressDetails')
const CustomerDetails = document.querySelector('.CustomerDetails')
const continueButton = document.querySelector('.cntButton')
const OrderSummary = document.querySelector('.OrderSummary')
const OrderSummary1 = document.querySelector('.OrderSummary1')

placeOrderBtn.addEventListener('click', function() {
    AddressDetails.style.display = 'none';
    CustomerDetails.style.display = 'flex';
    placeOrderBtn.style.display = 'none';
})

continueButton.addEventListener('click', function() {
    OrderSummary.style.display = 'none';
    OrderSummary1.style.display = 'flex';

})

 var result;
 let token = localStorage.getItem('token');
 let id = localStorage.getItem('bookid');
 console.log(id)
 getbooks();
//  addtocart();
 function getbooks() {
   $.ajax({
     url: 'https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book',
     type: 'GET',
     headers: {
      'Content-Type': 'application/json',
      'x-access-token': this.token,
    },
     // 'x-access-token': this.token,
     success: function (result) {
       console.log(result.result);
       const bookarray = result.result;
         let array = bookarray.filter(function (book1) {
             return book1._id === id;
             // return book1.id == "616fdef274dbc1000e41e65b";
       })
       console.log(array)
       //  array.innerHTML = filterArry.map(function (book1) {
        document.getElementById('cartdemo').innerHTML = array.map((book1)=> 
         `<div class="bookDesc1">
         <div class="bookName1">${book1.bookName}</div>
         <div class="author1" id="author">${book1.author}</div>
         <div class="rating1">
             <div class="star1" id=${book1.id}>4.5*</div>
             <div class="starRating1" id=${book1.id}>(20)</div>
         </div>
         <div class="price1">
             <div class="price11" id=${book1.id}>Rs. ${book1.discountPrice}</div>
             <div class="originalPrice1" id=${book1.id}> ${book1.price}</div>
         </div>
     </div>`
        )
  }
 })
 }

 function addtocart() {
    $.ajax({
      url: 'https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items',
      type: 'GET',
      'Content-type': 'application/json',
      // 'x-access-token': this.token,
      success: function (result) {
        filterArry = Res.result.filter(function(book) {
            return book._id == cartQid;
        })

        console.log(filterArry)
        bookNum2 = filterArry.map(function(book3) {
            console.log(book3.quantityToBuy)
            cnt2 = book3.quantityToBuy

        });
      }
      })
  }
//  ajax(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${cartQid}`)
//             .then(function(result) {
//                 // console.log("hii")
//                 console.log(result);

//                 ajaxGet(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items`)
//                     .then(function(result) {

//                         $(`#${cartQid}.counter-display`).html(cnt2)
//                         let Res = JSON.parse(result);
//                         console.log(Res.result);

//                         filterArry = Res.result.filter(function(book) {
//                             return book._id == cartQid;
//                         })

//                         console.log(filterArry)
//                         bookNum2 = filterArry.map(function(book3) {
//                             console.log(book3.quantityToBuy)
//                             cnt2 = book3.quantityToBuy

//                         });



//                     })
//                     .catch(function(error) {
//                         console.log(error)

//                     });


//             })

})