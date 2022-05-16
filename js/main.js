'use strict';

$(function () {
  $(window).on("scroll", function () {
    
    //스크롤 다운
    if ($(window).scrollTop() > 400) {
        $("#scroll_down").css("bottom", "-100px");
        $("#scroll_down").css("opacity", "0");
      } else {
        $("#scroll_down").css("bottom", "200px");
        $("#scroll_down").css("opacity", "1");
      }
    });
  });

$(document).ready(function () {  
  //자동차 색상 변경
  $('#visual4 .btn li').on('click', function() {
    var index = $('#visual4 .btn li').index($(this));
    $('#visual4 .car div').css({'display': 'none'});
    $('#visual4 .car div:eq(' + index + ')').css({'display': 'block'});
    $('#visual4 .btn li').removeClass('on');   
    $('#visual4 .btn li:eq(' + index + ')').addClass('on');
  });
});


//엔진
$(document).ready(function () {
  $("#visual4 .engine .engine_off").on("click", function () {
    $("#visual4 .light").fadeIn(700);
    $("#visual4 .engine_on").fadeIn(0);
    $("#visual4 .engine_off").fadeOut(0);
  });

  $("#visual4 .engine .engine_on").on("click", function () {
    $("#visual4 .light").fadeOut(700);
    $("#visual4 .engine_off").fadeIn(0);
    $("#visual4 .engine_on").fadeOut(0);
  });
});



//팝업창
$(document).ready(function () {
  $("#pop_bt1").click(function () {
    $("#pop1").show();
  });

  $("#pop_bt2").click(function () {
    $("#pop2").show();
  });

  $("#pop_bt3").click(function () {
    $("#pop3").show();
  });

  $(".close").click(function () {
    $("#pop1").hide();
  });

  $(".close").click(function () {
    $("#pop2").hide();
  });

  $(".close").click(function () {
    $("#pop3").hide();
  });
});



