const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");



function openFullImage(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}


function closeFullImg() {
    fullImgBox.style.display = "none";
}