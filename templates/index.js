const img1_class = "img-amenities img-amenities-top"
const img2_class = "img-amenities img-amenities-bottom"

const img1 = document.querySelector("#img-amenities-top");
const img2 = document.querySelector("#img-amenities-bottom");
console.log("img1.id is "+img1.id)
console.log("img2.id is "+img2.id)


//const amenity_grow = document.querySelector(".img-amenities").addEventListener("click", e => {
const amenity_grow = document.addEventListener("click", e => {
    console.log(e);
    console.log("e.target is "+e.target.className);
    if(e.target === img1 || e.target === img2) {
        console.log("changing pic")
        changePic(e.target);
    }
});

function changePic(img) {
    console.log("className is "+img.className);
    img.className = (img.className.includes("img-amenities")) ? ".fullpage":".img-amenities";
    if (img.className === ".fullpage" && img.id === "#img-amenities-top") {
        img.className += " .img-amenities-top";
    } else if (img.className === ".fullpage" && img.id === "#img-amenities-bottom") {
        img.className += " .img-amenities-bottom";
    }
    console.log("className is "+img.className+" before return");
    img.classList.toggle(img.className);
    return;
}

/*
    two new classes:
    1. for the images that are going to grow on click
    2. for the background (page-wrap) so that it becomes darkened on click

    `alwaysClass ${dynamicClass}`

    todo: put variable from this file as class name in home.html for these elements
*/