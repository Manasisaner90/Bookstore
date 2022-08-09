// myFunction();
function myFunction() {
    var x = document.getElementById("div1");
    document.getElementById("div2").style.display = "none";
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function mydiv() {
    var y = document.getElementById("div2");
    document.getElementById("div1").style.display = "none";
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  }

  var fullName = document.getElementById('fullName').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var phone = document.getElementById('phone').value;

  let data={
      email: email,
      password: password
    }
  
console.log(data);
$.ajax({
    url: 'https://bookstore.incubation.bridgelabz.com/bookstore_user/login',
    type: 'POST',
    data:data,
    'Content-Type': 'application/json',
    success: function (result) {
        console.log(result);
    },
    error: function (error) {
      console.log(error);
    }
 });