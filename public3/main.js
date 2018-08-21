

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCvEjA5oyaXTv0HGVids2mWeU6pxVzOGbI",
  authDomain: "nazlitriesfirestore.firebaseapp.com",
  databaseURL: "https://nazlitriesfirestore.firebaseio.com",
  projectId: "nazlitriesfirestore",
  storageBucket: "nazlitriesfirestore.appspot.com",
  messagingSenderId: "1017701881603"
};
firebase.initializeApp(config);

var lol;
var firestore = firebase.firestore(); //const or var?
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
//var dataT = new google.visualization.DataTable();

function drawTable(){
  var bigOne = document.getElementById('bigOne');

  var dataT = new google.visualization.DataTable();
  dataT.addColumn('string', 'Recipe');
  dataT.addColumn('string', 'Serving Size');
  dataT.addColumn('string', 'Minutes');
  var dataArray = [];
  let element = "sadness";


  /*var dataEntry = new google.visualization.Table(document.getElementById('dataEntry_div'));
    google.visualization.events.addListener(dataEntry, 'select', function(){
        selectHandler(dataEntry);
    });*/
  //let collectionRef = firestore.collection('col');
  //let documentRef = collectionRef.doc('doc');
  //const recRef = firestore.collection('recipes').getData();
  //var first = db.collection("users").orderBy("first").limit(2)
  //var recRef = firestore.collection("recipes").where("sushi", ">=", 120).get();
  //console.log(recRef);
  // Import Admin SDK
  /*var admin = require("firebase-admin");

  // Get a database reference to our posts
  var db = admin.database();
  var ref = db.ref("server/saving-data/fireblog/posts");

  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });*/
  firestore.collection("recipes").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          console.log(doc);
          dataT.addRows([
          [doc.id, doc.data().serving, doc.data().minutes],
        ]);
          var table = new google.visualization.Table(document.getElementById('table_div'));
          var recGrow = new String(document.getElementById('bigRecipe'));
          console.log(doc.data().minutes);

          table.draw(dataT, {showRowNumber: true, width: '100%', height: '100%'});
          //document.querySelectorAll('#table_div tr td:nth-child(2)').forEach(function(element){element.addEventListener("click", function(){alert("dave!")})})
          document.querySelectorAll('#table_div tr td:nth-child(2)').forEach(function(element){
            //console.log(element.minutes);//not defined
            var individual = element.addEventListener("click", popRecipe)
            //console.log(individual);

          });

      });
  });
}


