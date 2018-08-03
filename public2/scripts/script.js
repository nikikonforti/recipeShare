var config = {
  apiKey: "AIzaSyAMfXWVG5L8UPdI81-o2iBbpXjlaL0SYnI",
  authDomain: "recipeadd-7d44b.firebaseapp.com",
  databaseURL: "https://recipeadd-7d44b.firebaseio.com",
  projectId: "recipeadd-7d44b",
  storageBucket: "",
  messagingSenderId: "150849926450"
};
/*
var config = {
  apiKey: "AIzaSyB4IYzzkyAnfkA8pCj358tDFukdGUVpS-o",
  authDomain: "recipeshare-d0453.firebaseapp.com",
  databaseURL: "https://recipeshare-d0453.firebaseio.com",
  projectId: "recipeshare-d0453",
  storageBucket: "recipeshare-d0453.appspot.com",
  messagingSenderId: "282787222893"
};
*/
firebase.initializeApp(config);
firebase.initializeApp(config);

//HOMESCREEN
//var dbRefName = firebase.
var bigOne = document.getElementById('bigOne');
var dbRef = firebase.database().ref().child('text');
//  dbRef.on('value', snap => bigOne.innerText = snap.val());
dbRef.on("value", function(snapshot) {
  var data = snapshot.val();
  var name = snapshot.val().value;
  /*for(var key in data){
    console.log(key);

    bigOne.innerText += key;
    bigOne.innerText += data[key];
    bigOne.innerText += "  -  ";
  }*/
  var dataForTable = snapshot.val()

  google.charts.load('current', {'packages':['table']});
  google.charts.setOnLoadCallback(drawTable);
  function drawTable() {
    var dataT = new google.visualization.DataTable();
    dataT.addColumn('string', 'Recipe');
    dataT.addColumn('string', 'Ingredients');
    console.log(data);
    //console.log(data[key]);
    //dataT.addColumn('string', 'Makes for: ');
    //dataT.addColumn('string', 'Directions');
    /*dataT.addRows([
      [dataForTable, "bank"],
      ['8000',  "of"],
      ['12500', "america"],
      ['7000',  "states"]
    ]);*/
    for(var key in data){
      dataT.addRows([
        [key, data[key]]

      ]);
      console.log(key);
      console.log(data[key]);
    }

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(dataT, {showRowNumber: true, width: '100%', height: '100%'});
  }
  //console.log(snapshot.val());
  console.log(dataForTable);
  console.log("hello");
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});


console.log(snapshot.val());
//HOMESCREEN

function check(form){
  /*in real life this would check a database, return home page*/
  if(form.userid.value == "hi" && form.pswrd.value == "123"){
    window.open('https://www.google.com/maps')
  }
  else{
    alert("The username and password you entered don't match")
  }

}

function addUser(form){
  if(form.userid.value != "" && form.pswrd.value != ""){
    window.open('file:///Users/nikikonforti/Desktop/public/signup.html')
  }
  else{
    alert("You must enter a valid username and password to sign up")
  }
}

/*
java script files
script source
have it in you rhtml pages
use bundle.js for require
  make a separate folder, have a bunch of files dependent on each other
  then use browserify as a commandline
  bundle these scripts togeter in bundle.js
  include the bundle in your html file
this is what broswerify does which is fine
dont have firebase.js
either have a script tag which i have done in the site.html (firebase.initializeApp)
orrrrr you can use npm, inside the public folder npm install firebase, open script.js remove the ../
  looking in nodes_modules there is firebase
  html looks FITNESS

samb says i should:
  make a new folder with site and pic
  npm init
  then you get a package.json folder (dependency manager) and nodes_modules folder

  i want to be adding a recipe, which will have ten variables, then from javascript code, firebase.recipe(add)... directly to the firebase
*/
