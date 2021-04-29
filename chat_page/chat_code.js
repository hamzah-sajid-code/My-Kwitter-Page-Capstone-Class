user_name = localStorage.getItem('myUnAme')
room_name = localStorage.getItem('chatRoomId');
document.getElementById('chatroomtitle').innerHTML = "Kwitter Chat "+room_name;
document.getElementById('roomname').innerHTML = room_name;
uname = localStorage.getItem('myUnAme');
document.getElementById('user_name_display').innerHTML = uname;
function logout() {
    localStorage.removeItem('myUnAme');
    window.location = 'C:\\Users\\Hamzah2030\\Desktop\\kwitter project\\index.html';
}