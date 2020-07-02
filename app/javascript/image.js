$(function () {
  console.log("ok");
  $(".contents >li").each(function (index, element) {
    var w = $(element).width();
    $(".contents").append(
      '<li style="height:0; width:' + w + 'px; margin:0;"></li>'
    );
  });
});
