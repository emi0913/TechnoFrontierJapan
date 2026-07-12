// ==============================
// メイン画像スライド
// ==============================

const images = [
    "images/main1.jpg",
    "images/main2.jpg",
    "images/main3.jpg"
];

const mainVisual = document.querySelector(".main-visual");

let current = 0;

function changeBackground() {

    current++;

    if (current >= images.length) {
        current = 0;
    }

    mainVisual.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)),
        url(${images[current]})`;

}2

setInterval(changeBackground, 4000);



// ==============================
// スクロールアニメーション
// ==============================

const targets = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    const trigger = window.innerHeight * 0.85;

    targets.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("show");
        }

    });

});