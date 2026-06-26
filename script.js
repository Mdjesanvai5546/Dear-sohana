// loader remove safety
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    }, 5000);
});


// explore button
const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {
    document.querySelector(".glass-card").scrollIntoView({
        behavior: "smooth"
    });
});


// NO button escape 😆
const noBtn = document.getElementById("noBtn");

function moveNoButton() {
    const container = document.querySelector(".buttons");

    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);


// YES button
const yesBtn = document.getElementById("yesBtn");
const success = document.getElementById("success");

yesBtn.addEventListener("click", () => {
    success.style.display = "block";
    launchLoveExplosion();
});


// floating hearts forever ❤️
function createFloatingHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    const rise = heart.animate([
        {
            transform: "translateY(0px)",
            opacity: 1
        },
        {
            transform: "translateY(-110vh)",
            opacity: 0
        }
    ], {
        duration: 5000,
        easing: "linear"
    });

    rise.onfinish = () => {
        heart.remove();
    };
}

setInterval(createFloatingHeart, 700);


// LOVE explosion on YES 💖
function launchLoveExplosion() {

    for (let i = 0; i < 120; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.innerHTML = "💖";

            heart.style.position = "fixed";
            heart.style.left = "50%";
            heart.style.top = "50%";
            heart.style.fontSize =
                (Math.random() * 30 + 15) + "px";

            heart.style.pointerEvents = "none";
            heart.style.zIndex = "9999";

            document.body.appendChild(heart);

            const x = (Math.random() - 0.5) * 900;
            const y = (Math.random() - 0.5) * 900;

            const animation = heart.animate([
                {
                    transform: "translate(0px,0px) scale(1)",
                    opacity: 1
                },
                {
                    transform:
                    translate(${x}px,${y}px) scale(0.1),
                    opacity: 0
                }
            ], {
                duration: 2200,
                easing: "ease-out"
            });

            animation.onfinish = () => {
                heart.remove();
            };

        }, i * 30);
    }
}


// mouse heart trail ❤️
document.addEventListener("mousemove", e => {

    const heart = document.createElement("div");

    heart.innerHTML = "💕";

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "12px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    const fade = heart.animate([
        {
            transform: "translateY(0px)",
            opacity: 1
        },
        {
            transform: "translateY(-20px)",
            opacity: 0
        }
    ], {
        duration: 800
    });

    fade.onfinish = () => {
        heart.remove();
    };
});


// falling stars 🌌
function createStar() {

    const star = document.createElement("div");

    star.innerHTML = "✦";

    star.style.position = "fixed";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = "-10px";
    star.style.color = "white";
    star.style.fontSize = "10px";
    star.style.opacity = ".8";
    star.style.pointerEvents = "none";
    star.style.zIndex = "5";

    document.body.appendChild(star);

    const fall = star.animate([
        {
            transform: "translateY(0px)",
            opacity: .8
        },
        {
            transform: "translateY(110vh)",
            opacity: 0
        }
    ], {
        duration: 4000
    });

    fall.onfinish = () => {
        star.remove();
    };
}

setInterval(createStar, 500);


// changing browser title
setInterval(() => {

    if (document.title ===
        "A Universe Made For Sohana ❤️ By Zisan") {

        document.title =
        "Dear Sohana, My Heart Belongs To You ❤️";

    } else {

        document.title =
        "A Universe Made For Sohana ❤️ By Zisan";
    }

}, 2500);
