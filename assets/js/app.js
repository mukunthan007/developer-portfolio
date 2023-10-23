const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const navLink = document.querySelectorAll(".nav-link");


burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});



navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

window.onscroll = function () {
    console.log('in');
    var pageOffset = document.documentElement.scrollTop || document.body.scrollTop;
    if (pageOffset >= 100) {
        console.log("inside");
        document.getElementById('scroll-up').style.visibility = "visible";
    }
    else {
        document.getElementById('scroll-up').style.visibility = "hidden";
    }
};