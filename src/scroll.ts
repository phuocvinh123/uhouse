export function scrollwindowsvg() {

  document.querySelector('.progress-point')?.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
export function scrollWindow() {
  const navMenu = document.querySelector('.header-menu');
  const registration = document.querySelector('.registration');

  const addClasses = () => {
    navMenu?.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'shadow-lg', 'bg-white');

    if (window.screen.availWidth >= 992) {
      if (window.innerWidth > 1024) {
        registration?.classList.add('fixed', 'top-32');
      }
    }
  };

  const removeClassesNav = () => {
    navMenu?.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'shadow-lg', 'bg-white');
  };
  const removeClassesRe = () => {
    registration?.classList.remove('fixed', 'top-32');
  };

  // if (window.screen.availWidth >= 992) {
  //   removeClassesNav();
  // }

  // if (window.scrollY > 123) {
  //   addClasses();
  // }

  window.addEventListener('scroll', () => {
    const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
    const hidePoint = maxScrollY * 11/ 12;

    if (window.scrollY > 123) {
      addClasses();
      if (window.screen.availWidth >= 992 && window.innerWidth > 1024) {
        registration?.classList.add('fixed', 'top-32');
      } else {
        removeClassesNav();
      }
      if (window.scrollY > hidePoint) {
        removeClassesRe();
      }
    } else {
      removeClassesNav();
      removeClassesRe();

    }
  });
}


export function breakPointProgress() {
  window.addEventListener('scroll', () => {
    const progressPoint = document.querySelector('.progress-point');
    const hiddenContent = 'hidden';

    const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

    const progress = document.querySelector('.progress-check');
    const radius = 192; // Bán kính của vòng tròn
    const circumference = 2 * Math.PI * radius; // Chu vi của vòng tròn

    const scrollChangeValue = ((maxScrollY - window.scrollY) / maxScrollY) * 100;
    // console.log('scrollChangeValue', ` ${scrollChangeValue}`);

    const percentageToShow = 100 - (scrollChangeValue < 0 ? 0 : scrollChangeValue); // Phần trăm của vòng tròn muốn hiển thị
    const strokeDasharray = circumference * (percentageToShow / 100); // Độ dài của phần nét đứt trên chu vi
    const strokeDasharrayFull = circumference * (100 / 100);

    if (window.scrollY > 123) {
      progressPoint?.classList.remove(hiddenContent)
      if (progress instanceof SVGCircleElement) {
        progress.style.strokeDasharray = `${strokeDasharray},${strokeDasharrayFull}`;
        progress.style.strokeDashoffset = `0`;
        progress.style.strokeWidth = `20px`;
      }

    }
    else {
      progressPoint?.classList.add(hiddenContent)
    }
  });
}


