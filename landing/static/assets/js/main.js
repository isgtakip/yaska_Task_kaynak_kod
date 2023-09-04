function init (){
var swiper = new Swiper(".swiper-preise", {
    observer: true,
    observeParents: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
          breakpoints: {
        0: {
            slidesPerView: "auto",
        },
        576: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1200: {
        slidesPerView: 4,
        }
      }
  });


var swiper = new Swiper(".swiper-services", {
    observer: true,
    observeParents: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
          breakpoints: {
        0: {
            slidesPerView: "auto",
        },
        576: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
      }
  });


  var swiper = new Swiper(".swiper-services-2", {
    observer: true,
    observeParents: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
          breakpoints: {
        0: {
            slidesPerView: "auto",
        },
        576: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
      }
  });


  var swiperTestimonial = new Swiper('.swiper-testimonial', {
    observer: true,
    observeParents: true,
    loop:true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
	
    }
  });

  $("header ul li .nav-link").click(function (e) { 
      $("header ul li .nav-link").not(this).removeClass("active");
      $(this).addClass("active");
   })

   document.addEventListener('DOMContentLoaded', function() {
    Typed.new('#typed', {
        strings: ["Ihrem Erfolg", "Ihrer Reputation", "Ihrer Sichtbarkeit", "Ihrem Umsatz", "Ihrem Ranking"],
        stringsElement: null,
        // typing speed
        typeSpeed: 60,
        // time before typing starts
        startDelay: 600,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 5,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
    });
});

document.addEventListener('swiper-wrapper', function(){
  Typed.new('#typed', {
      strings: ["Ihrem Erfolg", "Ihrer Reputation", "Ihrer Sichtbarkeit", "Ihrem Umsatz", "Ihrem Ranking"],
      stringsElement: null,
      // typing speed
      typeSpeed: 60,
      // time before typing starts
      startDelay: 600,
      // backspacing speed
      backSpeed: 20,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: true,
      // false = infinite
      loopCount: 5,
      // show cursor
      showCursor: false,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
  });
});
}