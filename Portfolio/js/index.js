
// JQuery
$(function(){

  $('.about-list-item').click(
    function()
    {
      var $answer = $(this).find('.about-answer');

      if($answer.hasClass('open'))
      {
        $answer.removeClass('open');
        $answer.slideUp();
      }
      else
      {
        $answer.addClass('open'); 
        // slideDownメソッドを用いて、$answerを表示してください
        $answer.slideDown();
      }
    }
  );

  $('.sample').hover(
    function()
    {
      // $('.mask').slideDown();
      // $(this).find('.sample-text').addClass('text-active'); 
      $(this).find('.mask').slideDown();
      $(this).find('.sample-text').fadeIn();

    },
    function()
    {
      // $('.mask').slideUp();
      // $(this).find('.sample-text').removeClass('text-active'); 
      $(this).find('.mask').slideUp();
      $(this).find('.sample-text').fadeOut();
    }
  );

  $('.menu-button').click(
    function()
    {
      if ($(this).hasClass('active'))
      {
        $(this).removeClass('active');
        $('.header-right').addClass('close').removeClass('open');
        console.log("CLOSE");
        // $(this).removeClass('show');
      }
      else
      {
        console.log("OPEN");
        $(this).addClass('active');
        $('.header-right').addClass('open').removeClass('close');
        // $(this).addClass('show');
      }
    }
  );











});

const sampleArray = [
    {src: 'img/top.jpg', msg: 'sample1', size:'50%'},
    {src: 'img/top.jpg', msg: 'sample2', size:'50%'},
    {src: 'img/top.jpg', msg: 'sample3', size:'50%'},
    {src: 'img/top.jpg', msg: 'sample4', size:'50%'},
];




// for (let i = 0; i < sampleArray.length(); i++)
// {
//     let thumbImage = document.createElement('img');
//     thumbImage.setAttribute('src', album[i].src);
//     thumbImage.setAttribute('alt', album[i].msg);
//     thumbImage.setAttribute('width', album[i].size);
//     //thumbFlame.insertBefore(thumbImage,null);






// }