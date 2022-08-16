// window.addEventListener('DOMContentLoaded', function () {
//   const urlSearchParams = new URLSearchParams(window.location.search);
//   console.log(urlSearchParams)
// const flxContainer = document.querySelector('.flex-containernew')


// var result;
// const params = Object.fromEntries(urlSearchParams.entries());
// console.log(params.id);
// getNotes();
// function getNotes() {
//   $.ajax({
//     url: 'https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book',
//     type: 'GET',
//     'Content-type': 'application/json',
//     // 'x-access-token': this.token,
//     success: function (result) {
//       console.log(result.params.id);
//       bookarray = result.params.id;
//       let array = res.filter(function (book1) {
//       return book1.id == params.id;
// })
//       console.log(filterArry)
//       console.log(params.id)
      
//      array.innerHTML = filterArry.map(function(book1) {
//       return `<div class="bookDesc1">
//       <div class="bookName1" id="bookName">${book1.bookName}</div>
//       <div class="author1" id="author">${book1.author}</div>
//       <div class="rating1">
//       <div class="star1" id=${book1._id}>4.5*</div>
//       <div class="starRating1" id=${book1._id}>(20)</div>
//     </div>
//     <div class="price1">
//         <div class="price11" id=${book1._id}>Rs. ${book1.discountPrice}</div>
//         <div class="originalPrice1" id=${book1._id}> ${book1.price}</div>
//     </div>
// </div>
// <div class="bookDetails">
//     <div class="bk1">Book Detail</div>
//     <div class= "bk2"><p>${book1.description} </p></div>
// </div>`
// })
//     }
//   })
// }
// })

// var result;
// let token = localStorage.getItem('token');
// getNotes();
// function getNotes() {
//   $.ajax({
//     url: 'https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book',
//     type: 'GET',
//     'Content-type': 'application/json',
//     // 'x-access-token': this.token,
//     success: function (result) {
//       console.log(result.result);
//       bookarray = result.result._id;
//       document.getElementById('div2').innerHTML = bookarray.map((book1) => `
//       <div class="bookDesc1">
//     <div class="bookName1" id="bookName">${book1.bookName}</div>
//     <div class="author1" id="author">${book1.author}</div>
//     <div class="rating1">
//         <div class="star1">4.5*</div>
//         <div class="starRating1">(20)</div>
//     </div>
//     <div class="price1">
//         <div class="price11">Rs. ${book1.discountPrice}</div>
//         <div class="originalPrice1"> ${book1.price}</div>
//     </div>
// </div>
// <div class="bookDetails">
//     <div class="bk1">Book Detail</div>
//     <div class= "bk2"><p><p>${book1.description}</p></div>
// </div>`
// )
// },
// error: function (error) {
//   console.log(error);

// }
// });
// }
// var result;
// document.getElementById('demo').innerHTML = map((book1) => {


//   console.log(hii)
//   //$(".popup").toggle();
//   document.querySelector('.flex-containernew').innerHTML =`<div class="bookDesc1">
//   <div class="bookName1" id="bookName">${book1.bookName}</div>
//   <div class="author1" id="author">${book1.author}</div>
//   <div class="rating1">
//       <div class="star1">4.5*</div>
//       <div class="starRating1">(20)</div>
//   </div>
//   <div class="price1">
//       <div class="price11">Rs. ${book1.discountPrice}</div>
//       <div class="originalPrice1"> ${book1.price}</div>
//   </div>
// </div>
// <div class="bookDetails">
//   <div class="bk1">Book Detail</div>
//   <div class= "bk2"><p><p>${book1.description}</p></div>
// </div>`
// })
