

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
let img_source = ["images/1.jpeg", "images/2.jpeg", "images/3.jpeg", "images/4.jpeg", "images/5.jpeg"];
let gholi = document.querySelectorAll(".gholi")

let counter = 0;
right.addEventListener("click", function () {
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
    
    gholi[0].classList.toggle("z-5")
    img_slide[0].classList.toggle("-ml-0")
    gholi[1].classList.toggle("z-4")
    img_slide[1].classList.toggle("ml-2")
    gholi[2].classList.toggle("z-3")
    img_slide[2].classList.toggle("ml-3")
    gholi[3].classList.toggle("z-2")
    img_slide[3].classList.toggle("ml-4")
    gholi[4].classList.toggle("z-1")
    img_slide[4].classList.toggle("ml-5")

     gholi[0].classList.remove("z-4")
    img_slide[0].classList.remove("-ml-2")
    gholi[1].classList.remove("z-5")
    img_slide[1].classList.remove("-ml-0")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-2")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-3")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-4")
            gholi[0].classList.remove("z-3")
    img_slide[0].classList.remove("-ml-3")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("-ml-2")
    gholi[2].classList.remove("z-5")
    img_slide[2].classList.remove("-ml-0")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-2")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-3")
             gholi[0].classList.remove("z-2")
    img_slide[0].classList.remove("-ml-4")
    gholi[1].classList.remove("z-3")
    img_slide[1].classList.remove("-ml-3")
    gholi[2].classList.remove("z-4")
    img_slide[2].classList.remove("-ml-2")
    gholi[3].classList.remove("z-5")
    img_slide[3].classList.remove("ml-0")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-2")
    gholi[0].classList.remove("z-1")
    img_slide[0].classList.remove("-ml-5")
    gholi[1].classList.remove("z-2")
    img_slide[1].classList.remove("-ml-4")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-3")
    gholi[3].classList.remove("z-4")
    img_slide[3].classList.remove("-ml-2")
    gholi[4].classList.remove("z-5")
    img_slide[4].classList.remove("ml-0")

    gholi[0].classList.remove("z-4")
        img_slide[0].classList.remove("ml-2")
    gholi[1].classList.remove("z-5")
    img_slide[1].classList.remove("-ml-0")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-2")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-3")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-4")
             gholi[0].classList.remove("z-3")
     img_slide[0].classList.remove("ml-3")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("ml-2")
    gholi[2].classList.remove("z-5")
    img_slide[2].classList.remove("-ml-0")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-2")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-3")
           gholi[0].classList.remove("z-2")
    img_slide[0].classList.remove("ml-4")
    gholi[1].classList.remove("z-3")
    img_slide[1].classList.remove("ml-3")
    gholi[2].classList.remove("z-4")
    img_slide[2].classList.remove("ml-2")
    gholi[3].classList.remove("z-5")
    img_slide[3].classList.remove("ml-0")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-2")
        gholi[0].classList.remove("z-1")
        img_slide[0].classList.remove("ml-5")
    gholi[1].classList.remove("z-2")
    img_slide[1].classList.remove("ml-4")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-3")
    gholi[3].classList.remove("z-4")
    img_slide[3].classList.remove("ml-2")
    gholi[4].classList.remove("z-5")
    img_slide[4].classList.remove("-ml-0")

        }else if(counter==1){
            dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.add("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
    gholi[0].classList.toggle("z-4")
    img_slide[0].classList.toggle("-ml-2")
    gholi[1].classList.toggle("z-5")
    img_slide[1].classList.toggle("-ml-0")
    gholi[2].classList.toggle("z-3")
    img_slide[2].classList.toggle("ml-2")
    gholi[3].classList.toggle("z-2")
    img_slide[3].classList.toggle("ml-3")
    gholi[4].classList.toggle("z-1")
    img_slide[4].classList.toggle("ml-4")

    gholi[0].classList.remove("z-5")
    img_slide[0].classList.remove("-ml-0")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("ml-2")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-3")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-4")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-5")
     gholi[0].classList.remove("z-3")
    img_slide[0].classList.remove("-ml-3")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("-ml-2")
    gholi[2].classList.remove("z-5")
    img_slide[2].classList.remove("-ml-0")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-2")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-3")
             gholi[0].classList.remove("z-2")
    img_slide[0].classList.remove("-ml-4")
    gholi[1].classList.remove("z-3")
    img_slide[1].classList.remove("-ml-3")
    gholi[2].classList.remove("z-4")
    img_slide[2].classList.remove("-ml-2")
    gholi[3].classList.remove("z-5")
    img_slide[3].classList.remove("ml-0")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-2")
    gholi[0].classList.remove("z-1")
    img_slide[0].classList.remove("-ml-5")
    gholi[1].classList.remove("z-2")
    img_slide[1].classList.remove("-ml-4")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-3")
    gholi[3].classList.remove("z-4")
    img_slide[3].classList.remove("-ml-2")
    gholi[4].classList.remove("z-5")
    img_slide[4].classList.remove("ml-0")

    
             gholi[0].classList.remove("z-5")
        img_slide[0].classList.remove("ml-0")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("-ml-2")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-3")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-4")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-5")
 gholi[0].classList.remove("z-3")
     img_slide[0].classList.remove("ml-3")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("ml-2")
    gholi[2].classList.remove("z-5")
    img_slide[2].classList.remove("-ml-0")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-2")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-3")
           gholi[0].classList.remove("z-2")
    img_slide[0].classList.remove("ml-4")
    gholi[1].classList.remove("z-3")
    img_slide[1].classList.remove("ml-3")
    gholi[2].classList.remove("z-4")
    img_slide[2].classList.remove("ml-2")
    gholi[3].classList.remove("z-5")
    img_slide[3].classList.remove("ml-0")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-2")
        gholi[0].classList.remove("z-1")
        img_slide[0].classList.remove("ml-5")
    gholi[1].classList.remove("z-2")
    img_slide[1].classList.remove("ml-4")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-3")
    gholi[3].classList.remove("z-4")
    img_slide[3].classList.remove("ml-2")
    gholi[4].classList.remove("z-5")
    img_slide[4].classList.remove("-ml-0")

       
        }else if(counter==2){
            dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.add("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
    gholi[0].classList.toggle("z-3")
    img_slide[0].classList.toggle("-ml-3")
    gholi[1].classList.toggle("z-4")
    img_slide[1].classList.toggle("-ml-2")
    gholi[2].classList.toggle("z-5")
    img_slide[2].classList.toggle("-ml-0")
    gholi[3].classList.toggle("z-2")
    img_slide[3].classList.toggle("ml-2")
    gholi[4].classList.toggle("z-1")
    img_slide[4].classList.toggle("ml-3")

    gholi[0].classList.remove("z-5")
    img_slide[0].classList.remove("-ml-0")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("ml-2")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-3")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-4")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-5")
            gholi[0].classList.remove("z-4")
    img_slide[0].classList.remove("-ml-2")
    gholi[1].classList.remove("z-5")
    img_slide[1].classList.remove("-ml-0")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-2")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-3")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-4")
     gholi[0].classList.remove("z-2")
    img_slide[0].classList.remove("-ml-4")
    gholi[1].classList.remove("z-3")
    img_slide[1].classList.remove("-ml-3")
    gholi[2].classList.remove("z-4")
    img_slide[2].classList.remove("-ml-2")
    gholi[3].classList.remove("z-5")
    img_slide[3].classList.remove("ml-0")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-2")
    gholi[0].classList.remove("z-1")
    img_slide[0].classList.remove("-ml-5")
    gholi[1].classList.remove("z-2")
    img_slide[1].classList.remove("-ml-4")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-3")
    gholi[3].classList.remove("z-4")
    img_slide[3].classList.remove("-ml-2")
    gholi[4].classList.remove("z-5")
    img_slide[4].classList.remove("ml-0")

     gholi[0].classList.remove("z-5")
        img_slide[0].classList.remove("ml-0")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("-ml-2")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-3")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-4")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-5")
             gholi[0].classList.remove("z-4")
        img_slide[0].classList.remove("ml-2")
    gholi[1].classList.remove("z-5")
    img_slide[1].classList.remove("-ml-0")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-2")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-3")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-4")
 gholi[0].classList.remove("z-2")
    img_slide[0].classList.remove("ml-4")
    gholi[1].classList.remove("z-3")
    img_slide[1].classList.remove("ml-3")
    gholi[2].classList.remove("z-4")
    img_slide[2].classList.remove("ml-2")
    gholi[3].classList.remove("z-5")
    img_slide[3].classList.remove("ml-0")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-2")
        gholi[0].classList.remove("z-1")
        img_slide[0].classList.remove("ml-5")
    gholi[1].classList.remove("z-2")
    img_slide[1].classList.remove("ml-4")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-3")
    gholi[3].classList.remove("z-4")
    img_slide[3].classList.remove("ml-2")
    gholi[4].classList.remove("z-5")
    img_slide[4].classList.remove("-ml-0")
        }else if(counter==3){
            dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.add("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
    gholi[0].classList.toggle("z-2")
    img_slide[0].classList.toggle("-ml-4")
    gholi[1].classList.toggle("z-3")
    img_slide[1].classList.toggle("-ml-3")
    gholi[2].classList.toggle("z-4")
    img_slide[2].classList.toggle("-ml-2")
    gholi[3].classList.toggle("z-5")
    img_slide[3].classList.toggle("ml-0")
    gholi[4].classList.toggle("z-1")
    img_slide[4].classList.toggle("ml-2")

    gholi[0].classList.remove("z-5")
    img_slide[0].classList.remove("-ml-0")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("ml-2")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-3")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-4")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-5")
            gholi[0].classList.remove("z-4")
    img_slide[0].classList.remove("-ml-2")
    gholi[1].classList.remove("z-5")
    img_slide[1].classList.remove("-ml-0")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-2")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-3")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-4")
            gholi[0].classList.remove("z-3")
    img_slide[0].classList.remove("-ml-3")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("-ml-2")
    gholi[2].classList.remove("z-5")
    img_slide[2].classList.remove("-ml-0")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-2")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-3")
     gholi[0].classList.remove("z-1")
    img_slide[0].classList.remove("-ml-5")
    gholi[1].classList.remove("z-2")
    img_slide[1].classList.remove("-ml-4")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-3")
    gholi[3].classList.remove("z-4")
    img_slide[3].classList.remove("-ml-2")
    gholi[4].classList.remove("z-5")
    img_slide[4].classList.remove("ml-0")
    gholi[0].classList.remove("z-5")
        img_slide[0].classList.remove("ml-0")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("-ml-2")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-3")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-4")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-5")
             gholi[0].classList.remove("z-4")
        img_slide[0].classList.remove("ml-2")
    gholi[1].classList.remove("z-5")
    img_slide[1].classList.remove("-ml-0")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-2")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-3")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-4")
             gholi[0].classList.remove("z-3")
     img_slide[0].classList.remove("ml-3")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("ml-2")
    gholi[2].classList.remove("z-5")
    img_slide[2].classList.remove("-ml-0")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-2")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-3")
 gholi[0].classList.remove("z-1")
        img_slide[0].classList.remove("ml-5")
    gholi[1].classList.remove("z-2")
    img_slide[1].classList.remove("ml-4")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-3")
    gholi[3].classList.remove("z-4")
    img_slide[3].classList.remove("ml-2")
    gholi[4].classList.remove("z-5")
    img_slide[4].classList.remove("-ml-0")
        }else if(counter==4){
            dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.add("dokmehga")
    gholi[0].classList.toggle("z-1")
    img_slide[0].classList.toggle("-ml-5")
    gholi[1].classList.toggle("z-2")
    img_slide[1].classList.toggle("-ml-4")
    gholi[2].classList.toggle("z-3")
    img_slide[2].classList.toggle("-ml-3")
    gholi[3].classList.toggle("z-4")
    img_slide[3].classList.toggle("-ml-2")
    gholi[4].classList.toggle("z-5")
    img_slide[4].classList.toggle("ml-0")

      gholi[0].classList.remove("z-5")
    img_slide[0].classList.remove("-ml-0")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("ml-2")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-3")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-4")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-5")
            gholi[0].classList.remove("z-4")
    img_slide[0].classList.remove("-ml-2")
    gholi[1].classList.remove("z-5")
    img_slide[1].classList.remove("-ml-0")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-2")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-3")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-4")
            gholi[0].classList.remove("z-3")
    img_slide[0].classList.remove("-ml-3")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("-ml-2")
    gholi[2].classList.remove("z-5")
    img_slide[2].classList.remove("-ml-0")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-2")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-3")
             gholi[0].classList.remove("z-2")
    img_slide[0].classList.remove("-ml-4")
    gholi[1].classList.remove("z-3")
    img_slide[1].classList.remove("-ml-3")
    gholi[2].classList.remove("z-4")
    img_slide[2].classList.remove("-ml-2")
    gholi[3].classList.remove("z-5")
    img_slide[3].classList.remove("ml-0")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-2")
     gholi[0].classList.remove("z-5")
        img_slide[0].classList.remove("ml-0")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("-ml-2")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-3")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-4")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-5")
             gholi[0].classList.remove("z-4")
        img_slide[0].classList.remove("ml-2")
    gholi[1].classList.remove("z-5")
    img_slide[1].classList.remove("-ml-0")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-2")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-3")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-4")
             gholi[0].classList.remove("z-3")
     img_slide[0].classList.remove("ml-3")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("ml-2")
    gholi[2].classList.remove("z-5")
    img_slide[2].classList.remove("-ml-0")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-2")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-3")
           gholi[0].classList.remove("z-2")
    img_slide[0].classList.remove("ml-4")
    gholi[1].classList.remove("z-3")
    img_slide[1].classList.remove("ml-3")
    gholi[2].classList.remove("z-4")
    img_slide[2].classList.remove("ml-2")
    gholi[3].classList.remove("z-5")
    img_slide[3].classList.remove("ml-0")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-2")
        }
        // img_slide[2].setAttribute("src",img_source[counter])
        
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

        gholi[0].classList.toggle("z-5")
        img_slide[0].classList.toggle("-ml-0")
    gholi[1].classList.toggle("z-4")
    img_slide[1].classList.toggle("-ml-2")
    gholi[2].classList.toggle("z-3")
    img_slide[2].classList.toggle("-ml-3")
    gholi[3].classList.toggle("z-2")
    img_slide[3].classList.toggle("-ml-4")
    gholi[4].classList.toggle("z-1")
    img_slide[4].classList.toggle("-ml-5")
    gholi[0].classList.remove("z-4")
    img_slide[0].classList.remove("-ml-2")
    gholi[1].classList.remove("z-5")
    img_slide[1].classList.remove("-ml-0")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-2")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-3")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-4")
            gholi[0].classList.remove("z-3")
    img_slide[0].classList.remove("-ml-3")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("-ml-2")
    gholi[2].classList.remove("z-5")
    img_slide[2].classList.remove("-ml-0")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-2")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-3")
             gholi[0].classList.remove("z-2")
    img_slide[0].classList.remove("-ml-4")
    gholi[1].classList.remove("z-3")
    img_slide[1].classList.remove("-ml-3")
    gholi[2].classList.remove("z-4")
    img_slide[2].classList.remove("-ml-2")
    gholi[3].classList.remove("z-5")
    img_slide[3].classList.remove("ml-0")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-2")
    gholi[0].classList.remove("z-1")
    img_slide[0].classList.remove("-ml-5")
    gholi[1].classList.remove("z-2")
    img_slide[1].classList.remove("-ml-4")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-3")
    gholi[3].classList.remove("z-4")
    img_slide[3].classList.remove("-ml-2")
    gholi[4].classList.remove("z-5")
    img_slide[4].classList.remove("ml-0")

    gholi[0].classList.remove("z-4")
        img_slide[0].classList.remove("ml-2")
    gholi[1].classList.remove("z-5")
    img_slide[1].classList.remove("-ml-0")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-2")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-3")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-4")
             gholi[0].classList.remove("z-3")
     img_slide[0].classList.remove("ml-3")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("ml-2")
    gholi[2].classList.remove("z-5")
    img_slide[2].classList.remove("-ml-0")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-2")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-3")
           gholi[0].classList.remove("z-2")
    img_slide[0].classList.remove("ml-4")
    gholi[1].classList.remove("z-3")
    img_slide[1].classList.remove("ml-3")
    gholi[2].classList.remove("z-4")
    img_slide[2].classList.remove("ml-2")
    gholi[3].classList.remove("z-5")
    img_slide[3].classList.remove("ml-0")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-2")
        gholi[0].classList.remove("z-1")
        img_slide[0].classList.remove("ml-5")
    gholi[1].classList.remove("z-2")
    img_slide[1].classList.remove("ml-4")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-3")
    gholi[3].classList.remove("z-4")
    img_slide[3].classList.remove("ml-2")
    gholi[4].classList.remove("z-5")
    img_slide[4].classList.remove("-ml-0")
        }else if(counter==1){
            dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.add("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
        gholi[0].classList.toggle("z-4")
        img_slide[0].classList.toggle("ml-2")
    gholi[1].classList.toggle("z-5")
    img_slide[1].classList.toggle("-ml-0")
    gholi[2].classList.toggle("z-3")
    img_slide[2].classList.toggle("-ml-2")
    gholi[3].classList.toggle("z-2")
    img_slide[3].classList.toggle("-ml-3")
    gholi[4].classList.toggle("z-1")
    img_slide[4].classList.toggle("-ml-4")

     gholi[0].classList.remove("z-5")
    img_slide[0].classList.remove("-ml-0")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("ml-2")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-3")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-4")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-5")
     gholi[0].classList.remove("z-3")
    img_slide[0].classList.remove("-ml-3")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("-ml-2")
    gholi[2].classList.remove("z-5")
    img_slide[2].classList.remove("-ml-0")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-2")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-3")
             gholi[0].classList.remove("z-2")
    img_slide[0].classList.remove("-ml-4")
    gholi[1].classList.remove("z-3")
    img_slide[1].classList.remove("-ml-3")
    gholi[2].classList.remove("z-4")
    img_slide[2].classList.remove("-ml-2")
    gholi[3].classList.remove("z-5")
    img_slide[3].classList.remove("ml-0")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-2")
    gholi[0].classList.remove("z-1")
    img_slide[0].classList.remove("-ml-5")
    gholi[1].classList.remove("z-2")
    img_slide[1].classList.remove("-ml-4")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-3")
    gholi[3].classList.remove("z-4")
    img_slide[3].classList.remove("-ml-2")
    gholi[4].classList.remove("z-5")
    img_slide[4].classList.remove("ml-0")

    
             gholi[0].classList.remove("z-5")
        img_slide[0].classList.remove("ml-0")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("-ml-2")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-3")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-4")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-5")
 gholi[0].classList.remove("z-3")
     img_slide[0].classList.remove("ml-3")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("ml-2")
    gholi[2].classList.remove("z-5")
    img_slide[2].classList.remove("-ml-0")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-2")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-3")
           gholi[0].classList.remove("z-2")
    img_slide[0].classList.remove("ml-4")
    gholi[1].classList.remove("z-3")
    img_slide[1].classList.remove("ml-3")
    gholi[2].classList.remove("z-4")
    img_slide[2].classList.remove("ml-2")
    gholi[3].classList.remove("z-5")
    img_slide[3].classList.remove("ml-0")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-2")
        gholi[0].classList.remove("z-1")
        img_slide[0].classList.remove("ml-5")
    gholi[1].classList.remove("z-2")
    img_slide[1].classList.remove("ml-4")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-3")
    gholi[3].classList.remove("z-4")
    img_slide[3].classList.remove("ml-2")
    gholi[4].classList.remove("z-5")
    img_slide[4].classList.remove("-ml-0")

        }else if(counter==2){
            dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.add("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
     gholi[0].classList.toggle("z-3")
     img_slide[0].classList.toggle("ml-3")
    gholi[1].classList.toggle("z-4")
    img_slide[1].classList.toggle("ml-2")
    gholi[2].classList.toggle("z-5")
    img_slide[2].classList.toggle("-ml-0")
    gholi[3].classList.toggle("z-2")
    img_slide[3].classList.toggle("-ml-2")
    gholi[4].classList.toggle("z-1")
    img_slide[4].classList.toggle("-ml-3")

    gholi[0].classList.remove("z-5")
    img_slide[0].classList.remove("-ml-0")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("ml-2")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-3")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-4")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-5")
            gholi[0].classList.remove("z-4")
    img_slide[0].classList.remove("-ml-2")
    gholi[1].classList.remove("z-5")
    img_slide[1].classList.remove("-ml-0")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-2")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-3")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-4")
     gholi[0].classList.remove("z-2")
    img_slide[0].classList.remove("-ml-4")
    gholi[1].classList.remove("z-3")
    img_slide[1].classList.remove("-ml-3")
    gholi[2].classList.remove("z-4")
    img_slide[2].classList.remove("-ml-2")
    gholi[3].classList.remove("z-5")
    img_slide[3].classList.remove("ml-0")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-2")
    gholi[0].classList.remove("z-1")
    img_slide[0].classList.remove("-ml-5")
    gholi[1].classList.remove("z-2")
    img_slide[1].classList.remove("-ml-4")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-3")
    gholi[3].classList.remove("z-4")
    img_slide[3].classList.remove("-ml-2")
    gholi[4].classList.remove("z-5")
    img_slide[4].classList.remove("ml-0")

     gholi[0].classList.remove("z-5")
        img_slide[0].classList.remove("ml-0")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("-ml-2")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-3")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-4")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-5")
             gholi[0].classList.remove("z-4")
        img_slide[0].classList.remove("ml-2")
    gholi[1].classList.remove("z-5")
    img_slide[1].classList.remove("-ml-0")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-2")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-3")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-4")
 gholi[0].classList.remove("z-2")
    img_slide[0].classList.remove("ml-4")
    gholi[1].classList.remove("z-3")
    img_slide[1].classList.remove("ml-3")
    gholi[2].classList.remove("z-4")
    img_slide[2].classList.remove("ml-2")
    gholi[3].classList.remove("z-5")
    img_slide[3].classList.remove("ml-0")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-2")
        gholi[0].classList.remove("z-1")
        img_slide[0].classList.remove("ml-5")
    gholi[1].classList.remove("z-2")
    img_slide[1].classList.remove("ml-4")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-3")
    gholi[3].classList.remove("z-4")
    img_slide[3].classList.remove("ml-2")
    gholi[4].classList.remove("z-5")
    img_slide[4].classList.remove("-ml-0")
        }else if(counter==3){
            dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.add("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
    gholi[0].classList.toggle("z-2")
    img_slide[0].classList.toggle("ml-4")
    gholi[1].classList.toggle("z-3")
    img_slide[1].classList.toggle("ml-3")
    gholi[2].classList.toggle("z-4")
    img_slide[2].classList.toggle("ml-2")
    gholi[3].classList.toggle("z-5")
    img_slide[3].classList.toggle("ml-0")
    gholi[4].classList.toggle("z-1")
    img_slide[4].classList.toggle("-ml-2")
    gholi[0].classList.remove("z-5")
    img_slide[0].classList.remove("-ml-0")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("ml-2")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-3")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-4")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-5")
            gholi[0].classList.remove("z-4")
    img_slide[0].classList.remove("-ml-2")
    gholi[1].classList.remove("z-5")
    img_slide[1].classList.remove("-ml-0")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-2")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-3")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-4")
            gholi[0].classList.remove("z-3")
    img_slide[0].classList.remove("-ml-3")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("-ml-2")
    gholi[2].classList.remove("z-5")
    img_slide[2].classList.remove("-ml-0")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-2")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-3")
     gholi[0].classList.remove("z-1")
    img_slide[0].classList.remove("-ml-5")
    gholi[1].classList.remove("z-2")
    img_slide[1].classList.remove("-ml-4")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-3")
    gholi[3].classList.remove("z-4")
    img_slide[3].classList.remove("-ml-2")
    gholi[4].classList.remove("z-5")
    img_slide[4].classList.remove("ml-0")
    gholi[0].classList.remove("z-5")
        img_slide[0].classList.remove("ml-0")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("-ml-2")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-3")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-4")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-5")
             gholi[0].classList.remove("z-4")
        img_slide[0].classList.remove("ml-2")
    gholi[1].classList.remove("z-5")
    img_slide[1].classList.remove("-ml-0")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-2")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-3")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-4")
             gholi[0].classList.remove("z-3")
     img_slide[0].classList.remove("ml-3")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("ml-2")
    gholi[2].classList.remove("z-5")
    img_slide[2].classList.remove("-ml-0")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-2")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-3")
 gholi[0].classList.remove("z-1")
        img_slide[0].classList.remove("ml-5")
    gholi[1].classList.remove("z-2")
    img_slide[1].classList.remove("ml-4")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-3")
    gholi[3].classList.remove("z-4")
    img_slide[3].classList.remove("ml-2")
    gholi[4].classList.remove("z-5")
    img_slide[4].classList.remove("-ml-0")
        }else if(counter==4){
            dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.add("dokmehga")
        gholi[0].classList.toggle("z-1")
        img_slide[0].classList.toggle("ml-5")
    gholi[1].classList.toggle("z-2")
    img_slide[1].classList.toggle("ml-4")
    gholi[2].classList.toggle("z-3")
    img_slide[2].classList.toggle("ml-3")
    gholi[3].classList.toggle("z-4")
    img_slide[3].classList.toggle("ml-2")
    gholi[4].classList.toggle("z-5")
    img_slide[4].classList.toggle("-ml-0")

    gholi[0].classList.remove("z-5")
    img_slide[0].classList.remove("-ml-0")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("ml-2")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-3")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-4")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-5")
            gholi[0].classList.remove("z-4")
    img_slide[0].classList.remove("-ml-2")
    gholi[1].classList.remove("z-5")
    img_slide[1].classList.remove("-ml-0")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("ml-2")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-3")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-4")
            gholi[0].classList.remove("z-3")
    img_slide[0].classList.remove("-ml-3")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("-ml-2")
    gholi[2].classList.remove("z-5")
    img_slide[2].classList.remove("-ml-0")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("ml-2")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-3")
             gholi[0].classList.remove("z-2")
    img_slide[0].classList.remove("-ml-4")
    gholi[1].classList.remove("z-3")
    img_slide[1].classList.remove("-ml-3")
    gholi[2].classList.remove("z-4")
    img_slide[2].classList.remove("-ml-2")
    gholi[3].classList.remove("z-5")
    img_slide[3].classList.remove("ml-0")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("ml-2")
     gholi[0].classList.remove("z-5")
        img_slide[0].classList.remove("ml-0")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("-ml-2")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-3")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-4")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-5")
             gholi[0].classList.remove("z-4")
        img_slide[0].classList.remove("ml-2")
    gholi[1].classList.remove("z-5")
    img_slide[1].classList.remove("-ml-0")
    gholi[2].classList.remove("z-3")
    img_slide[2].classList.remove("-ml-2")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-3")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-4")
             gholi[0].classList.remove("z-3")
     img_slide[0].classList.remove("ml-3")
    gholi[1].classList.remove("z-4")
    img_slide[1].classList.remove("ml-2")
    gholi[2].classList.remove("z-5")
    img_slide[2].classList.remove("-ml-0")
    gholi[3].classList.remove("z-2")
    img_slide[3].classList.remove("-ml-2")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-3")
           gholi[0].classList.remove("z-2")
    img_slide[0].classList.remove("ml-4")
    gholi[1].classList.remove("z-3")
    img_slide[1].classList.remove("ml-3")
    gholi[2].classList.remove("z-4")
    img_slide[2].classList.remove("ml-2")
    gholi[3].classList.remove("z-5")
    img_slide[3].classList.remove("ml-0")
    gholi[4].classList.remove("z-1")
    img_slide[4].classList.remove("-ml-2")
        }
    // img_slide[2].setAttribute("src",img_source[counter])
});
let dokmeh = document.querySelectorAll(".docmeh");

