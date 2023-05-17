   // ================================ //
// STICKY EDITOR & MODERATOR
// ================================ //
let img_moderator = $(".img-moderator");
let img_moderator_width = img_moderator.innerWidth();
let img_overlay_height = $(".overlay-img").innerHeight();
let img_moderator_offset_left = img_moderator.offset()?.left;
let img_moderator_offset_top = img_moderator.offset()?.top - $("#mid-section-wrapper").offset()?.top;
let gap = $(window).height() * 0.3;
let img_editor = $(".img-editor");
let img_editor_offset_top = img_editor.offset()?.top;
let img_editor_width = img_editor.innerWidth();
let vid;
let play_video = false;

function initSticky(){
    img_moderator_width = img_moderator.innerWidth();
    img_moderator_offset_left = img_moderator.offset()?.left;
    img_moderator_offset_top = img_moderator.offset()?.top - $("#mid-section-wrapper").offset()?.top;
    img_editor_offset_top = img_editor.offset()?.top;
    img_editor_width = img_editor.innerWidth();
    img_editor_height = img_editor.innerHeight();
    
    document.documentElement.style.setProperty('--moderator-left', img_moderator_offset_left + "px");
    document.documentElement.style.setProperty('--moderator-top', img_moderator_offset_top + "px");
    document.documentElement.style.setProperty('--moderator-width', img_moderator_width + "px");
    document.documentElement.style.setProperty('--editor-height', img_editor_height + "px");
    document.documentElement.style.setProperty('--gap', gap + "px");

    let section_wrapper = $("#mid-section-wrapper").offset()?.top;
    let calc_img_width = img_editor_width * 0.016;
    document.documentElement.style.setProperty('--editor-top', ((img_editor_offset_top - section_wrapper) + calc_img_width) + "px");

    setTimeout(function(){
        img_overlay_height = $(".overlay-img").innerHeight();
        document.documentElement.style.setProperty('--overlay-height', img_overlay_height + "px");
    }, 1000);

    $(".scroll").each(function(){
        let getHref = $(this).attr("href");
        $(this).unbind('click').bind("click", function(e){
            e.preventDefault();
            let getPostion = $(getHref).offset()?.top - 100;
            $("html, body").animate({ scrollTop: getPostion });
        });
    });
}

function scrollUpdate(){
    let doc = document.documentElement;
    let doc_top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    let section_wrapper = $("#mid-section-wrapper").offset()?.top;
    img_editor_width = img_editor.innerWidth();
    let calc_img_width = img_editor_width * 0.020;
    let calc_img_moderator_width = img_moderator_width * 0.017;
    img_editor_offset_top = img_editor.offset()?.top;
    img_moderator_offset_top = img_moderator.offset()?.top;
    document.documentElement.style.setProperty('--editor-top', ((img_editor_offset_top - section_wrapper) + calc_img_width) + "px");

    let calc_start_position = (img_moderator_offset_top - gap) + calc_img_moderator_width;
    if(doc_top >= calc_start_position){
        let calc_end_position = (img_editor_offset_top - gap) + calc_img_width;
        if(doc_top >= calc_end_position){            
            $(".overlay-img").removeClass("fixede");
            $(".overlay-img").addClass("bottom-positionnone");
            setTimeout(function(){
                $(".img-editor-menu").addClass("animated-fade-in-right");
            }, 500);
        }else{
            $(".overlay-img").removeClass("bottom-positionnone");
            $(".overlay-img").addClass("fixede");
        }
    }else{
        $(".overlay-img").removeClass("fixede");
    }
}

// ================================ //
// SET MARGIN MODERATOR STICKY
// ================================ //
function setMarginModerator() {
    // getTop Element StaticWalk
    const topElemenetStaticWalk = $('#static-walk').offset()?.top;
    
    // getHeight Element Editor
    const heightElementEditor = $('#scroll-editor').offset()?.top + $('#scroll-editor').outerHeight();
    
    // ==================== //
    // GET VALUE HEIGHT FOR MARGIN BOTTOM
    // ==================== //
    const valueHeightMargin = topElemenetStaticWalk - heightElementEditor;
    
    // Screen Width
    const screenWidth = $(window).width();

    // set offset margin bottom
    let offsetMarginBottom = 0;
    
    // check condition screen width
    if (screenWidth < 1367) {
        offsetMarginBottom = 5;
    } else if (screenWidth > 1910) {
        offsetMarginBottom = 9;
    } else {
        offsetMarginBottom = 5.7;
    }
    console.log(window.location.href);

    $('.moderator-sticky').css('margin-bottom', valueHeightMargin + offsetMarginBottom);
};

