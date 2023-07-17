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

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
       //
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      //
      document.getElementById("output").innerHTML += row;
    });});}
    getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout (){
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}