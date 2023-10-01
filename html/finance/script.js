// owl carousel 

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      center: true,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          300:{
            items:2,
            nav:true
          },
          600:{
              items:3,
              nav:true
          },
          800:{
            items:4,
            nav:true
          },
          1000:{
              items:5,
              nav:true
          }
      }
  })
})