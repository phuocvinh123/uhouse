import './less.less'

// sweetalert2 11
import { Message } from './message.ts'
import { API } from './api.ts'
(<any>window).API = API;
(<any>window).Message = Message;

import { setupFormValid } from './validation.ts'
setupFormValid();
(<any>window).SetupFormValid = setupFormValid;
(<any>window)._MESSAGE_ = {
  required: 'Xin vui lòng nhập nội dung',
  email: 'Xin vui lòng nhập địa chỉ email hợp lệ!',
  minLengthCheckBox: 'Xin vui lòng chọn ít nhất ',
  minLength: 'Xin vui lòng nhập tối thiểu ',
  maxLength: 'Xin vui lòng nhập không quá ',
  compare: 'Xin vui lòng nhập không quá ',
};


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
import { renderSwiper, renderHomeSectionLeft, renderHomeSectionRight } from './handleBar.ts';
renderSwiper();
renderHomeSectionLeft();
renderHomeSectionRight();

import { scrollWindow } from './scroll.ts'
scrollWindow();
import { setupSwiper } from './swiper.ts';
setupSwiper();

