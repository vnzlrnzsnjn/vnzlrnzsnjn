$(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".nav-wrapper a,.container-fluid a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                window.location.hash = hash;
          });
        }
    });

    $(".button-collapse").sideNav();
    $('.scrollspy').scrollSpy();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    setInterval(function() {
      $('.carousel.carousel-slider').carousel('next');
    }, 6000);

});
