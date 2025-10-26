

// strat-search-sm&lg
let search_nav = document.querySelector(".search_js");
let search_navA = document.querySelector(".search_jsA");
let search_type = document.querySelector(".searchtype_js");
let back_nav = document.querySelectorAll(".end_nav");

search_nav.addEventListener("click", function () {
    search_type.classList.remove("hidden")

});
search_navA.addEventListener("click", function () {
    search_type.classList.remove("hidden")

});
back_nav[1].addEventListener("click", function () {
    search_type.classList.add("hidden")

});
// end-search-sm&lg

// strat-list-hamberger-sm
let list_sm = document.querySelector(".list_js");
let open_list = document.querySelector(".open_list_js")
back_nav[0].addEventListener("click", function () {
    list_sm.classList.add("hidden")

});
open_list.addEventListener("click", function () {
    list_sm.classList.remove("hidden")

});

// end-list-hamberger-sm

// strat-user-sm&lg
let docmeh_user = document.querySelectorAll(".js_nav");
let ul_js_nav = document.querySelector(".ul_js_nav");
docmeh_user[0].addEventListener("click", function () {
    ul_js_nav.classList.toggle("hidden")

});
docmeh_user[2].addEventListener("click", function () {
    ul_js_nav.classList.toggle("hidden")

});
docmeh_user[3].addEventListener("click", function () {
    ul_js_nav.classList.toggle("hidden")

});
// end-user-sm&lg
// start-slid-img-zir-nav

let left = document.querySelector(".left-dokmeh");
let right = document.querySelector(".right-dokmeh");
let img_slide = document.querySelectorAll(".img-slide");
let z_img = document.querySelectorAll(".z-div")
let img_source = ["images/1.jpeg", "images/2.jpeg", "images/3.jpeg", "images/4.jpeg", "images/5.jpeg"];
let _ml_24 = getComputedStyle(img_slide[0]).marginLeft;
let _ml_16 = getComputedStyle(img_slide[1]).marginLeft;
let _ml_0 = getComputedStyle(img_slide[2]).marginLeft;
let ml_16 = getComputedStyle(img_slide[3]).marginLeft;
let ml_24 = getComputedStyle(img_slide[4]).marginLeft;


let counter = 0;
right.addEventListener("click", function () {

    // if (parseInt(_ml_24)) {
    //     img_slide[0].setAttribute("class", `-ml-0  z-5`);
    //     img_slide[1].setAttribute("class", `-ml-6  z-1`);
    // }else if (parseInt(_ml_16)) {
    //     img_slide[1].setAttribute("class", `-ml-0  z-5`);
    //     img_slide[2].setAttribute("class", `-ml-4  z-2`);
    // }else if (parseInt(_ml_0)) {
    //     img_slide[2].setAttribute("class", `-ml-0  z-5`);
    //     img_slide[3].setAttribute("class", ` ml-4  z-3`);
    // }else if (parseInt(ml_16)) {
    //     img_slide[3].setAttribute("class", `-ml-0  z-5`);
    //     img_slide[4].setAttribute("class",  ` ml-6  z-3`);
    // }else if (parseInt(ml_24)) {
    //     img_slide[4].setAttribute("class", `-ml-0  z-5`);
    //     img_slide[0].setAttribute("class",  ` ml-6  z-4`);
    // }
            counter++;
        if(counter>4 ){
            counter=0
        }
        if(counter==0){
            dokmeh[0].classList.add("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
        }else if(counter==1){
            dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.add("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
        }else if(counter==2){
            dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.add("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
        }else if(counter==3){
            dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.add("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
        }else if(counter==4){
            dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.add("dokmehga")
        }
        // dokmeh[counter].classList.add("dokmehga")
        img_slide[2].setAttribute("src",img_source[counter])
    });
left.addEventListener("click", function () {
    counter--;
    if(counter<0){
        counter=4
    }
    if(counter==0){
            dokmeh[0].classList.add("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
        }else if(counter==1){
            dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.add("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
        }else if(counter==2){
            dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.add("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
        }else if(counter==3){
            dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.add("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
        }else if(counter==4){
            dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.add("dokmehga")
        }
    // dokmeh[counter].classList.add("dokmehga")
    img_slide[2].setAttribute("src",img_source[counter])
});
let dokmeh = document.querySelectorAll(".docmeh");
console.log(dokmeh);

dokmeh[0].addEventListener("click", function () {
    img_slide[2].setAttribute("src","images/1.jpeg")
    dokmeh[0].classList.add("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
})
dokmeh[1].addEventListener("click", function () {
    img_slide[2].setAttribute("src","images/2.jpeg")
     dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.add("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
})
dokmeh[2].addEventListener("click", function () {
    img_slide[2].setAttribute("src","images/3.jpeg")
     dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.add("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
})
dokmeh[3].addEventListener("click", function () {
    img_slide[2].setAttribute("src","images/4.jpeg")
     dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.add("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
})
dokmeh[4].addEventListener("click", function () {
    img_slide[2].setAttribute("src","images/5.jpeg")
     dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.add("dokmehga")
})




// end-slid-img-zir-nav