// ================================ //
// BORDER BANNER
// ================================ //
function initBorder() {
    let height_virtualElement = document.getElementById("endborder")?.offsetHeight,
        height_haveElement = 0,
        height_clientsElement = document.querySelector(".clients-title")?.offsetHeight,
        height_clientsLogos = document.querySelector(".clients-logos")?.offsetHeight,
        
        height_industriesTitle = document.querySelector(".our-industries-title")?.offsetHeight;
        
        // Set Height Virtual Element
        document.documentElement.style.setProperty('--virtual-element', height_virtualElement + height_haveElement + "px");

        // Set Height Clients
        document.documentElement.style.setProperty('--clients-element', height_clientsElement + height_clientsLogos + "px");
        
        // Set Height industries
        document.documentElement.style.setProperty('--industries-title', height_industriesTitle + "px");   

        // Pages Moderator
        document.documentElement.style.setProperty('--section-question', $(".moderator__question")?.height() + "px");
        document.documentElement.style.setProperty('--question-header', $(".moderator__tour-creator__header")?.outerHeight() + "px");
        document.documentElement.style.setProperty('--question-header-trisio', $(".moderator__question__header")?.outerHeight() + "px");
        
        // Pages Virtual Tour
        document.documentElement.style.setProperty('--section-question-virtual-tour', $(".virtual-creator__question")?.height() + "px");
        document.documentElement.style.setProperty('--question-header-virtual-tour', $(".virtual-creator__tour-creator__header")?.outerHeight() + "px");
        
        document.documentElement.style.setProperty('--section-virtual-tour', $(".virtual-creator__sample-tour")?.outerHeight() + "px");
        document.documentElement.style.setProperty('--section-virtual-tour-question', $(".virtual-creator__question")?.outerHeight() + "px");
        
        // Pages Vr App
        document.documentElement.style.setProperty('--section-vr-app-question', $(".vr-app__question")?.outerHeight() + "px");
        document.documentElement.style.setProperty('--section-how-it-works-main', $(".vr-app__how-it-works__main")?.outerHeight() + "px");
        
        // Pages How it Works
        document.documentElement.style.setProperty('--blue-line-how-it-works', $(".blue-publishing__how-it-works")?.outerHeight() + "px");
        document.documentElement.style.setProperty('--blue-line-question', $(".blue-publishing__question")?.outerHeight() + "px");
        
        // Pages Video Creator
        document.documentElement.style.setProperty('--video-creator-benefit', $(".video-creator__how-it-works__main")?.outerHeight() + "px");
       
        // Pages Custom Url
        document.documentElement.style.setProperty('--contact-custom-url', $(".custom-url__contact")?.outerHeight() + "px");

        // Image Banner Moderator
        document.documentElement.style.setProperty('--height-image-moderator-banner', $("#image-moderator")?.height() + "px");

        document.documentElement.style.setProperty('--video-width', $(".cover-video").innerWidth() + "px");
        document.documentElement.style.setProperty('--video-walkthrough', $(".cover-walkthrough").innerWidth() + "px");
}

// ================================ //
// NAVIGATION
// ================================ //
function navigation() {
    $('#navigation').slimmenu({
        resizeWidth: '980',
        collapserTitle: '',
        animSpeed: 'medium',
        easingEffect: null,
        indentChildren: false,
        childrenIndenter: '&nbsp;'
    });
};

// ================================ //
// Sticky Navbar
// ================================ //
function stickyNavbar() {
    let start_top_position = $("#header-wrapper").height();
    const scroll = $(window).scrollTop();
    if(scroll > start_top_position){
        $("#header-wrapper").addClass("on");
    }else{
        $("#header-wrapper").removeClass("on");
    }
};

document.onresize = () => {
    initSticky();
    initBorder();
    navigation();
    setMarginModerator();
    screenWidth = $(window).width();
};

document.onscroll = () => {
    scrollUpdate();
    stickyNavbar();
};

document.addEventListener('DOMContentLoaded', (event) => {
    $('.wrapper-loader').remove();
    $('body').css({"overflow":"inherit"})

    // ================================ //
    // Excecute Sticky
    // ================================ //
    scrollUpdate();
    
    // ================================ //
    // OWL CAROUSEL
    // ================================ //
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        dotsEach: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false

            }
        }
    })

    $('.owl-carousel-custom-url').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        dotsEach: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false

            }
        }
    })

    // ================================ //
    // NAVIGATION
    // ================================ //
        navigation();

    // ================================ //
    // Match Height Features
    // ================================ //
    const featureHeading = $(".feature-item h3");
    const featureItem = $(".feature-item");
    if (featureHeading.length > 0 && featureItem.length > 0) {
        featureHeading.matchHeight();  
        featureItem.matchHeight();
    }     
    // ================================ //
    // Toggle Language
    // ================================ //
    let toggle = document.querySelector(".toggle-language"),
    wrapperLanguage = document.querySelector(".wrap-language");
    
    if(wrapperLanguage) {
        toggle.addEventListener('click', () => {
            wrapperLanguage
            .classList
            .toggle("active");
        })
    }

    
    // ================================ //
    // Set Margin Moderator Sticky
    // ================================ //
    setMarginModerator();

    initSticky();
});

window.onload = () => {
    initBorder();
    setMarginModerator();
};


