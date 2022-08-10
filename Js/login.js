function login(){
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
//login Api call

let req ={
email: "saragadam.neeraja@bridgelabz.com",
password: password
}

console.log(req);
$.ajax({
url: 'https://bookstore.incubation.bridgelabz.com/bookstore_user/login',
type: 'POST',
data:req,
'Content-Type': 'application/json',
success: function (result) {
  console.log(result);
},
error: function (error) {
console.log(error);
}
});
}