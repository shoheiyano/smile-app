$(function () {
  console.log("ok");
  $(".contents >li").each(function (index, element) {
    var w = $(element).width();
    $(".contents").append(
      '<li style="height:0; width:' + w + 'px; margin:0;"></li>'
    );
  });
});

// var mvh = $(".text").height();

// $(window).scroll(function () {
//   var top = $(window).scrollTop();
//   $(".header").css("background-color", "rgba(0,0,0,0.2)");
// });

// スクロールイベント
window.addEventListener("scroll", function () {
  var headerElement = document.getElementById("header"); // `#header`セレクタを取得
  var rect = headerElement.getBoundingClientRect(); //
  var y = rect.top + window.pageYOffset; // Y方向 (縦)にスクロール量を取得（pageYOffset：windowオブジェクト。現在表示位置のY座標を取得）
  if (y > 0) {
    // 変数yの値が0よりも
    console.log("ok");
    headerElement.classList.remove("hidden"); // 大きければhiddensセレクタを削除する
  } else {
    headerElement.classList.add("hidden"); // そうでなければhiddensセレクタを追加する
  }
});

$(function () {
  //画像ファイルプレビュー表示のイベント追加 fileを選択時に発火するイベントを登録
  $("form").on("change", 'input[type="file"]', function (e) {
    var file = e.target.files[0],
      reader = new FileReader(),
      $preview = $(".preview");
    t = this;

    // 画像ファイル以外の場合は何もしない
    if (file.type.indexOf("image") < 0) {
      return false;
    }

    // ファイル読み込みが完了した際のイベント登録
    reader.onload = (function (file) {
      return function (e) {
        //既存のプレビューを削除
        $preview.empty();
        // .prevewの領域の中にロードした画像を表示するimageタグを追加
        $preview.append(
          $("<img>").attr({
            src: e.target.result,
            width: "300px",
            height: "500px",
            class: "preview",
            title: file.name,
            text: "こんにちは",
          })
        );
      };
    })(file);

    reader.readAsDataURL(file);
  });
});
