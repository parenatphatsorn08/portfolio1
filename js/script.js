// ===============================
// Typing Effect
// ===============================
const text = "Welcome to my Portfolio ✨";
const typing = document.querySelector(".typing");
if (typing) {
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            typing.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 80);
        }
    }
    typeWriter();
}
// ===============================
// Cursor Glow
// ===============================
const cursor = document.querySelector(".cursor");
if (cursor) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
}
// ===============================
// Navbar Effect on Scroll
// ===============================
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (!nav) return;
    if (window.scrollY > 30) {
        nav.style.background = "rgba(255,255,255,0.65)";
        nav.style.boxShadow = "0 10px 25px rgba(0,0,0,.12)";
    } else {
        nav.style.background = "rgba(255,255,255,.28)";
        nav.style.boxShadow = "0 8px 30px rgba(0,0,0,.10)";
    }
});
// ===============================
// Fade In Animation
// ===============================
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
document.querySelectorAll(".fade").forEach((el) => {
    observer.observe(el);
});
// ===============================
// Button Click Animation
// ===============================
document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";
        setTimeout(() => {
            button.style.transform = "";
        }, 150);
    });
});
// ===============================
// Floating Hearts
// ===============================
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";
    document.body.appendChild(heart);
    let pos = window.innerHeight;
    const timer = setInterval(() => {
        pos -= 2;
        heart.style.top = pos + "px";
        heart.style.opacity = pos / window.innerHeight;
        if (pos < -50) {
            clearInterval(timer);
            heart.remove();
        }
    }, 20);
}
// สร้างหัวใจทุก 3 วินาที
setInterval(createHeart, 3000);
