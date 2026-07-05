const roles = [
    "Software Developer",
    "Web Developer",
    "ML Engineer"
];

let index = 0;

setInterval(() => {
    document.getElementById("Intro").innerHTML = roles[index];

    index++;

    if(index == roles.length)
        index = 0;
}, 2000);


const hamburger =
    document.getElementById("hamburger");

const navItems =
    document.getElementById("navItems");

hamburger.addEventListener("click",()=>{

    navItems.classList.toggle("active");

});

document
.querySelectorAll(".nav-items a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        navItems.classList.remove(
            "active"
        );

    });

});

const navbar = 
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if(window.screenY > 50){
        navbar.classList.add(
            "sticky"
        );
    }
    else{
        navbar.classList.remove(
            "sticky"
        );
    }
});