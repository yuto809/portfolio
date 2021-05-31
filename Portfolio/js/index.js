
// JQuery
$(function(){

  // 項目をクリック
  $('.about-list-item').click(
    function()
    {
      var $answer = $(this).find('.about-answer');

      // openクラスを含んでいる場合
      if($answer.hasClass('open'))
      {
        // openクラスを削除して、スライドアップして項目を隠す
        $answer.removeClass('open');
        $answer.slideUp();
      }
      else
      {
        // openクラスを追加して、項目をスライドダウン表示
        $answer.addClass('open');
        $answer.slideDown();
      }
    }
  );

  // 作品リストのホバー処理
  $('.sample').hover(
    // カーソルを作品リストに合わせたときの処理
    function()
    {
      // 作品リスト上をマスクして、文章を表示
      $(this).find('.mask').slideDown();
      $(this).find('.sample-text').fadeIn();
    },
    // ホバーを解除したとき
    function()
    {
      // マスク、文章を消す
      $(this).find('.mask').slideUp();
      $(this).find('.sample-text').fadeOut();
    }
  );

  // ヘッダーメニュー押下処理
  $('.menu-button').click(
    function()
    {
      // ヘッダーメニュー押下時、activeクラスを含んでいる場合
      if ($(this).hasClass('active'))
      {
        // activeクラス、openクラスを削除
        $(this).removeClass('active');
        $('.header-right').removeClass('open');
        // console.log("CLOSE");
      }
      else
      {
        // activeクラス、openクラスを追加
        $(this).addClass('active');
        $('.header-right').addClass('open').removeClass('close');
        // console.log("OPEN");
      }
    }
  );

});
