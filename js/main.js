$('#footer').css('margin-top',$(document).height() - ($('#header').height() + $('#content').height()  ) - $('#footer').height());


$('#back-to-top').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 700);
});

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


$(function() {

    $('.toggle-button').click(function(j) {
  
      $('.toggle-button').not(this).children('.rotate').removeClass("down");
  
      $(this).children('.rotate').toggleClass("down");
  
      
  
      var accordion = $(this).closest('.accordion-body').find('.body-content-accor');
  
      $(this).closest('.accordion-list').find('.body-content-accor').not(accordion).slideUp();
  
  
  
      if ($(this).hasClass('active')) {
  
        $(this).removeClass('active');
  
      } else {
  
        $(this).closest('.accordion-list').find('.toggle-button.active').removeClass('active');
  
        $(this).addClass('active');
  
      }
      accordion.stop(false, true).slideToggle();
  
      j.preventDefault();
  
    });
  
  });



  $(function() {
        $('.do-dont').matchHeight({byRow:false});
        	$('.visionary .split').matchHeight({byRow:false});
  });
  



  $(".js-modal-btn").modalVideo();