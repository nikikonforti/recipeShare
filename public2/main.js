
//site functions:
var config = {
  apiKey: "AIzaSyB4IYzzkyAnfkA8pCj358tDFukdGUVpS-o",
  authDomain: "recipeshare-d0453.firebaseapp.com",
  databaseURL: "https://recipeshare-d0453.firebaseio.com",
  projectId: "recipeshare-d0453",
  storageBucket: "recipeshare-d0453.appspot.com",
  messagingSenderId: "282787222893"
};
firebase.initializeApp(config);

function check(form){
  /*in real life this would check a database, return home page*/
  if(form.userid.value == "hi" && form.pswrd.value == "123"){
    window.open('file:///Users/nikikonforti/Desktop/public2/homescreen.html')
    /*'https://www.google.com/maps'*/
    /*file:///Users/nikikonforti/Desktop/homescreen.html*/
  }
  else{
    alert("The username and password you entered don't mattttch")
  }
}
function addUser(form){
  if(form.userid.value != "" && form.pswrd.value != ""){
    window.open('file:///Users/nikikonforti/Desktop/public2/signup.html')
  }
  else{
    alert("You must enter a valid username and password to sign up")
  }
}




//addNew functions:
  function checkAN(form){
    /*in real life this would check a database, return home page*/
    if(form.userid.value == "hi" && form.pswrd.value == "123"){
      window.open('https://www.google.com/maps')
    }
    else{
      alert("The username and password you entered don't match")
    }
  }



  //homescreen functions:
    function checkHS(form){
      /*in real life this would check a database, return home page*/
      if(form.userid.value == "hi" && form.pswrd.value == "123"){
        window.open('https://www.google.com/maps')
      }
      else{
        alert("The username and password you entered don't match")
      }
    }


      // Initialize Firebase
  /*    var config = {
        apiKey: "AIzaSyAMfXWVG5L8UPdI81-o2iBbpXjlaL0SYnI",
        authDomain: "recipeadd-7d44b.firebaseapp.com",
        databaseURL: "https://recipeadd-7d44b.firebaseio.com",
        projectId: "recipeadd-7d44b",
        storageBucket: "",
        messagingSenderId: "150849926450"
      };
      firebase.initializeApp(config);*/

      //var dbRefName = firebase.
    

//signup functions:
    function checkSU(form){
      /*in real life this would check a database, return home page*/
      if(form.userid.value == "hi" && form.pswrd.value == "123"){
        window.open('https://www.google.com/maps')
      }
      else{
          alert("The username and password you entered don't match")
        }
      }
