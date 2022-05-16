window.onload = function () {
  var myDate;
  var year;
  var month;
  var date;
  var hour;
  var minute;
  //배열 생성해서 myDay에 할당
  var myDay = ["일", "월", "화", "수", "목", "금", "토"];
  console.log(myDay[3]);

  setInterval(function () {
    //시간 객체 생성해서 myDate 변수에 할당
    myDate = new Date();
    console.log(myDate);

    year = myDate.getFullYear();
    month = myDate.getMonth() + 1;
    date = myDate.getDate();
    day = myDate.getDay();
    minute = myDate.getMinutes();
    second = myDate.getSeconds();

    if (myDate.getHours() > 12) {
      hour = "PM:" + (myDate.getHours() - 12);
    } else {
      hour = "AM:" + myDate.getHours();
    }

    console.log(year + "년" + month + "월" + date + "일" + myDay[day] + "요일");
    console.log(hour + "시" + minute + "분");

    document.getElementById("date").innerText =
      year +
      "년" +
      month +
      "월" +
      date +
      "일" +
      myDay[day] +
      "요일 [" +
      hour +
      "시" +
      minute +
      "분" +
      second +
      "초]";
  }, 1000);
};
