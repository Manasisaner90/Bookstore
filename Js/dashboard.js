
window.addEventListener('DOMContentLoaded', function() {
const cart = document.querySelector('.cart')


var result;
let token = localStorage.getItem('token');
getbooks();
myFunction()
function getbooks() {
  $.ajax({
    url: 'https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book',
    type: 'GET',
    headers:{
      'x-access-token': token,
      'Content-type': 'application/json',
    },
    success: function (result) {
      console.log(result.result);
      bookarray = result.result;
      document.getElementById('demo').innerHTML = bookarray.map((book) => `
        <div class="box">
        <div class="imgContainer" >
        <img onclick="myFunction()" id="${book._id}" src="../assets/Image 11.png" style="height:160px;width:140px; margin-top:23px;">
        </div>
        <div class="mt-3 pl-4" style="height:99px; background-color:#fff">
        <p class="mb-0"><b>${book.bookName}</b></p>
        <p class="mb-0">${book.author}</p>  
        <div class="rating">
        <div class="star" id=${book._id}>4.5*</div>
        <div class="starRating" id=${book._id}>(20)</div>
        </div>
        <div class="price">
        <div class="price1">Rs. ${book.discountPrice}</div>
        <div class="originalPrice"> ${book.price}</div>
        </div>
        </div>
        </div>
      `
      )
    },
    error: function (error) {
      console.log(error);
    }
  });

  cart.addEventListener('click', function() {
    window.location.href = '../Pages/cart.html';
  })
  
  // $(document).on('click', '.box', function (event) {
  //   console.log(event.target.id)
  //   console.log(event.target.textContent)

  //   window.location = `http://localhost:5501/Pages/displayBook.html?id=${event.target.id}`
  // })

//   const id = localStorage.getItem('id');
//   const bookName = localStorage.getItem('id');
//   const author = localStorage.getItem('author');
//   const price = localStorage.getItem('price');
//   const discountPrice = localStorage.getItem('discountPrice'); 

//   window.localStorage.setItem('bookName', 'id')


//   const myObject = {
//     id:id,
//     bookname : bookName,
//     author : author,
//     price : price,
//     discountPrice : discountPrice
//   }
 
//   window.localStorage.setItem("myObject", JSON.stringify(myObject));

//   let newObject = window.localStorage.getItem("myObject");
// console.log(JSON.parse(newObject));

// getNotes();
// function getNotes() {
//   $.ajax({
//     url: 'https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book',
//     type: 'GET',
//     'Content-type': 'application/json',
//     // 'x-access-token': this.token,
//     success: function (result) {
//       document.getElementById('demo').addEventListener('click', (d) => {

//         console.log(d.target._id)
//         //$(".popup").toggle();
//         document.querySelector('.flex-containernew').innerHTML = `
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
//     <div class= "bk2"><p>${book1.description} </p></div>
// </div>`
//       }
// )
// },
// error: function (error) {
//   console.log(error);

// }
// });
// }
}
function myFunction() {
  
  document.getElementById('demo').addEventListener('click',(f)=>{
  console.log(f.target.id)
  localStorage.setItem('bookid', f.target.id)
  window.open("displaybook.html");
    })
     
  
    
  }
})
