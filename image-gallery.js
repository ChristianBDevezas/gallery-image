const images = document.querySelectorAll(".slider__image");
const totalImages = images.length;
const names = document.querySelectorAll(".slider__content__item h4");
const arrowButtons = document.querySelectorAll(".arrow-btn");
const btnSound = document.getElementById("btn-sound");
let index = 2;

function removeEffect() {
    images.forEach((image) => image.classList.remove("current-img"));
    names.forEach((name) => name.classList.remove("current-txt"));
}

function checkCurrentImage() {
    if(index < 0) index = totalImages - 1;
    if(index > totalImages - 1) index = 0;
}

function changeImage(idx) {
    images[idx].classList.add("current-img");
    names[idx].classList.add("current-txt");
}

let intervalImage = setInterval(showImage, 3500);

function showImage() {
    removeEffect();
    index++;
    checkCurrentImage();
    changeImage(index);
}

function playSound() {
    btnSound.play();
    btnSound.currentTime = 0;
}

arrowButtons.forEach((button) => {
    button.addEventListener("click", () => {
        clearInterval(intervalImage);
        removeEffect();

        if(button.classList.contains("arrow-right")) {
            index++;
        }
        if(button.classList.contains("arrow-left")) {
            index--;
        }
        
        checkCurrentImage();
        changeImage(index);
        intervalImage = setInterval(showImage, 3500);

        playSound();
    });
});