function getRecipeData(){
    console.log("HELLO");
    //var stored = localStorage.getItem("getLOL", lol);
    var stored = text.innerHTML;
    console.log(stored);
    /////const list_div = document.querySelector("#list_div");
    var example = document.getElementsByClassName("name");
    //console.log(firestore.collection("recipes").doc('name'));//get().querySnapshot.data);
    example[0] = stored;//firestore.collection("recipes");
    /*firestore.collection("recipes").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            //console.log(element.doc.data().minutes);
            //console.log(this().data().minutes);
            list_div.innerHTML += "<div class='name'>" + tester + "/div>"
            //document.querySelectorAll('#table_div tr td:nth-child(2)').forEach(function(element){
            });
        });
*/
        //list_div.innerHTML += "<div class='name'><h3>" + element.data().minutes + "</h3></div>"



}
//search_btn.addEventListener("click", doSearch);
function popRecipe(event) {
    console.log("dave sucks")
    //alert("Button clicked, id "+this.innerHTML+", text"+this.minutes);
    //var recipeID = this.id;
    var name = event.target || event.srcElement
    console.log("this is name: " + name.innerHTML);
    //var minutes = event.srcElement;
    //console.log(minutes);
    //var element = document.getElementById('table_div'); //to delete table
    //element.parentNode.removeChild(element);
    firestore.collection("recipes").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log("hi nazli");
          if(doc.id == name.innerHTML){
            console.log(doc.id + doc.data().minutes + doc.data().serving );
            //alert(" your recipe: " + "\n" + "\n" + "name: " + doc.id + "\n" + "it will take: " + doc.data().minutes + "\n" + "serving size: " + doc.data().serving
              //+ "\n" + "ingredient list: " + doc.data().ingredients + "\n" + "directions: " + doc.data().directions);
              //var div = document.createElement("div");
              var buttonReplace = document.getElementById("buttonlol");

              buttonReplace.innerHTML =
                  //'<div class="loginHS"  align="center">' +
                  '<input class ="submitButton" type="button" onclick="checkAN(this.form)" value="Go back"/>';
                  //'</div>';
              var div = document.getElementById("content");
//<textarea class='autoExpand' rows='3' data-min-rows='3' placeholder='Auto-Expanding Textarea'></textarea>
              div.innerHTML =
              //div.innerHTML =
                  '<div class="recipe-replace">\n' +
                  '<div class="title">your recipe: </div>\n' +
                  '<textarea readonly class="autoExpand" >' +doc.id + '</textarea>\n' +
                  '\n<div class="title">it will take: </div>\n' +
                  '<textarea readonly class="autoExpand">' +doc.data().minutes + '</textarea>\n' +
                  '\n<div class="title">serving size: </div>\n' +
                  '<textarea readonly class="autoExpand">' +doc.data().serving + '</textarea>\n' +
                  '\n<div class="title">ingredient list: </div>\n' +
                  '<textarea readonly class="autoExpand">' +doc.data().ingredients + '</textarea>\n' +
                  '\n<div class="title">directions: </div>\n' +
                  '<textarea readonly class="autoExpand">' +doc.data().directions + '</textarea>\n' +
                  '\n</div>\n';

              $(document)
              .one('focus.autoExpand', 'textarea.autoExpand', function(){
                  var savedValue = this.value;
                  this.value = '';
                  this.baseScrollHeight = this.scrollHeight;
                  this.value = savedValue;
              })
              .on('input.autoExpand', 'textarea.autoExpand', function(){
                  var minRows = this.getAttribute('data-min-rows')|0, rows;
                  this.rows = minRows;
                  rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
                  this.rows = minRows + rows;
              });

          }
        });
    });
    /*var tableData = (this).children("td").map(function() {
        return (this).text();
    }).get();

    console.log(tableData);*/
    //alert("serviceID :: " + recipeID);
    //console.log(element.id)
    //var popup = document.getElementById("myPopup");
    //popup.classList.toggle("show");
    //window.open("recipeGrow.html");
    //localStorage.setItem("getLOL", lol);

}

function draw(){
  google.charts.load('current', {'packages':['table']});
  google.charts.load("visualization", "1", {packages:["table"]});
  google.charts.setOnLoadCallback(drawTable);

}

/*
google.visualization.events.addListener(dataT, 'select', function () {
    var selection = chart.getSelection();
    if (selection.length) {
        var row = selection[0].row;
        document.querySelector('#myValueHolder').innerHTML = data.getValue(row, 1);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1, {
            type: 'string',
            role: 'style',
            calc: function (dt, i) {
                return (i == row) ? 'color: red' : null;
            }
        }]);

        chart.draw(view, options);
    }
});
*/


/*const list_div = document.querySelector("#list_div");
firestore.collection("recipes").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    console.log(doc)
    //dataT.addRows([
    list_div.innerHTML += "<div class='list-item'><h3>" + doc.data().minutes + "</h3></div>"

  });
  //var minData = doc.data().minutes
  //console.log(minData)
});*/

/*
function selectHandler(dataEntry) {
  var selection = dataEntry.getSelection();
  if(selection.length === 0)
      return;

  var cell = event.target; //get selected cell
  console.log("HELLO");
  document.getElementById('output').innerHTML = "Row: " +  selection[0].row + " Column: " +  cell.cellIndex;

}*/
//this is for getting the data from client side and put into database. this is how i should store new user info
function storeData(){
  //const minutesText = document.querySelector("#minute_field").value;
  //const servingText = dcotume.querySelector("#serving_field").value;

  var nameText = document.getElementById("name_field").value;
  var minuteText = document.getElementById("minute_field").value;
  var servingText = document.getElementById("serving_field").value;
  var ingredientsText = document.getElementById("ingredients_field").value;
  var directionsText = document.getElementById("directions_field").value;

  firestore.collection("recipes").doc(nameText).set({
    name: nameText,
    minutes: minuteText,
    serving: servingText,
    ingredients: ingredientsText, //make an array
    directions: directionsText
    //serving: "sup"
  })
  .then(function() {
    console.log("Document successfully written.");
  })
  .catch(function(error) {
    console.error("Error writing document.");
  });
}


