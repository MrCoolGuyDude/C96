const firebaseConfig = {
    apiKey: "AIzaSyBRjmqmEwjDHS3bJ8_PzepMfvTjnOc8cDs",
    authDomain: "project94-f1d7b.firebaseapp.com",
    databaseURL: "https://project94-f1d7b-default-rtdb.firebaseio.com",
    projectId: "project94-f1d7b",
    storageBucket: "project94-f1d7b.appspot.com",
    messagingSenderId: "737354140675",
    appId: "1:737354140675:web:3c036f28440eb5c08e5236"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

window.location = "kwitter_room.html";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}


function getData(){

firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data('name');
message = message_data('message');
like = message_data('like')
name_with_tag = "<h4> "+ name +"<img class='user_tick' src'tick.png'></h4>";
message_with_tag = "h4 classs='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tage = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ Like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function logout() {
    localStorage.removeItem("user_name");
    locatStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name.push({
            name:user_name,
            message:msg,
            like:0
      }));
 
 document.getElementById("msg").value = "";
}