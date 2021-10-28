// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6qIt0MiYAuGuzc06_RPGOf7giW9Wd2HI",
  authDomain: "abcd-qmfp.firebaseapp.com",
  databaseURL: "https://abcd-qmfp.firebaseio.com",
  projectId: "abcd-qmfp",
  storageBucket: "abcd-qmfp.appspot.com",
  messagingSenderId: "75495616295",
  appId: "1:75495616295:web:5b3f1ee1d3d74f286d4302",
  measurementId: "G-QN6H19MY2H"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // user_name=localStorage.getItem("user_name");
  // document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

  
  function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room name - "+Room_names);
 row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;

 //End code
 });});}
getData();

function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("room_name", name);
 window.location="chat_page.html";
}

function logOut(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}