/*firestore.collection("recipes").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
      console.log(doc);
      dataT.addRows([
      [doc.id, list_div, null],
    ]);
      var table = new google.visualization.Table(document.getElementById('table_div'));
      table.draw(dataT, {showRowNumber: true, width: '100%', height: '100%'});
  });
});*/

/*
<script>
  //var dbRefName = firebase.

  var dbRef = firebase.database().ref().child('text');
//  dbRef.on('value', snap => bigOne.innerText = snap.val());
  dbRef.on("value", function(snapshot) {
    var data = snapshot.val();
    var name = snapshot.val().value;
    for(var key in data){
      console.log(key);
      bigOne.innerText += key;
      bigOne.innerText += data[key];
      bigOne.innerText += "  -  ";
    }
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
      dataT.addRows([
        [dataForTable, "bank"],
        ['8000',  "of"],
        ['12500', "america"],
        ['7000',  "states"]
      ]);
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
  </script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);
      function drawTable() {
        var dataT = new google.visualization.DataTable();
        dataT.addColumn('string', 'Recipe');
        dataT.addColumn('string', 'Ingredients');
        //dataT.addColumn('string', 'Makes for: ');
        //dataT.addColumn('string', 'Directions');
        dataT.addRows([
          [data, "bank"],
          ['8000',  "of"],
          ['12500', "america"],
          ['7000',  "states"]
        ]);
        var table = new google.visualization.Table(document.getElementById('table_div'));
        table.draw(dataT, {showRowNumber: true, width: '100%', height: '100%'});
      }
    </script>
    */

function check(form){
  /*in real life this would check a database, return home page*/
  if(form.userid.value == "hi" && form.pswrd.value == "123"){
    window.location.replace('homescreen.html')
    /*'https://www.google.com/maps'*/
    /*file:///Users/nikikonforti/Desktop/homescreen.html*/
  }
  else{
    alert("The username and password you entered don't mattttch")
  }
}
function addUser(form){
  window.location.replace('signup.html')
}

//addNew functions:
function checkAN(form){
  /*in real life this would check a database, return home page*/
  window.location.replace('homescreen.html')
}

//homescreen functions:
function checkHS(form){
  /*in real life this would check a database, return home page*/
  window.location.replace('addNew.html')
}

function checkHSLO(form){
    /*in real life this would check a database, return home page*/
  window.location.replace('site.html')
}

//signup functions:
function checkSU(form){
  /*in real life this would check a database, return home page*/
  if((form.newUsername.value != "")&&(form.newPassword.value != "") && (form.newEmail.value!="")){
    window.location.replace('homescreen.html')
  }
  else{
    alert("Please fill out all information to sign up.")
  }
}

function openDoc(form){
  window.location.replace('site.html');
}

function LOform(form){
  window.location.replace('site.html');
}

/*
(function(){
//get elements:
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

//add login events
btnLogin.addEventListener('click', e => {
  //get user and pass
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();
  //sign in
  const promise = auth.signInWithEmailAndPassword(email, password);
  promise.catch(e => console.log(e.message));
});

//add sign up event
btnSignUp.addEventListener('click', e => {
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();
  //sign in
  const promise = auth.createUserWithEmailAndPassword(email, password);
  promise
    .catch(e => console.log(e.message));

});

btnLogout.addEventListener('click', e => {
  firebase.auth().signOut();
});

//add realtime listener:
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser){
    console.log(firebaseUser);
    btnLogout.classList.remove('hide');
  }
  else{
    console.log("not logged in.");
    btnLogout.classList.add('hide');
  }

});

}());*/
