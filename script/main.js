// owl carosul 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// owl carosul end

// scroll bar action 
window.onscroll = function() {
    const navbar = document.getElementById("nav-bar");
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        navbar.classList.add("md:fixed");
        navbar.classList.add("bg-gray-800");
        navbar.classList.remove("absolute");
        navbar.classList.remove("md:mt-5");
        navbar.classList.remove("opacity-70");
        navbar.classList.remove("bg-[#5E5C5C]");

    } else {
        navbar.classList.remove("md:fixed");
        navbar.classList.remove("bg-gray-800");
        navbar.classList.add("absolute");
        navbar.classList.add("md:mt-5");
        navbar.classList.add("opacity-70");
        navbar.classList.add("bg-[#5E5C5C]");
    }
};

// scroll bar action end

// menu bar 
const menu = document.getElementById('nav-bar');
const navContainer = document.querySelector('.nav-container');
const button1 = document.querySelector('.menu-btn1');
const button2 = document.querySelector('.menu-btn2');
const navLink = document.querySelector('.link-section');
const lang = document.querySelector('.lang');



button1.addEventListener('click', (e) => {
    button1.classList.toggle('hidden');
    button2.classList.toggle('hidden');
    navContainer.classList.toggle('flex-col');
    navLink.classList.toggle('hidden');
    lang.classList.toggle('hidden');
    e.stopPropagation(); // Prevent the click from bubbling up
});
button2.addEventListener('click', (e) => {

    button1.classList.toggle('hidden');
    button2.classList.toggle('hidden');
    navContainer.classList.toggle('flex-col');
    navLink.classList.toggle('hidden');
    lang.classList.toggle('hidden');
    e.stopPropagation(); // Prevent the click from bubbling up
});


     // Close the navbar if clicked outside
     document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !navLink.classList.contains('hidden') ) {
            button1.classList.toggle('hidden');
            button2.classList.toggle('hidden');
            navContainer.classList.toggle('flex-col');
            navLink.classList.toggle('hidden');
            lang.classList.toggle('hidden');
        }
    });

// menu bar end