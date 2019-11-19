$(".nav").hover(function(){
  $("ul", $(this)).stop().slideDown();
}, function(){
  $("ul", $(this)).stop().slideUp();
});

var n = 0;
(function ani(){
  $(".banner > ul").delay(2000).animate({"left": "-=1000px"}, 2000, function(){
    n++;
    if(n==5) {
      n=0;
      $(this).css("left", "0px");
    } 
    ani();
  });
})();

function modalOpen(){
  $("#modal-bg").show(0);
  $("#modal-wrap").css("display", "table-cell");
}

function modalClose() {
  $("#modal-bg").hide(0);
  $("#modal-wrap").css("display", "none");
}

function winOpen() {
  window.open("win.html", "win", "widht=500, height=500, left=200, top=200, scrollbars=no, toolbar=no, menubar=no, status=no, resizable=no, location=no");
}

var Content = $(".tab-content > div");
$(Content).hide();
$(Content).last().slideDown(500);
$(".tab-buttons span").click(function(){
  var Tabs = $(this).attr("class");
  $("#lamp").removeClass().addClass("#lamp").addClass(Tabs);
  $(Content).each(function(){
    if($(this).hasClass(Tabs)){
      $(this).fadeIn(800);
    }else{
      $(this).hide();
    }
  });
});

/* (function(){
  $("#gallery img:gt(0)").hide();
  $("#galleryFolder").click(function(){
    $("#gallery img:first").fadeOut().next().fadeIn().appendTo("#galleryFolder");
  });
  
}); */
/* var i = 0;
$(".btn-prev").click(function(){
  if (i > 0) i--;
  boxSlide();
});
$(".btn-next").click(function(){
  if (i < 3);
  i++;
  boxSlide();
});

function boxSlide() {
  $(".service-slide").stop().css("left", (-i*600)+"px");
} */

/* function aniFade(){
  $(".service-slide li:gt(i)").stop().fadeOut().next().fadeIn().appendTo(".service-slide");
} */

(function(){
  $(".service-slide li:gt(0)").hide();
  $("#gallery-button .btn-prev").click(function(){
    $(".service-slide li:first").stop().fadeOut(1000).next().fadeIn(1000).end().appendTo(".service-slide");
  });
  $("#gallery-button .btn-next").click(function(){
    $(".service-slide li:last").prependTo(".service-slide").fadeIn().next().fadeOut();
  });
})();