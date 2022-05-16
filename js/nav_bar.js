$(document).ready(function () {
  var menu_select = "#menu1";
  console.log(menu_select);
  $("#menu").prepend("<div id='nav_bar'></div>");

  // var string1 = "s1";
  // console.log(string1);
  // console.log(string1.slice(1, 2)); //1

  // console.log($("menu1").width());
  // console.log($("menu1").outerWidth());
  // console.log($("menu1").position().left);

  $("#nav_bar").css("width", $("#menu1").outerWidth());
  // $("#nav_bar").css("left", $("#menu1").position().left);
  $("#nav_bar").animate(
    { left: $("#menu1").position().left, opacity: 1 },
    "slow"
  );

  // for (var i = 1; i <= 6; i++) {
  //   console.log(i);
  //   console.log("#menu" + i).on("click", function () {
  //     console.log(this.id);
  //     menu_select = this.id;
  //     $("#nav_bar").css("width", $(this).outerWidth());
  //     $("#nav_bar").animate(
  //       { left: $(this).position().left, opacity: 1 },
  //       "slow"
  //     );
  //   });
  // }

  $("#menu li a").on("click", function () {
    menu_select = "#" + this.id; //menu3
    // console.log(this);
    // console.log(menu_select); //menu2
    // console.log("#" + menu_select); //menu2
    // console.log($("#" + menu_select)); //menu2
    // console.log("#menu1");
    // console.log($("#menu1"));

    $("#nav_bar").css("width", $(this).outerWidth());
    $("#nav_bar").animate(
      { left: $(this).position().left, opacity: 1 },
      "slow"
    );
  });

  //리사이즈 이벤트
  $(window).on("resize", function () {
    console.log("resize");
    console.log(menu_select);
    $("#nav_bar").css("left", $(menu_select).position().left);
  });

  //마우스 휠 이벤트
  // $("html,body").on("mousewheel", function () {
  //   console.log("mousewheel");
  //   console.log("나의 js:-------+ mySectionNum.slice(1, 2));
  //   console.log(mySectionNum);
  // menu_select = "#menu" + mySectionNum.slice(1, 2);
  // $("#nav_bar").css("left", $("menu_select").position().left);
});
