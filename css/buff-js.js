window.addEventListener('DOMContentLoaded', function() { // DOMContentLoadedでDOMContentLoaded後に実行
    const scrollAnimationElms = document.querySelectorAll('.scroll_up, .scroll_left, .scroll_right');
  
    const scrollAnimationFunc = function() {
      scrollAnimationElms.forEach(function(elm) {
        const triggerMargin = 100;
        if (window.innerHeight > elm.getBoundingClientRect().top + triggerMargin) {
          elm.classList.add('on');
        }
      });
    };
  
    // 初回実行
    scrollAnimationFunc();
  
    window.addEventListener('scroll', scrollAnimationFunc);
  });
//scroll_effect
// $(window).scroll(function () {
//   var scrollAnimationElm = document.querySelectorAll('.scroll_up,.scroll_left,.scroll_right');
//   var scrollAnimationFunc = function () {
//     for (var i = 0; i < scrollAnimationElm.length; i++) {
//       var triggerMargin = 100;
//       if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
//         scrollAnimationElm[i].classList.add('on');
//       }
//     }
//   }
//   window.addEventListener('load', scrollAnimationFunc);
//   window.addEventListener('scroll', scrollAnimationFunc);
// });



//     $(function() {
//   var $marker = $('.marker');
//   var $win = $(window);
//   $win.on('load scroll', function() {
//     var hSize = window.innerHeight;
//     var scroll = $win.scrollTop();
//     $marker.each(function() {
//       if (scroll > $(this).offset().top - hSize +100) {
//         $(this).addClass('active');
//       }
//     });
//   });
// });
document.addEventListener('DOMContentLoaded', function() {
    const markers = document.querySelectorAll('.marker');
    const win = window; // windowオブジェクトをwin変数に格納
  
    const handleScroll = function() {
      const hSize = win.innerHeight;
      const scroll = win.scrollY; // または window.pageYOffset
  
      markers.forEach(function(marker) {
        if (scroll > marker.offsetTop - hSize + 100) {
          marker.classList.add('active');
        }
      });
    };
  
    // 初回実行とスクロールイベントリスナー登録
    handleScroll();
    win.addEventListener('load', handleScroll); // loadイベントでも実行
    win.addEventListener('scroll', handleScroll);
  });

//     $(function(){
//   if(document.URL.match("/")) {
//   document.getElementById("noneitem").style.display = "none";
//   }});
document.addEventListener('DOMContentLoaded', function() {
    if (document.URL.includes("/")) { // includes()で"/"が含まれているか判定
      const noneItem = document.getElementById("noneitem");
      if (noneItem) { // 要素が存在するか確認
        noneItem.style.display = "none";
      }
    }
  });


//   $(function(){
//   if(document.URL.match("/categories/")) {
//   document.getElementById("top_page").style.display = "none";
//   document.getElementById("noneitem").style.display = "block";
//   }});

document.addEventListener('DOMContentLoaded', function() {
    if (document.URL.includes("/categories/")) {
      const topPage = document.getElementById("top_page");
      const noneItem = document.getElementById("noneitem");
  
      if (topPage) {
        topPage.style.display = "none";
      }
  
      if (noneItem) {
        noneItem.style.display = "block";
      }
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    // ハンバーガーメニューボタンがクリックされたときのイベントハンドラを設定
    document.querySelector(".checkbox").addEventListener("click", function () {
      // body要素を取得
      var body = document.body;
  
      // 現在のbodyのスタイルを取得
      var bodyStyle = window.getComputedStyle(body);
  
      // bodyのoverflowスタイルがhiddenかどうかを確認
      if (bodyStyle.overflow === "hidden") {
        // もしoverflowがhiddenなら、bodyのスタイルを元に戻す
        body.style.height = "";
        body.style.overflow = "";
      } else {
        // そうでなければ、bodyにheight: 100%とoverflow: hiddenを設定し、スクロールを無効にする
        body.style.height = "100%";
        body.style.overflow = "hidden";
      }
    });
  });

  const fadeIn = function(){

    const target = document.getElementsByClassName('effect');
    const position = Math.floor(window.innerHeight * .75);

    for (let i = 0; i < target.length; i++) {

        let offsetTop = Math.floor(target[i].getBoundingClientRect().top);
        let offsetBottom = Math.floor(target[i].getBoundingClientRect().bottom);

        if (offsetTop < position) {
            target[i].classList.add('scroll-in');
        }
        
        if(offsetBottom < 0){
            target[i].classList.remove('scroll-in');
        }
    }
}
window.addEventListener('scroll', fadeIn, true);