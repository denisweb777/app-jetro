$(function () {
    $('.slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots:false,
        speed:2000,
        arrows: false,
        centerPadding:'30px',
        
        /*adaptability*/ 
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
});

$(document).ready(function(){
  $('.slider1').slick({
      autoplay: true,          /*автопрокрутка*/ 
      /*speed:2000,            /*плавность слайдера*/
      autoplaySpeed: 4000,     /*периодичность прокрутки*/ 
      cssEase:'ease-in',       /*тип прокрутки: linear, ease-in, ease*/ 
      /*slidesToShow: 3,       /*сколько изначально показывается слайдов*/ 
      /*slidesToScroll:1,      /*количество прокручиваемых слайдов за один проход*/ 
      fade:true,               /*проявление слайдеров вместо прокрутки*/
      /*vertical:true,         /*вертикальная прокрутка слайдера*/
      /*rows:2,                /*количество строк в слайдере(по умолчанию одна)*/
      /*infinite:false         /*слайдер не будет листаться безконечно*/
      /*slidesPerRow:2         /*количество слайдеров в строке*/
      /*draggable:false,       /*зажатием перематывать слайлы не получется*/ 
      /*centerMode:true,       /*установка слайдера по центру*/ 
      /*centerPadding:true,    /*отступы по краям центрированного слайдера*/ 
      /*pauseOnFocus:true,     /*при наведении мышки на слайдер слайдер останавливается*/ 
      /*rtl:true,              /*слайдер листается в противоположную сторону*/ 
      //-------------НАСТРОЙКА ТОЧЕК
      dots:false,               /*наличие точек*/ 
      /*dotsClass: "my-dots",  /*свой класс для настройки точек*/ 
      /*pauseOnDotsHover:true, /*при наведении на точки слайдер останавливается*/
      //-------------НАСТРОЙКА СТРЕЛОК
      /*arrows: false           /*отключить стрелки*/ 
      prevArrow: '<img id = "prev" src="img/recentWorks/arrowR.png" alt="">',
      nextArrow: '<img id = "next" src="img/recentWorks/arrowL.png" alt="">', 
      //-------------СВЯЗКА С ДРУГИМ СЛАЙДЕРОМ
      asNavFor: '.slider2'     /*связка со слайдером 2*/ 
      
      /*-------------НАСТРОЙКА АДАПТИВНОСТИ
      responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
      */        
  });
});

  $('.slider2').slick({
      dots:false,
      slidesToShow:7,
      centerMode:true,
      centerPadding:'40px',
      asNavFor: '.slider1',  /*связка со слайдером 1*/ 
      focusOnSelect: true,   /*при щелчке по конкретному слайду от отображается в верхнем слайдере*/ 
      arrows: false,
      responsive: [
          {
            breakpoint: 900,
            settings: {
              /*arrows: false,*/
              /*centerMode: true,*/
              /*centerPadding: '40px',*/
              slidesToShow:3,
              /*slidesToShow:1,*/
              /*slidesToScroll:1,*/
            }
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
      ]
});