dokmeh[0].addEventListener("click", function () {
    img_slide[counter].setAttribute("src","images/1.jpeg")
    dokmeh[0].classList.add("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
})
dokmeh[1].addEventListener("click", function () {
    img_slide[counter].setAttribute("src","images/2.jpeg")
     dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.add("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
})
dokmeh[2].addEventListener("click", function () {
    img_slide[counter].setAttribute("src","images/3.jpeg")
     dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.add("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
})
dokmeh[3].addEventListener("click", function () {
    img_slide[counter].setAttribute("src","images/4.jpeg")
     dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.add("dokmehga")
    dokmeh[4].classList.remove("dokmehga")
})
dokmeh[4].addEventListener("click", function () {
    img_slide[counter].setAttribute("src","images/5.jpeg")
     dokmeh[0].classList.remove("dokmehga")
    dokmeh[1].classList.remove("dokmehga")
    dokmeh[2].classList.remove("dokmehga")
    dokmeh[3].classList.remove("dokmehga")
    dokmeh[4].classList.add("dokmehga")
})

// end-slid-img-zir-nav


// start-doreh

let docmeh_doreh = document.querySelectorAll(".docmeh-doreh");
let slider_doreh = document.querySelector(".slider-doreh");
let zir_docmeh = document.querySelectorAll(".zir-docmeh");
let img_doreh = document.querySelectorAll(".img-doreh");

let coun = 0;

docmeh_doreh[1].addEventListener("click",function () {
    coun++;
if(coun>27){
    coun=0;
}
    let img_doreh_fast = document.querySelectorAll(".img-doreh");
    let width = img_doreh_fast[0].clientWidth;
    img_doreh_fast[0].style.marginright = `-${width}px`;
    setTimeout(() => {
        img_doreh_fast[0].remove();
        slider_doreh.appendChild(img_doreh_fast[0]);
    }, 100);

    for (let i = 0 ; i < zir_docmeh.length ; i++ ){
    zir_docmeh[i].classList.remove("dokmehga1");
    }
    coun = (coun) % zir_docmeh.length;
    zir_docmeh[coun].classList.add("dokmehga1")
})

docmeh_doreh[0].addEventListener("click",function () {
    coun--;
    if(coun<0){
        coun=27;
    }
    let img_doreh_last = document.querySelectorAll(".img-doreh")[
        document.querySelectorAll(".img-doreh").length - 1];
        let width = img_doreh_last.clientWidth;
        img_doreh_last.style.marginleft = `-${width}px`;
        setTimeout(() => {
            img_doreh_last.remove();
            slider_doreh.insertBefore(img_doreh_last , document.querySelector(".img-doreh"));
        }, 100);
         for (let i = 0 ; i < zir_docmeh.length ; i++ ){
    zir_docmeh[i].classList.remove("dokmehga1");
    }
    coun = (coun) % zir_docmeh.length;
    zir_docmeh[coun].classList.add("dokmehga1")
    });
zir_docmeh[0].addEventListener("click", function () {
    for (let i = 0 ; i < zir_docmeh.length ; i++ ){
    zir_docmeh[i].classList.remove("dokmehga1");
    }
    coun = (coun) % zir_docmeh.length;
    zir_docmeh[coun].classList.add("dokmehga1")
    // zir_docmeh[coun].classList.add("dokmehga1")
    // zir_docmeh[0].classList.add("dokmehga1");
    // zir_docmeh[1].classList.remove("dokmehga1");
    // zir_docmeh[2].classList.remove("dokmehga1");
    // zir_docmeh[3].classList.remove("dokmehga1");
    // zir_docmeh[4].classList.remove("dokmehga1");
    // zir_docmeh[5].classList.remove("dokmehga1");
    // zir_docmeh[6].classList.remove("dokmehga1");
    // zir_docmeh[7].classList.remove("dokmehga1");
    // zir_docmeh[8].classList.remove("dokmehga1");
    // zir_docmeh[9].classList.remove("dokmehga1");
    // zir_docmeh[10].classList.remove("dokmehga1");
    // zir_docmeh[11].classList.remove("dokmehga1");
    // zir_docmeh[12].classList.remove("dokmehga1");
    // zir_docmeh[13].classList.remove("dokmehga1");
    // zir_docmeh[14].classList.remove("dokmehga1");
    // zir_docmeh[15].classList.remove("dokmehga1");
    // zir_docmeh[16].classList.remove("dokmehga1");
    // zir_docmeh[17].classList.remove("dokmehga1");
    // zir_docmeh[18].classList.remove("dokmehga1");
    // zir_docmeh[19].classList.remove("dokmehga1");
    // zir_docmeh[20].classList.remove("dokmehga1");
    // zir_docmeh[21].classList.remove("dokmehga1");
    // zir_docmeh[22].classList.remove("dokmehga1");
    // zir_docmeh[23].classList.remove("dokmehga1");
    // zir_docmeh[24].classList.remove("dokmehga1");
    // zir_docmeh[25].classList.remove("dokmehga1");
    // zir_docmeh[26].classList.remove("dokmehga1");
    // zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[1].addEventListener("click", function () {
     for (let i = 0 ; i < zir_docmeh.length ; i++ ){
    zir_docmeh[i].classList.remove("dokmehga1");
    }
    coun = (coun) % zir_docmeh.length;
    zir_docmeh[coun].classList.add("dokmehga1")

    // zir_docmeh[0].classList.remove("dokmehga1");
    // zir_docmeh[1].classList.add("dokmehga1");
    // zir_docmeh[2].classList.remove("dokmehga1");
    // zir_docmeh[3].classList.remove("dokmehga1");
    // zir_docmeh[4].classList.remove("dokmehga1");
    // zir_docmeh[5].classList.remove("dokmehga1");
    // zir_docmeh[6].classList.remove("dokmehga1");
    // zir_docmeh[7].classList.remove("dokmehga1");
    // zir_docmeh[8].classList.remove("dokmehga1");
    // zir_docmeh[9].classList.remove("dokmehga1");
    // zir_docmeh[10].classList.remove("dokmehga1");
    // zir_docmeh[11].classList.remove("dokmehga1");
    // zir_docmeh[12].classList.remove("dokmehga1");
    // zir_docmeh[13].classList.remove("dokmehga1");
    // zir_docmeh[14].classList.remove("dokmehga1");
    // zir_docmeh[15].classList.remove("dokmehga1");
    // zir_docmeh[16].classList.remove("dokmehga1");
    // zir_docmeh[17].classList.remove("dokmehga1");
    // zir_docmeh[18].classList.remove("dokmehga1");
    // zir_docmeh[19].classList.remove("dokmehga1");
    // zir_docmeh[20].classList.remove("dokmehga1");
    // zir_docmeh[21].classList.remove("dokmehga1");
    // zir_docmeh[22].classList.remove("dokmehga1");
    // zir_docmeh[23].classList.remove("dokmehga1");
    // zir_docmeh[24].classList.remove("dokmehga1");
    // zir_docmeh[25].classList.remove("dokmehga1");
    // zir_docmeh[26].classList.remove("dokmehga1");
    // zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[2].addEventListener("click", function () {
     for (let i = 0 ; i < zir_docmeh.length ; i++ ){
    zir_docmeh[i].classList.remove("dokmehga1");
    }
    coun = (coun) % zir_docmeh.length;
    zir_docmeh[coun].classList.add("dokmehga1")
    // zir_docmeh[0].classList.remove("dokmehga1");
    // zir_docmeh[1].classList.remove("dokmehga1");
    // zir_docmeh[2].classList.add("dokmehga1");
    // zir_docmeh[3].classList.remove("dokmehga1");
    // zir_docmeh[4].classList.remove("dokmehga1");
    // zir_docmeh[5].classList.remove("dokmehga1");
    // zir_docmeh[6].classList.remove("dokmehga1");
    // zir_docmeh[7].classList.remove("dokmehga1");
    // zir_docmeh[8].classList.remove("dokmehga1");
    // zir_docmeh[9].classList.remove("dokmehga1");
    // zir_docmeh[10].classList.remove("dokmehga1");
    // zir_docmeh[11].classList.remove("dokmehga1");
    // zir_docmeh[12].classList.remove("dokmehga1");
    // zir_docmeh[13].classList.remove("dokmehga1");
    // zir_docmeh[14].classList.remove("dokmehga1");
    // zir_docmeh[15].classList.remove("dokmehga1");
    // zir_docmeh[16].classList.remove("dokmehga1");
    // zir_docmeh[17].classList.remove("dokmehga1");
    // zir_docmeh[18].classList.remove("dokmehga1");
    // zir_docmeh[19].classList.remove("dokmehga1");
    // zir_docmeh[20].classList.remove("dokmehga1");
    // zir_docmeh[21].classList.remove("dokmehga1");
    // zir_docmeh[22].classList.remove("dokmehga1");
    // zir_docmeh[23].classList.remove("dokmehga1");
    // zir_docmeh[24].classList.remove("dokmehga1");
    // zir_docmeh[25].classList.remove("dokmehga1");
    // zir_docmeh[26].classList.remove("dokmehga1");
    // zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[3].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.add("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[4].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.add("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[5].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.add("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[6].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.add("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[7].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.add("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[8].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.add("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[9].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.add("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[10].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.add("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[11].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.add("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[12].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.add("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[13].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.add("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[14].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.add("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[15].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.add("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[16].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.add("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[17].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.add("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[18].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.add("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[19].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.add("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[20].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.add("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[21].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.add("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[22].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.add("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[23].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.add("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[24].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.add("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[25].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.add("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[26].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.add("dokmehga1");
    zir_docmeh[27].classList.remove("dokmehga1");
});
zir_docmeh[27].addEventListener("click", function () {
    zir_docmeh[0].classList.remove("dokmehga1");
    zir_docmeh[1].classList.remove("dokmehga1");
    zir_docmeh[2].classList.remove("dokmehga1");
    zir_docmeh[3].classList.remove("dokmehga1");
    zir_docmeh[4].classList.remove("dokmehga1");
    zir_docmeh[5].classList.remove("dokmehga1");
    zir_docmeh[6].classList.remove("dokmehga1");
    zir_docmeh[7].classList.remove("dokmehga1");
    zir_docmeh[8].classList.remove("dokmehga1");
    zir_docmeh[9].classList.remove("dokmehga1");
    zir_docmeh[10].classList.remove("dokmehga1");
    zir_docmeh[11].classList.remove("dokmehga1");
    zir_docmeh[12].classList.remove("dokmehga1");
    zir_docmeh[13].classList.remove("dokmehga1");
    zir_docmeh[14].classList.remove("dokmehga1");
    zir_docmeh[15].classList.remove("dokmehga1");
    zir_docmeh[16].classList.remove("dokmehga1");
    zir_docmeh[17].classList.remove("dokmehga1");
    zir_docmeh[18].classList.remove("dokmehga1");
    zir_docmeh[19].classList.remove("dokmehga1");
    zir_docmeh[20].classList.remove("dokmehga1");
    zir_docmeh[21].classList.remove("dokmehga1");
    zir_docmeh[22].classList.remove("dokmehga1");
    zir_docmeh[23].classList.remove("dokmehga1");
    zir_docmeh[24].classList.remove("dokmehga1");
    zir_docmeh[25].classList.remove("dokmehga1");
    zir_docmeh[26].classList.remove("dokmehga1");
    zir_docmeh[27].classList.add("dokmehga1");
});

// end-doreh

//   start-atloeah

let dokmeh_atlah = document.querySelectorAll(".dokmeh_atlah");
let baner = document.querySelectorAll(".baner");
let num_atloh = document.querySelectorAll(".num_atloh");

dokmeh_atlah[0].addEventListener("click",function () {
    baner[0].classList.add("sun")
    baner[0].classList.remove("so")
    baner[1].classList.add("so")
    baner[1].classList.remove("sun")
    dokmeh_atlah[0].classList.add("atloh")
    dokmeh_atlah[1].classList.remove("atloh")
    num_atloh[0].classList.add("num_atlohA")
    num_atloh[1].classList.remove("num_atlohA")
});
dokmeh_atlah[1].addEventListener("click",function () {
    baner[1].classList.add("sun")
    baner[1].classList.remove("so")
    baner[0].classList.add("so")
    baner[0].classList.remove("sun")
       dokmeh_atlah[1].classList.add("atloh")
    dokmeh_atlah[0].classList.remove("atloh")
    num_atloh[1].classList.add("num_atlohA")
    num_atloh[0].classList.remove("num_atlohA")
});