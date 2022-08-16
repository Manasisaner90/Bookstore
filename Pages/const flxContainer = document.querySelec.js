const flxContainer = document.querySelector('.flex-containernew')
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
//       console.log(result.params._id);
//       bookarray = result.params._id;
//       let filterArry = result.filter(function (book1) {
//       return book1._id == params._id;
// })
//       console.log(filterArry)
//       console.log(params._id)
      
//      document.getElementById('demo').innerHTML = note.map((book1) => {
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

var result;
let token = localStorage.getItem('token');
getNotes();
function getNotes() {
  $.ajax({
    url: 'https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book',
    type: 'GET',
    'Content-type': 'application/json',
    // 'x-access-token': this.token,
    success: function (result) {
      document.getElementById('demo').addEventListener('click', (d) => {

        console.log(d.target._id)
        //$(".popup").toggle();
        document.querySelector('.flex-containernew').innerHTML = `
      <div class="bookDesc1">
    <div class="bookName1" id="bookName">${book1.bookName}</div>
    <div class="author1" id="author">${book1.author}</div>
    <div class="rating1">
        <div class="star1">4.5*</div>
        <div class="starRating1">(20)</div>
    </div>
    <div class="price1">
        <div class="price11">Rs. ${book1.discountPrice}</div>
        <div class="originalPrice1"> ${book1.price}</div>
    </div>
</div>
<div class="bookDetails">
    <div class="bk1">Book Detail</div>
    <div class= "bk2"><p>${book1.description} </p></div>
</div>`
      }
)
},
error: function (error) {
  console.log(error);

}
});
}

$(document).on('click', '#Itrash', function (event) {
  console.log('deletetrue')
  console.log(event.target.id)
  let req =
  {
    "noteIdList": [event.target.id],
    "isDeleted": true
  }
  $.ajax({
    url: 'https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book',
    type: 'GET',
    data: JSON.stringify(req),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    success: function (result) {
      console.log(result);

    },
    error: function (error) {
      console.log(error);
    }
  });
})


document.getElementById('details').addEventListener('click', (c) => {
  console.log("book details", c.target);
  trasharray = notearray.filter((element) => {
    return element.book1._id === true;
  })
  displaytrash(trasharray)
})