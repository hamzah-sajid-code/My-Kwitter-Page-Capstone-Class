// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAgSxHfvDmYpSEASj3z2Ke6xm3QY0G2a_Y",
    authDomain: "kwitter-c5253.firebaseapp.com",
    projectId: "kwitter-c5253",
    storageBucket: "kwitter-c5253.appspot.com",
    messagingSenderId: "1082848029688",
    appId: "1:1082848029688:web:6d171d518d8d0b3b4b440d",
    measurementId: "G-5Q0JPXNQSC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
roomid = localStorage.getItem('whichredirect')
usernamesa = localStorage.getItem('User name')
console.log(roomid)
console.log(usernamesa)
// firebase.database().ref("/"+roomid).on('value', function(snapshot) {
//     document.getElementById("message_output").innerHTML = "";
//     snapshot.forEach(function(childSnapshot) {
//           childKey  = childSnapshot.key;
//           Room_names = childKey;
//           //Start code
//           console.log(Room_names)
//           outputthing = "<div id="+Room_names+" onclick='redirectToRoomname(this.id)'>"+roomnamewithhash+"</div><hr>"
//           document.getElementById('output').innerHTML += outputthing;
//           //End code
// });});}
function send(){
    messageval = document.getElementById('msg').value;
    document.getElementById('msg').value = "";
    firebase.database().ref('/'+roomid).child('/').update({
        name:usernamesa,
        message:messageval,
        like:0
    });
}
function logout(){
    localStorage.removeItem('User name');
    localStorage.removeItem('whichredirect')
    window.location = 'index.html';
}