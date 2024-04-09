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

  if (window.screen.availWidth >= 992) {
    registration?.classList.remove('fixed')
    registration?.classList.remove('top-32')
  }
  if (window.scrollY > 123) {
    navMenu?.classList.add('fixed')
    navMenu?.classList.add('top-0')
    navMenu?.classList.add('left-0')
    navMenu?.classList.add('right-0')
    navMenu?.classList.add('shadow-lg')
    navMenu?.classList.add('bg-white')
    if (window.screen.availWidth >= 992) {
      registration?.classList.add('fixed')
      registration?.classList.add('top-32')
    }
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 123) {
      navMenu?.classList.add('fixed')
      navMenu?.classList.add('top-0')
      navMenu?.classList.add('left-0')
      navMenu?.classList.add('right-0')
      navMenu?.classList.add('shadow-lg')
      navMenu?.classList.add('bg-white')
      if (window.screen.availWidth >= 992) {
        registration?.classList.add('fixed')
        registration?.classList.add('top-32')
      }
      else {
        registration?.classList.remove('fixed')
        registration?.classList.remove('top-32')
      }
      if (window.scrollY > 1700) {
        registration?.classList.remove('fixed')
        registration?.classList.remove('top-32')
      }
    }
    else {
      navMenu?.classList.remove('fixed')
      navMenu?.classList.remove('top-0')
      navMenu?.classList.remove('left-0')
      navMenu?.classList.remove('right-0')
      navMenu?.classList.remove('shadow-lg')
      navMenu?.classList.remove('bg-white')
      registration?.classList.remove('fixed')
      registration?.classList.remove('top-32')
    }
  })
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


