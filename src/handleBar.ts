export function handleBar() {
  interface MenuItem {
    menuName: string;
    submenuItems: string[];
  }

  interface MenuData {
    menuItems: MenuItem[];
  }

  const data: MenuData = {
    menuItems: [
      {
        menuName: 'Home',
        submenuItems: ['Home One', 'Home Two', 'Home Three', 'Home Four', 'Home Five', 'Home Video', 'Home Map'],
      },
      {
        menuName: 'Pages',
        submenuItems: [
          'Property',
          'Property Sidebar',
          'Property Details',
          'Add new Listing',
          'Map Location',
          'About us',
          'FAQ',
          'Cheack out',
          'Cart',
          'Login',
          'Account',
        ],
      },
      {
        menuName: 'Project',
        submenuItems: ['Project', 'Project Details'],
      },
      {
        menuName: 'Blog',
        submenuItems: ['Blog Classic', 'Blog Details'],
      },
    ],
  };

  const template = Handlebars.compile(document.getElementById('menu-template')?.innerHTML);
  const html = template(data);
  const menuContainer = document.getElementById('menu-container');
  if (menuContainer !== null && menuContainer !== undefined) {
    menuContainer.innerHTML = html;
  }
}

export function renderSwiper() {
  interface MenuItem {
    imageSrc: string;
    title: string;
  }

  interface MenuData {
    items: MenuItem[];
  }

  const datas: MenuData = {
    items: [
      {
        imageSrc: "/images/swpier1.png",
        title: "Các xu hướng lựa chọn thiết kế căn hộ lý tưởng năm 2022"
      },
      {
        imageSrc: "/images/swpier2.png",
        title: "Những căn hộ đơn giản hiện đại có phải là xu hướng mới?"
      },
      {
        imageSrc: "/images/swpier3.png",
        title: "Phong cách thiết kế căn hộ nào sẽ là xu hướng năm 2023?"
      },
      {
        imageSrc: "/images/swpier1.png",
        title: "Các xu hướng lựa chọn thiết kế căn hộ lý tưởng năm 2022"
      },
      {
        imageSrc: "/images/swpier2.png",
        title: "Những căn hộ đơn giản hiện đại có phải là xu hướng mới?"
      },
      {
        imageSrc: "/images/swpier3.png",
        title: "Phong cách thiết kế căn hộ nào sẽ là xu hướng năm 2023?"
      }
    ]
  };
  if (typeof Handlebars !== 'undefined') {
    const temp = document.getElementById('swiper-container');
    if (temp) {
      const template = Handlebars.compile(temp.innerHTML);
      const data = { 'items': datas.items }
      console.log(data);

      document.getElementById('swiper-container')!.innerHTML = template(data);

    }
  }
}

export function renderHomeSectionLeft() {
  interface MenuItem {
    imageSrc: string;
    title: string;
    room: string;
    district: string;
    type: string;
    address: string;
    introduce: string;

  }

  interface MenuData {
    items: MenuItem[];
  }

  const datas: MenuData = {
    items: [
      {
        imageSrc: "/images/pexels-vecislavas-popa-1571469 2.png",
        title: "An Khánh",
        room: "Số phòng: 44",
        district: "Quận: Tân Bình",
        type: "Loại: Motel",
        address: "261/37/1D Chu Văn An, phường 12, Quận Bình Thạnh, TP.HCM",
        introduce: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        imageSrc: "/images/pexels-vecislavas-popa-1571469 2.png",
        title: "An Khánh",
        room: "Số phòng: 44",
        district: "Quận: Tân Bình",
        type: "Loại: Motel",
        address: "261/37/1D Chu Văn An, phường 12, Quận Bình Thạnh, TP.HCM",
        introduce: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        imageSrc: "/images/pexels-vecislavas-popa-1571469 2.png",
        title: "An Khánh",
        room: "Số phòng: 44",
        district: "Quận: Tân Bình",
        type: "Loại: Motel",
        address: "261/37/1D Chu Văn An, phường 12, Quận Bình Thạnh, TP.HCM",
        introduce: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        imageSrc: "/images/pexels-vecislavas-popa-1571469 2.png",
        title: "An Khánh",
        room: "Số phòng: 44",
        district: "Quận: Tân Bình",
        type: "Loại: Motel",
        address: "261/37/1D Chu Văn An, phường 12, Quận Bình Thạnh, TP.HCM",
        introduce: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }
    ]
  };


  if (typeof Handlebars !== 'undefined') {
    const temp = document.getElementById('room-container');
    if (temp) {
      const template = Handlebars.compile(temp.innerHTML);
      const data = { 'items': datas.items }
      console.log(data);

      document.getElementById('room-container')!.innerHTML = template(data);

    }
  }
}

