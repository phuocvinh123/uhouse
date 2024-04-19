import './less.less'

import { renderSwiper, renderHomeSectionLeft, renderHomeSectionRight,renderHomeSectiondetail2,renderImagedetail2 } from './handleBar.ts';
renderSwiper();
renderHomeSectionLeft();
renderHomeSectionRight();
// renderHomeSectiondetail2();
// renderImagedetail2();

document.addEventListener('DOMContentLoaded', function () {
  const arrowIcon = document.getElementById('arrow-icon');
  const dropdownSelect = document.getElementById('dropdown-select');

  arrowIcon?.addEventListener('click', function () {
    dropdownSelect?.classList.toggle('open');
  });


  const playImage = document.getElementById('play-image');
  const videoIframe = document.getElementById('video-iframe');

  if (playImage !== null && videoIframe !== null) {
    playImage.style.display = 'none';

    videoIframe.addEventListener('click', function () {
      playImage.style.display = 'block';
      videoIframe.style.display = 'none';
      console.log('aaaaaaa');
    });

    playImage.addEventListener('click', function () {
      playImage.style.display = 'none';
      videoIframe.style.display = 'block';
      console.log('bbbbbb');
    });

    videoIframe.addEventListener('pause', function () {
      playImage.style.display = 'block';
      console.log('Video paused');
    });
  }
});
import { handleShowImage } from './activated.ts'
const btnButton = document.querySelector('.btn-show-image');
btnButton?.addEventListener('click', handleShowImage);

import { scrollWindow } from './scroll.ts'
scrollWindow();
import { setupSwiper } from './swiper.ts';
setupSwiper();

