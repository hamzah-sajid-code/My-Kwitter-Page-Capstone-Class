namee = localStorage.getItem('User name')
document.getElementById('name').innerHTML = namee;
function logout(){
      localStorage.removeItem('User name')
      window.location = 'index.html';
}
function addRoom(){
      romnum = 1;
      roomname = document.getElementById('id_room').value;
      localStorage.setItem(roomname, roomname);
      firebase.database().ref('/').child(roomname).update({
            'Room Name': roomname
      });
}
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names)
                  roomnamewithhash = "#"+Room_names;
                  outputthing = "<div id="+Room_names+" onclick='redirectToRoomname(this.id)'>"+roomnamewithhash+"</div><hr>"
                  document.getElementById('output').innerHTML += outputthing;
                  //End code
      });});}
function redirectToRoomname(room_name_functio){
      console.log(room_name_functio)
      localStorage.setItem('whichredirect', room_name_functio)
      window.location = 'kwitter_page.html';
}
getData();
