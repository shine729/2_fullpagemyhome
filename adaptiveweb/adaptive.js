//   console.log(navigator);
//   console.log(navigator.userAgent);
//   document.write(navigator+"<br>");
document.write(navigator.userAgent + "<br>" + "<br>");

var mobileKeyWords = new Array("iPhone", "ipad", "BlackBerry", "Android");
// var mobileKeyWord = [];
console.log(mobileKeyWords);

for (var word in mobileKeyWords) {
  //   document.write(mobileKeyWords[word]);
  if (navigator.userAgent.match(mobileKeyWords[word])) {
    document.write("모바일 버전입니다");
    window.location.href = "m_index.html";
    break,
  } else {
    document.write("데스트탑 버전입니다.");
  }
}
