$(document).ready(() => {
  $('.next').click(() => {
    const currentImage = $('.img.curry');
    const currentImageIndex = $('.img.curry').index();
    const nextImageIndex = currentImageIndex + 1;
    const nextImage = $('.img').eq(nextImageIndex);
    currentImage.fadeOut(1000);
    currentImage.removeClass('curry');

    if (nextImageIndex == $('.img:last').index() + 1) {
      $('.img:first').fadeIn(1000);
      $('.img:first').addClass('curry');
    } else {
      nextImage.fadeIn(1000);
      nextImage.addClass('curry');
    }
  });

  $('.prev').click(() => {
    const currentImage = $('.img.curry');
    const currentImageIndex = $('.img.curry').index();
    const prevImageIndex = currentImageIndex - 1;
    const prevImage = $('.img').eq(prevImageIndex);

    currentImage.fadeOut(1000);
    currentImage.removeClass('curry');

    if (prevImageIndex < 0) {
      $('.img:last').fadeIn(1000);
      $('.img:last').addClass('curry');
    } else {
      prevImage.fadeIn(1000);
      prevImage.addClass('curry');
    }
  });

  setInterval(function() {
    $('.next').trigger('click');
  }, 1000);
});
