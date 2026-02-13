// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Ура любеемее!!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";

    const heartImages = ['heart1.png', 'heart2.png', 'heart3.png'];
    
    function createOneHeart() {
        const heart = document.createElement('div');
        heart.className = 'falling-heart';
        
        const randomHeart = heartImages[Math.floor(Math.random() * heartImages.length)];
        heart.style.backgroundImage = `url("${randomHeart}")`;
        
        const randomSize = 30 + Math.random() * 20;
        heart.style.width = `${randomSize}px`;
        heart.style.height = `${randomSize}px`;
        
        heart.style.left = `${Math.random() * 100}vw`;
        
        const fallDuration = 3 + Math.random() * 3;
        heart.style.animation = `heart-fall ${fallDuration}s linear forwards`;
        
        heart.style.animationDelay = `${Math.random() * 2}s`;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, (fallDuration + 2) * 1000); 
    }
    
    for (let i = 0; i < 50; i++) {
        setTimeout(createOneHeart, i * 150); 
    }
});

