
var result;
let token = localStorage.getItem('token');
let id = localStorage.getItem('bookid');
console.log(id)
getbooks();
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

 