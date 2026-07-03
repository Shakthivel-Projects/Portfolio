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