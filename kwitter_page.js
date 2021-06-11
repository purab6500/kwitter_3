//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyAQ_4XmmwIKoFsuiMrQrfj_5Hg-E4KB-_o",
      authDomain: "kwitter-81937.firebaseapp.com",
      databaseURL: "https://kwitter-81937-default-rtdb.firebaseio.com",
      projectId: "kwitter-81937",
      storageBucket: "kwitter-81937.appspot.com",
      messagingSenderId: "414502224131",
      appId: "1:414502224131:web:f55e524fd2726dc6566936"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_names=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_names).push({
                name:user_name,
                massage:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
