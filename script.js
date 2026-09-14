// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// CLOSE MENU AFTER CLICKING LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// CONTACT FORM

document.getElementById("contactForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        alert(
            "Thanks for reaching out! Your message has been received."
        );

        this.reset();

    }
);