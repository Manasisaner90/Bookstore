function login(){
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

//login Api call

let req ={
email: "saragadam.neeraja@bridgelabz.com",
password: password
}

console.log(req);
 let token = localStorage.getItem('token');
$.ajax({
url: 'https://bookstore.incubation.bridgelabz.com/bookstore_user/login',
type: 'POST',
  data: JSON.stringify(req),
// data:req,
headers :{
  'Content-Type': 'application/json',
  // 'x-access-token': this.token,
   'Authorization':token,
},
 
success: function (result) {
  console.log(result);
  localStorage.setItem('token',result.result.accessToken);
  window.location = "../Pages/dashboard.html"
},
error: function (error) {
console.log(error);
}
});
}