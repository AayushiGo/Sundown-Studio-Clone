const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var elemC = document.querySelector(".elem-container");
var img = document.querySelector(".fixed-img");


elemC.addEventListener("mouseenter" , function(){
    img.style.display = "block"
})

elemC.addEventListener("mouseleave" , function(){
    img.style.display = "none"
})


var elems = document.querySelectorAll('.elem')
elems.forEach( function(e){
    e.addEventListener("mouseenter" , function(){
        var a = e.getAttribute("data-image")
        img.style.backgroundImage = `url(${a})`
    })
})