// Tab Pane Street Publishing
// ================================ //
$(".button__how-it-works").click(function () {
    // Active state for tabs
    $(".button__how-it-works").removeClass("active");
    $(this).addClass("active");

    // Active state for Tabs Content
    $(".tab__how-it-works").removeClass("active");
    $(this.rel).addClass("active");
});

// ================================ //
// ACCORDION FAQ
// ================================ //
$('.cq-box').each(function(){
    let elem = $(this);
    elem.on("click", function(){
        elem.find(".panel").toggleClass("on");
        document.documentElement.style.setProperty('--section-question', $(".moderator__question").height() + "px");
        document.documentElement.style.setProperty('--section-question-virtual-tour', $(".virtual-creator__question").height() + "px");
        document.documentElement.style.setProperty('--section-virtual-tour-question', $(".virtual-creator__question").outerHeight() + "px");
        document.documentElement.style.setProperty('--section-vr-app-question', $(".vr-app__question").outerHeight() + "px");

    })
});


// ================================ //
// ADD STICKY PLAN LIST
// ================================ //
let startPositionOurPlan = document.querySelector('#pricing');
let startPositionFooterOurPlan = document.querySelector('.footer-ourplans');
let screenWidth = $(window).width();
if (screenWidth > 769) {
    startPositionOurPlan = startPositionOurPlan?.offsetTop + startPositionOurPlan?.offsetHeight - 300;
    startPositionFooterOurPlan = startPositionFooterOurPlan?.offsetTop - 100;
    if(startPositionOurPlan && startPositionFooterOurPlan) {
        $(window).scroll(() => {
            const scroll = $(window).scrollTop();
            if(scroll >= startPositionOurPlan && scroll <= startPositionFooterOurPlan){
                $(".our-plan__sticky-pricing").slideDown();
            }else{
                $(".our-plan__sticky-pricing").slideUp();
            }
        });
    }
} else {
    startPositionOurPlan = $(".our-plan__sticky-pricing").offset()?.top + 50;
    startPositionFooterOurPlan = document.querySelector('.footer-ourplans-mobile')?.offsetTop - 200;
    if(startPositionOurPlan && startPositionFooterOurPlan) {
        $(window).scroll(() => {
            const scroll = $(window).scrollTop();
            if(scroll >= startPositionOurPlan && scroll <= startPositionFooterOurPlan){
                $("#sticky-mobile").slideDown();
            }else{
                $("#sticky-mobile").slideUp();
            }
        });
    }
}


// ================================ //
// TAB ACTIVE TABLE PLAN ON MOBILE
// ================================ //
$('.tab-pricing-mobile td').each(function(index,element){
    let elem = $(this);
    elem.on('click', function(){
        $('.tab-pricing-mobile td').removeClass('active');
        $(this).addClass('active');

        $('.tab-pricing-mobile-sticky td').removeClass('active');
        $('.tab-pricing-mobile-sticky td').each(function(idx,element){
            if(index === idx) {
                $(this).addClass('active');
            }
        })

        $('.pricing-row').each(function(i, element) {
            const row = $(element).children('td').eq(index);
            const activeClass = $(element).children('.active-mobile')
            activeClass.removeClass('active-mobile');
            row.addClass('active-mobile');
        })
    })
});

// ================================ //
// TAB ACTIVE TABLE PLAN ON MOBILE
// ================================ //
$('.tab-pricing-mobile-sticky td').each(function(index,element){
    let elem = $(this);
    elem.on('click', function(){
        $('.tab-pricing-mobile-sticky td').removeClass('active');
        $(this).addClass('active');

        $('.tab-pricing-mobile td').removeClass('active');
        $('.tab-pricing-mobile td').each(function(idx,element){
            if(index === idx) {
                $(this).addClass('active');
            }
        })

        $('.pricing-row').each(function(i, element) {
            const row = $(element).children('td').eq(index);
            const activeClass = $(element).children('.active-mobile')
            activeClass.removeClass('active-mobile');
            row.addClass('active-mobile');
        })
    })
});


// ================================ //
// Canvas Draw
// ================================ //
const canvasBody = document.getElementById("particles-js");
const canvasBodyDark = document.getElementById("particles-dark");

if (canvasBody) {
    particlesJS('particles-js',
        {
        "particles": {
            "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
            },
            "color": {
            "value": "#918e8e"
            },
            "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
            },
            "opacity": {
            "value": 0.2,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
            },
            "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
            },
            "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#c8c8c8",
            "opacity": .2,
            "width": 2
            },
            "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
            },
            "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
            }
        },
        "retina_detect": true
        }    
    );
}

if (canvasBodyDark) {
    particlesJS('particles-dark',
    {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.1,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 4,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.1,
            "width": 1.2
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
    );
}

const listButtonPricing = document.querySelectorAll('.btn-buynow');

const buttonPricingClick = ()=> {
    listButtonPricing.forEach(element => {
        element.addEventListener('click', ()=> {
            const cookieValue = element.getAttribute("buyNow");
            document.cookie = `buy_now=${cookieValue}`;
            window.open('https://gothru.co/register.html');
        })
    })
}

if(listButtonPricing) buttonPricingClick();
