$(document).ready(function(){
   $('.warehouse__block').slick({
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: true,
     dots: true,
     responsive:[
     {
       breakpoint: 991,
       settings:{
         slidesToShow:2
       }
     },
     {
        breakpoint: 767,
        settings:{
         slidesToShow: 1
        }
     }
       
     ]
   });
  
    $('.cooperation__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      dots: false,
      autoplay: true,
      arrows: false,
      responsive:[
        {
          breakpoint: 991,
          settings:{
           slidesToShow: 2,
           autoplaySpeed: 1500
         }
        },
        {
          breakpoint: 767,
          settings:{
           slidesToShow: 2,
           autoplaySpeed: 1500
         }
        },
        {
          breakpoint: 575,
          settings:{
           slidesToShow: 1,
           autoplaySpeed: 1500
         }
        }
        
      ]
    });
    $('.wait__slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      dots: false,
      arrows: false,
      mobileFirst: true,
      responsive:[
        {
          breakpoint: 991,
          settings:{
           slidesToShow: 4
         }
        },
        {
          breakpoint: 767,
          settings:{
           slidesToShow: 3,
           autoplay: true,
           autoplaySpeed: 1500
         }
        },
        {
          breakpoint: 575,
          settings:{
           slidesToShow: 2,
           autoplay: true,
           autoplaySpeed: 1500
         }
        },
        {
          breakpoint: 319,
          settings:{
           slidesToShow: 1,
           autoplay: true,
           autoplaySpeed: 1500
         }
        }
        
      ]
    });
    
    $('.guarantee__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      dots: false,
      arrows: false,
      mobileFirst: true,
      responsive:[
        {
          breakpoint: 991,
          settings:{
           slidesToShow: 3
         }
        },
        {
          breakpoint: 767,
          settings:{
           slidesToShow: 2,
           autoplay: true,
           autoplaySpeed: 2000
         }
        },
        {
          breakpoint: 575,
          settings:{
           slidesToShow: 2,
           autoplay: true,
           autoplaySpeed: 2000
         }
        },
        {
          breakpoint: 319,
          settings:{
           slidesToShow: 1,
           autoplay: true,
           autoplaySpeed: 2000
         }
        }
        
      ]
    });
    $('.bonuses__slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      dots: false,
      arrows: false,
      mobileFirst: true,
      responsive:[
        {
          breakpoint: 1199,
          settings:{
           slidesToShow: 4,
           autoplay: true,
           autoplaySpeed: 1500,
           
         }
        },
        {
          breakpoint: 767,
          settings:{
           slidesToShow: 3,
           autoplay: true,
           autoplaySpeed: 1500
         }
        },
        {
          breakpoint: 575,
          settings:{
           slidesToShow: 2,
           autoplay: true,
           autoplaySpeed: 1500
         }
        },
        {
          breakpoint: 319,
          settings:{
           slidesToShow: 1,
           autoplay: true,
           autoplaySpeed: 1500,
           
         }
        }
        
      ]
    });
 });