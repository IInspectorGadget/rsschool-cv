
function scrollToSection(){
    var linkNav = document.querySelectorAll('a[href^="#"]'),
    V = 1; 
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].onclick = function(){

            var w = window.pageYOffset;
            var hash = this.hash;
            var t = document.querySelector(hash).getBoundingClientRect().top;
            var start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) start = time;
                
                var progress = time - start;
                var r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
                window.scrollTo(0,r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash
                }
            }

            return false;
        }
    }

}
function burgerMenu(){
    const mobile_btn = document.querySelector('.mobile-menu__btn');
    const mobile_icon = document.querySelector('.mobile-menu__icon');
    const nav = document.querySelector('nav');

    mobile_btn.onclick = ()=>{
        if (mobile_icon.classList.contains('mobile-menu__icon-active')){
            mobile_icon.classList.remove('mobile-menu__icon-active');
            mobile_btn.classList.remove('mobile-menu__btn-active');
            nav.classList.remove("nav-active");

        }else{
            mobile_btn.classList.add('mobile-menu__btn-active');
            mobile_icon.classList.add("mobile-menu__icon-active");
            nav.classList.add("nav-active");
        }
    }

    window.addEventListener('resize', function(event) {
        if (nav.classList.contains( 'nav-active' ) && window.screen.width>660){
            mobile_icon.classList.remove('mobile-menu__icon-active');
            mobile_btn.classList.remove('mobile-menu__btn-active');
            nav.classList.remove("nav-active");
        }
    }, true);
    

}

scrollToSection();


burgerMenu();