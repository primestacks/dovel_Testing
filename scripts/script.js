
addEventListener("load", function() {
    setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
    window.scrollTo(0, 1);
}

$(document).ready(function() {
    $(".testimonial-carousel").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      prevArrow: $(".testimonial-carousel-controls .prev"),
      nextArrow: $(".testimonial-carousel-controls .next")
    });
  });

function sportsRotate(btn){
        var $card = $(btn).closest('.flip-container');
        //console.log($card);
        if($card.hasClass('hover')){
            $card.removeClass('hover');
        } else {
            $card.addClass('hover');
        }
    }
var readmore = document.getElementById("readMore");
var moreInfor = document.getElementById("moreInfo");

readmore.addEventListener("click", function readMore(){
    moreInfo.style.display = "block";
    this.style.display = "none";
});
