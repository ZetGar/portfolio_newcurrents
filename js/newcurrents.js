$(function () {
  // header

  // 햄버거버튼 토글클래스
  const $hamber = $("a.hamber");

  $hamber.on("click", function (evt) {
    evt.preventDefault();
    $(this).toggleClass("on");

    if ($hamber.hasClass("on")) {
      $(".gnb").animate({ right: 0 });
    } else {
      $(".gnb").animate({ right: -100 + "vw" });
    }
  });

  // gnb
  const $gnb = $(".gnb>li");
  let nowIdx = 0;

  $gnb.on("mouseover", function () {
    $(this).children(".lnb").stop().slideDown(500);
  });
  $gnb.on("mouseout", function () {
    $(this).children(".lnb").stop().slideUp(500);
  });

  // scrollTop
  const arrTopVal = [];
  for (let i = 0; i < 5; i++) {
    arrTopVal[i] = $("section").eq(i).offset().top;
  }

  console.log(arrTopVal);
});
