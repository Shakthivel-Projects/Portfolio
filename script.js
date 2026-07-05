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

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(
        ".nav-items a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 150;

                const sectionHeight =
                    section.clientHeight;

                if(
                    pageYOffset >= sectionTop
                    &&
                    pageYOffset <
                    sectionTop +
                    sectionHeight
                ){
                    current =
                        section.getAttribute(
                            "id"
                        );
                }
            }
        );

        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );

                if(
                    link.getAttribute(
                        "href"
                    ) === "#" + current
                ){
                    link.classList.add(
                        "active"
                    );
                }
            }
        );
    }
);

const hiddenElements =
    document.querySelectorAll(
        ".hidden"
    );

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if(
                        entry.isIntersecting
                    ){

                        entry.target
                        .classList
                        .add("show");
                    }
                }
            );

        },
        {
            threshold:0.2
        }
    );

document
.getElementById("home")
.classList
.add("show");

hiddenElements.forEach(
    element => {

        observer.observe(
            element
        );

    }
);

const topBtn =
    document.getElementById(
        "topBtn"
    );

window.addEventListener(
    "scroll",
    () => {

        if(
            window.scrollY > 300
        ){

            topBtn.style.display =
                "block";
        }

        else{

            topBtn.style.display =
                "none";
        }
    }
);

topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"
        });

    }
);

const themeToggle =
    document.getElementById(
        "themeToggle"
    );

if(
    localStorage.getItem(
        "theme"
    ) === "dark"
){

    document.body
        .classList
        .add("dark");

    themeToggle.innerHTML =
        "☀️";
}

themeToggle
.addEventListener(
    "click",
    () => {

        document.body
            .classList
            .toggle("dark");

        if(
            document.body
            .classList
            .contains("dark")
        ){

            localStorage
            .setItem(
                "theme",
                "dark"
            );

            themeToggle
                .innerHTML =
                "☀️";
        }

        else{

            localStorage
            .setItem(
                "theme",
                "light"
            );

            themeToggle
                .innerHTML =
                "🌙";
        }
    }
);

window.addEventListener(
    "load",
    () => {

        const loader =
            document.getElementById(
                "loader"
            );

        loader.classList.add(
            "loader-hidden"
        );

        setTimeout(() => {

            loader.remove();

        },800);
    }
);