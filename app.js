const params = new URLSearchParams(window.location.search);

const user = params.get("user");
const sticker = params.get("sticker");

if (!user || !USERS[user]) {
    document.body.innerHTML = "<h2>Usuario no válido</h2>";
    throw new Error("Usuario inválido");
}

document.getElementById("username").textContent = USERS[user];

let album = JSON.parse(localStorage.getItem("album_" + user)) || [];

if (sticker && !album.includes(sticker)) {
    album.push(sticker);
    localStorage.setItem("album_" + user, JSON.stringify(album));
    alert("🎉 Nuevo sticker agregado!");
}

for (let i = 1; i <= 12; i++) {

    const img = document.getElementById("sticker" + i);

    if (album.includes(i.toString())) {
        img.src = "stickers/" + i + ".png";
    } else {
        img.src = "imagenes/locked.png";
    }

}

document.getElementById("progress").textContent = album.length + " / 12";
