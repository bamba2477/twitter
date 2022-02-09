//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDNyWff9Bnv-nKf5WsWLokKVkbVfnwKXqk",
      authDomain: "twitter-ab0e3.firebaseapp.com",
      databaseURL: "https://twitter-ab0e3-default-rtdb.firebaseio.com",
      projectId: "twitter-ab0e3",
      storageBucket: "twitter-ab0e3.appspot.com",
      messagingSenderId: "951956927078",
      appId: "1:951956927078:web:902213af92153d9be473a7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value = "";
}