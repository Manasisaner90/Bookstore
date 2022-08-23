
var result;
let token = localStorage.getItem('token');
let id = localStorage.getItem('bookid');
console.log(id)
getbooks();
addtocart()
function getbooks() {
  $.ajax({
    url: 'https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book',
    type: 'GET',
    'Content-type': 'application/json',
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
       document.getElementById('demo').innerHTML = array.map((book1)=> 
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
    </div>
    <div class="bookDetails">
        <div class="bk1">Book Detail</div>
        <div class= "bk2"><p>${book1.description} </p></div>
    </div>`
       )
 }
})
}
 
//Add to cart Api call

// let counterDisplay = document.getElementById('counter-display');

// $(document).on('click', '#bagButton', function (e){
//   bagButton.style.display = 'none'
//   productCounter.style.display = "flex"
//   counterDisplay.innerHTML = 1;
//   let object = {
//       product_id: params.id,
//   }
//   console.log(e.object)
//   let b = object.product_id
//   console.log(b)
// })
  function addtocart() {
    $.ajax({
      url: 'https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items',
      type: 'GET',
   
      headers:{
        'x-access-token': this.token,
        'Content-type': 'application/json',
      },
      success: function (result) {
        let Res = JSON.parse(result);
        // console.log(Res.result);
        let bookNum3 = Res.result
        console.log(bookNum3);
        // console.log(bookNum3.quantityToBuy)

        filterArry3 = bookNum3.filter(function(book) {
            // console.log(book)
            return book.product_id._id == params.id;
            // quant = filterArry3.quantityToBuy

        })
        console.log(filterArry3)

        quant = filterArry3.map(function(book) {
            if (book.quantityToBuy > 0) {
                bagButton.style.display = 'none';
                productCounter.style.display = 'flex';

            }
            console.log(book.quantityToBuy)
            return book.quantityToBuy



        })

        counterDisplay.innerHTML = quant[0]
        console.log(quant)

    
    .catch(function(error) {
        console.log(error)
            // An error occurred
    });

      }
      })
  }
  let addbtn = document.querySelector('#counter-plus');
  let subbtn = document.querySelector('#counter-minus');
  let  qty = document.querySelector('#quantity');
  let data = {
    "quantityToBuy": 1,
  }
  console.log(data)
  console.log(data.quantityToBuy);
  let actObj = JSON.stringify(data);
   $.ajax({
        url: `https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id}`,
        type: 'PUT',
        data : JSON.stringify(data),
        headers:{
          'Content-type': 'application/json',
          'x-access-token': this.token,
        }, 
        success: function (result) {
          console.log(result.result.accessToken)
    }
  })

 
  // console.log(addbtn,subbtn,qty)

  addbtn.addEventListener('click',() =>{
    qty.value = parseInt(qty.value)+1;
  });
  subbtn.addEventListener('click',()=>{
    if(qty.value <= 0){
      qty.value = 0;
    }
    else{
      qty.value = parseInt(qty.value) - 1;
    }
  })


//   $.ajax({
//     url: 'ajax(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/',
//     type: 'GET',
//     'Content-type': 'application/json',
//     // 'x-access-token': this.token,
//     success: function () {

//     }
//     })
 

//   decreaseNumber = (incdec) => {
//     var itemval = document.getElementById(incdec);
 
//     if(itemval.value <= 0){
//       itemval.value = 5;
//     }else{
//     itemval.value=parseInt(itemval.value)-1;
//     }
//     // console.log(itemval.value) 
// }
//  increaseNumber = (incdec) => {
//  var itemval = document.getElementById(incdec);
// if(itemval.value >= 5){
//   itemval.value = 5;
// }else{
// itemval.value=parseInt(itemval.value)+1;
// }
// }
// console.log(itemval.value) 

//  //   Add to Wishlist
//     const alWish1 = document.getElementById('alWish1')
//     $(document).on('click', '#wishButton', function (e) {

//       alWish1.style.display = 'flex'
//       wishButton.style.display = 'none'

//       let objWish = {
//           product_id: params.id,

//       }

//       console.log(objWish);

//       requirejs(['../service/dataService.js'], function(methods) {
//           methods.wish(objWish).then(function(wishResponse) {
//               console.log(wishResponse)

//           })
//       })

//   })

//   requirejs(['../service/dataService.js'], function(methods) {
//     methods.addCart(object).then(function(cartResponse) {
//         console.log('bag')

//         console.log(cartResponse)
// let bookarray = localStorage.getItem('bookarray')
// console.log(bookarray)
// function match(id){
//   return  bookid
// }
//   function match(id, bookarray) {
//     return bookarray.filter(function(bookid) {
//       if(bookid.id == id) {
//         return bookid 
//       }
//     })
//   }
    
// })
//   })
// const item = bookarray.filter (myfunction);        
// document.getElementById("demo").innerHTML =item;
// function myfunction(bookid,bookname){
//   return id == bookid;
// }
   
        // var item = bookarray.filter(function (book) {
        //     return book.id === id;
        // });
      

 
//   document.querySelector('.flex-containernew').innerHTML =`
//   <div class="bookDesc1">
//   <div class="bookName1" id="bookName">${bookid.bookName}</div>
//   <div class="author1" id="author">${bookid.author}</div>
//   <div class="rating1">
//       <div class="star1">4.5*</div>
//       <div class="starRating1">(20)</div>
//   </div>
//   <div class="price1">
//       <div class="price11">Rs. ${bookid.discountPrice}</div>
//       <div class="originalPrice1"> ${bookid.price}</div>
//   </div>
// </div>
// <div class="bookDetails">
//   <div class="bk1">Book Detail</div>
//   <div class= "bk2"><p><p>${bookid.description}</p></div>
// </div>`

 