
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
      console.log(result.result);
      bookarray = result.result;
      document.getElementById('demo').innerHTML = bookarray.map((book) => `
        <div class="box">
        <div class="imgContainer" >
        <img src="../assets/Image 11.png" style="height:160px;width:140px; margin-top:23px;">
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
}

//<div class="book"id=${book.bookImage}><img src="/Assets/bookListing.png" class ="img"> </div>
{/* <span class="text-center" style="width:3px; height:22px;background-color:green;border-radius:3px;">4.5</span>
<p class="mb-4"><b>Rs.${book.discountPrice} </b> Rs.${book.price}</p> */}