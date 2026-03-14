const params = new URLSearchParams(window.location.search)

const user = params.get("user")
const sticker = params.get("sticker")

if(!user || !USERS[user]){

alert("Usuario no válido")

}

document.getElementById("userName").innerText = USERS[user]

const storageKey = "album_"+user

let album = JSON.parse(localStorage.getItem(storageKey)) || []

if(sticker){

if(!album.includes(sticker)){

album.push(sticker)

localStorage.setItem(storageKey,JSON.stringify(album))

alert("🎉 Nuevo sticker desbloqueado!")

}

}

const stickers = document.querySelectorAll(".sticker")

stickers.forEach(box=>{

let id = box.dataset.id

if(album.includes(id)){

box.innerHTML = `<img src="stickers/${id}.png">`

}else{

box.innerHTML = "❓"

}

})

document.getElementById("progressText").innerText =
album.length + " / 12"
