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

export function renderSwpier() {
  interface MenuItem {
    imageSrc: string;
    title: string;
  }

  interface MenuData {
    items: MenuItem[];
  }

  const data: MenuData = {
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

  const templateSource = document.getElementById("swpier-template")!.innerHTML;
  const template = Handlebars.compile(templateSource);
  const html = template(data);

  document.getElementById("swpier-container")!.innerHTML = html;
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

  const data: MenuData = {
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

  const templateSource = document.getElementById("room-template")!.innerHTML;
  const template = Handlebars.compile(templateSource);
  const html = template(data);

  document.getElementById("room-container")!.innerHTML = html;
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

  const data: MenuData = {
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

  const templateSource = document.getElementById("right-template")!.innerHTML;
  const template = Handlebars.compile(templateSource);
  const html = template(data);

  document.getElementById("right-container")!.innerHTML = html;
}