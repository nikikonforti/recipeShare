var admin = require("firebase");

window.addUser =function(form){
  var config = {
    apiKey: "AIzaSyB4IYzzkyAnfkA8pCj358tDFukdGUVpS-o",
    authDomain: "recipeshare-d0453.firebaseapp.com",
    databaseURL: "https://recipeshare-d0453.firebaseio.com",
    projectId: "recipeshare-d0453",
    storageBucket: "recipeshare-d0453.appspot.com",
    messagingSenderId: "282787222893"
  };
  firebase.initializeApp(config);

  firebase.database().ref('user').set({
  user: form.userid.value,
  password: form.pswrd.value
});
};
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
