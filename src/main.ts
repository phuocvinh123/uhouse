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

// import { setupMenuMobile } from './menu-mobile.ts';
// setupMenuMobile(document.getElementsByClassName('handle-menu'));
// // swiper 10


// // echarts 5
// import { setupEchart } from './echart.ts'
// setupEchart();

// window.onload = async () => {
//   const test = await API.post('/authentication/jwt/login', {
//     deviceName:
//       "Chrome/116.0.0.0 desktop/mac-os-x-15 ccfeecc0-533f-8a96-f60d-8d6253b60420",
//     deviceNo: "Macintosh",
//     deviceType: "BROWSER",
//     password: "41234231",
//     remember: false,
//     username: "12342134",
//   });
//   console.log(test);
// };


// Using swpier slice for img


document.addEventListener('DOMContentLoaded', function() {
  const arrowIcon = document.getElementById('arrow-icon');
  const dropdownSelect = document.getElementById('dropdown-select');

  arrowIcon?.addEventListener('click', function() {
    dropdownSelect?.classList.toggle('open');
  });


const playImage = document.getElementById('play-image');
const videoIframe = document.getElementById('video-iframe');

if (playImage !== null && videoIframe !== null) {
  playImage.style.display = 'none';

  videoIframe.addEventListener('click', function() {
    playImage.style.display = 'block';
    videoIframe.style.display = 'none';
    console.log('aaaaaaa');
  });

  playImage.addEventListener('click', function() {
    playImage.style.display = 'none';
    videoIframe.style.display = 'block';
    console.log('bbbbbb');
  });

  videoIframe.addEventListener('pause', function() {
    playImage.style.display = 'block';
    console.log('Video paused');
  });
}
});
  
import { scrollWindow} from './scroll.ts'
scrollWindow();
import { setupSwiper } from './swiper.ts';
setupSwiper();

// const videoIframe = document.getElementById('video-iframe');
// const playImage = document.getElementById('play-image');

// // Ẩn hình ảnh khi ba đầu
// playImage?.classList.add('hidden') ;

// // Bắt sự kiện khi video dừng
// videoIframe?.addEventListener('pause', function() {
//   // Hiển thị hình ảnh
//   playImage?.classList.add('block') ;
// });

// // Bắt sự kiện khi người dùng bấm vào hình ảnh
// playImage?.addEventListener('click', function() {
//   // Ẩn hình ảnh và tiếp tục phát video
//   playImage?.classList.add('hidden') ;
//   // videoIframe?.play();
// });


