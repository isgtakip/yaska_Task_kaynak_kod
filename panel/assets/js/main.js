var swiper = new Swiper(".swiper-preise", {
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

