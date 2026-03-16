const params = new URLSearchParams(window.location.search);

const user = params.get("user");
const sticker = params.get("sticker");

if (!user || !USERS[user]) {
document.getElementById("username").innerText = "Usuario no válido";
}

document.getElementById("username").innerText = USERS[user];

let album = JSON.parse(localStorage.getItem("album_"+user)) || [];

if(sticker && !album.includes(sticker)){
album.push(sticker);
localStorage.setItem("album_"+user, JSON.stringify(album));
}

for(let i=1;i<=12;i++){

let img = document.getElementById("sticker"+i);

if(album.includes(i.toString())){
img.src = "stickers/"+i+".png";
}

}

document.getElementById("progress").innerText = album.length+" / 12";
