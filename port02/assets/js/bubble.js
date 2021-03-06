const footerCont = document.querySelector(".footer__contact");
const winWidth = window.innerWidth;
const winHeight = window.innerHeight;
const easeOutQuart = "cubic-bezier(0.165, 0.84, 0.44, 1)";
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;
const footerContBtn = document.querySelectorAll(".smile-motion");
const createParticle = (x, y) => {
    // const width = randomNumberInRange(6, 36);
    const tx = randomNumberInRange(-360, 360);
    const ty = randomNumberInRange(-360, 360);
    const rz = randomNumberInRange(0, 480);
    const delay = randomNumberInRange(0, 240);
    const duration = randomNumberInRange(4000, 5000);
    const particle = document.createElement("div");
    particle.className = "cont-btn__smile";
    document.body.appendChild(particle);
    const anime = particle.animate(
        [
            {
                opacity: 1,
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(-45deg)`
            },
            {
                opacity: 0,
                transform: `translate(-50%, -50%) translate(${x + tx}px, ${y + ty}px) rotate(${-45 + rz}deg)`
            }
        ],
        {
            duration,
            delay,
            easing: easeOutQuart
        }
    );
    anime.onfinish = (e) => e.srcElement.effect.target.remove();
};
const createParticles = (x, y, n) => {
    for (let i = 0; i < n; i++) {
        createParticle(x, y);
    }
};
footerContBtn.forEach((btn) => {
    btn.addEventListener("mouseenter", (e) => {
        const x = e.clientX;
        const y = e.clientY + window.scrollY;
        createParticles(x, y, 7);
    });
});