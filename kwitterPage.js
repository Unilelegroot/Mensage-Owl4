const firebaseConfig = {
    apiKey: "AIzaSyCyNPj2YwJ3lX71FJRJFl6TtblVk_w8pUk",
    authDomain: "mensage-owl.firebaseapp.com",
    databaseURL: "https://mensage-owl-default-rtdb.firebaseio.com",
    projectId: "mensage-owl",
    storageBucket: "mensage-owl.appspot.com",
    messagingSenderId: "239315294435",
    appId: "1:239315294435:web:dbb28f46017893b3228dd6"
  };
//dados do firebase
firebase.initializeApp(firebaseConfig);


function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebaseMessageId = childKey;
    messageData = childData;

}});});}
getData();

function logout (){
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location = "index.html";
  }

userName = localStorage.getItem('userName');
roomName = localStorage.getItem('roomName');

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
        name: userName,
        message:msg,
        like:0
    })
}
