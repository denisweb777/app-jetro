$(document).ready(function () {

  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    // do not use .grid-sizer in layout
    percentPosition: true,
    horizontalOrder: true,
    transitionDuration: '0.2s'
  });

  // init Isotope
  var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });

  //стили переключателей
  $('.buttonMasonry').click(function () {
    let con = $(this).html();
    switch (con) {
      case "one": {
        $(this).css({
          background: "#e8603c",
          color: "#ffffff",
        });
        $('#showAll, #two, #three').css({
          backgroundColor:"white",
          color: "#414141",
        });
      }break;
      case "two": {
        $(this).css({
          background: "#e8603c",
          color: "#ffffff",
        });
        $('#showAll, #one, #three').css({
          backgroundColor:"white",
          color: "#414141",
        });
      }break;
      case "three": {
        $(this).css({
          background: "#e8603c",
          color: "#ffffff",
        });
        $('#showAll, #one, #two').css({
          backgroundColor:"white",
          color: "#414141",
        });
      }break;
      case "show all": {
        $(this).css({
          background: "#e8603c",
          color: "#ffffff",
        });
        $('#three, #one, #two').css({
          backgroundColor:"white",
          color: "#414141",
        });
      }break;
    }
  });
});

