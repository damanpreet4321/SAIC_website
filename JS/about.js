var check=0;

$(document).scroll(function(){

  var scrollv=$(this).scrollTop();
  var h=document.body.clientHeight/1.8;
  var check=$('#about').offset().top-h-100;
  var ev_h=$('#event').offset().top;
  if(scrollv>check)
  {
    $('.svg_1').addClass('final');
    $('.about_content').addClass('final');
    $('.head').addClass('final');

  }

  if(scrollv<check)
  {
    $('.svg_1').removeClass('final');
    $('.about_content').removeClass('final');
    $('.head').removeClass('final');
  }

  var value= (scrollv-(ev_h)/3);
  $('.svg_team').css('transform','translateX(-'+ value +'px)');
  $('.svg_4').css('transform','translateX(-'+ value +'px)');

});

$(document).ready(function() {
          var i=0
  setInterval(function(){
      if(i%2==0){
        $('.ah_2').css('transform','translateY(0px)');
        $('.ah_1').css('transform','translateY(100px)');
        $('.ah_1').css('z-index','7');
      }
      if(i%2!=0){
        $('.ah_1').css('transform','translateY(0px)');
        $('.ah_2').css('transform','translateY(100px)');
        $('.ah_1').css('z-index','5');
      }
      i++;
      console.log(i);
    },3000);
});
