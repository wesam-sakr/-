var bodyDir = $('body').css('direction')
console.log(bodyDir)
var dirAr
if(bodyDir == "rtl"){
  dirAr= true
}
else{
  dirAr = false
}

console.log($('link[title=ltr]')[0])



$('#loading').fadeOut(500);
// let screen = $(window).width();
// console.log(screen);
// $('.curve').css({
//     "width":  + "" + screen,"height" : screen * .5,"border-top-left-radius":  (screen * 2),"border-top-right-radius": ($screen * 2)
// })
// $('.curve.top').css()

/* -------------------------------- jquery -------------------------------- */ 
$(".toggle-side-menu-classification").click(function(){
    $(".side-menu-classification").toggleClass("show");
    $(".overlay-sidemenu").toggleClass("show");
})
$(".close-side-menu-classification").click(function(){
    $(".side-menu-classification").removeClass("show");
    $(".overlay-sidemenu").removeClass("show");
})


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        navText: ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            992:{
                items:2
            }
        }
    })
});

var navbar = document.getElementsByClassName("navbar");
var sticky = navbar[0].offsetHeight ;


// make nav bar static on scroll 
window.addEventListener("scroll" , function(){
    if (this.document.documentElement.scrollTop >= sticky) {
        // $(navbar).css("position", "fixed");
        $(navbar).addClass("bg-main-color");
    } else {
        $(navbar).removeClass("bg-main-color")
        // $(navbar).css("position", "sticky");
    }
})


$('.choose-car-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    rtl:true,
    autoplay:true,
    autoplayTimeout:20000,
    nav:false,
    responsive:{
        0:{
            item:3,
        },
        600:{
            item:6,
        },
        1000:{
            items:9,
        }
    }
});

$('.new-cars .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    responsiveClass:true,
    rtl:true,
    autoplay:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
$('.client-comment .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsiveClass:true,
    rtl:true,
    autoplay:false,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        992:{
            items:3
        }
    }
});

$('.op-pro-filter').click(function () {
    $(this).toggleClass('active');
    $('.filter').slideToggle();
});

$('select').niceSelect();