export function renderHomeSectionRight() {
  interface MenuItem {
    title: string;
    Content: string;
    imageSrc: string;
  }

  interface MenuData {
    items: MenuItem[];
  }

  const datas: MenuData = {
    items: [
      {
        title: "Uhouse",
        Content: "Mang lại nhiều tiện ích cho khách thuê",
        imageSrc: "/images/property-1.png"
      },
      {
        title: "Uhouse",
        Content: " Nền tảng quản lý vận hành tòa nhà tiên tiến",
        imageSrc: "/images/property-1.png"
      },
      {
        title: "Uhouse",
        Content: "Tiết kiệm chi phí hiệu quả",
        imageSrc: "/images/property-1.png"
      }
    ]
  };


  if (typeof Handlebars !== 'undefined') {
    const temp = document.getElementById('right-container');
    if (temp) {
      const template = Handlebars.compile(temp.innerHTML);
      const data = { 'items': datas.items }
      console.log(data);

      document.getElementById('right-container')!.innerHTML = template(data);
    }
  }
}

export function renderHomeSectiondetail2() {
  interface MenuItem {
    imageSrc: string;
    title: string;
    area: string;
    type: string;
    address: string;
    price: string;

  }

  interface MenuData {
    items: MenuItem[];
  }

  const datas: MenuData = {
    items: [
      {
        imageSrc: "/images/pexels-vecislavas-popa-1571469 2.png",
        title: "An Khánh",
        area: "27 m2",
        type: "Loại: Motel",
        address: "261/37/1D Chu Văn An, phường 12, Quận Bình Thạnh, TP.HCM",
        price: "3.5"
      },
      {
        imageSrc: "/images/pexels-vecislavas-popa-1571469 2.png",
        title: "An Khánh",
        area: "27 m2",
        type: "Loại: Motel",
        address: "261/37/1D Chu Văn An, phường 12, Quận Bình Thạnh, TP.HCM",
        price: "3.5"
      },
      {
        imageSrc: "/images/pexels-vecislavas-popa-1571469 2.png",
        title: "An Khánh",
        area: "27 m2",
        type: "Loại: Motel",
        address: "261/37/1D Chu Văn An, phường 12, Quận Bình Thạnh, TP.HCM",
        price: "3.5"
      },
      {
        imageSrc: "/images/pexels-vecislavas-popa-1571469 2.png",
        title: "An Khánh",
        area: "27 m2",
        type: "Loại: Motel",
        address: "261/37/1D Chu Văn An, phường 12, Quận Bình Thạnh, TP.HCM",
        price: "3.5"
      },
      {
        imageSrc: "/images/pexels-vecislavas-popa-1571469 2.png",
        title: "An Khánh",
        area: "27 m2",
        type: "Loại: Motel",
        address: "261/37/1D Chu Văn An, phường 12, Quận Bình Thạnh, TP.HCM",
        price: "3.5"
      }
    ]
  };


  if (typeof Handlebars !== 'undefined') {
    const temp = document.getElementById('room-container-detail2');
    if (temp) {
      const template = Handlebars.compile(temp.innerHTML);
      const data = { 'items': datas.items }
      console.log(data);

      document.getElementById('room-container-detail2')!.innerHTML = template(data);

    }
  }
}

export function renderImagedetail2() {
  interface MenuItem {
    imageSrc: string;
    introduce: string;
    date: string;

  }

  interface MenuData {
    items: MenuItem[];
  }

  const datas: MenuData = {
    items: [
      {
        imageSrc: "/images/logo-avatar.png",
        introduce: "Lorem ipsum dolor sit amet",
        date: "25/07/2022",
      },
      {
        imageSrc: "/images/logo-avatar.png",
        introduce: "Lorem ipsum dolor sit amet",
        date: "25/07/2022",
      },
      {
        imageSrc: "/images/logo-avatar.png",
        introduce: "Lorem ipsum dolor sit amet",
        date: "25/07/2022",
      },
      {
        imageSrc: "/images/logo-avatar.png",
        introduce: "Lorem ipsum dolor sit amet",
        date: "25/07/2022",
      }
    ]
  };


  if (typeof Handlebars !== 'undefined') {
    const temp = document.getElementById('image-detail2');
    if (temp) {
      const template = Handlebars.compile(temp.innerHTML);
const data = { 'items': datas.items }
      console.log(data);

      document.getElementById('image-detail2')!.innerHTML = template(data);

    }
  }
}