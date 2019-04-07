$(window).on('load',function(){

  $('.preloader').delay(2000);
  $('.preloader').fadeOut(1000);
});

$(document).scroll(function() {

 var scrollv=$(this).scrollTop();
 var h=document.body.clientHeight;
 var no=((scrollv)/h);
 no+=0.1
 var page=Math.ceil(no);
 if(page!=1)
 page--;
 if(page>5)
 page=5;
 document.getElementById("txt").innerHTML =page+' / 5';


$('.content').each(function() {

  var ho=$(this).offset().top;

  input= ((scrollv-ho+(h/1.3))/(0.55*h));
  if(input<0)
  input=0;


  $(this).css('opacity',input);

  });

  if(scrollv>100)
  {
    $('.slide').fadeOut(500);
  }
  if(scrollv<100)
  {
    $('.slide').fadeIn(500);
  }
});
