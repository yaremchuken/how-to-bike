// const overlay = document.querySelector('.overlay');
// const page = document.querySelector('.page');

// let lastY = 0;

// window.addEventListener('scroll', (e) => {
//   console.log(window.scrollY);
//   //   const yOffset = page.getBoundingClientRect().top;
//   //   stickBottom = yOffset > lastY;
//   //   lastY = yOffset;
//   //   console.log(page.getBoundingClientRect());
//   //   console.log(scrollUp);
//   //   overlay.style.setProperty('--pageY', `${window.scrollY + 347}px`);
// });

/**
 * Переключение блока "Покрытия и градиенты".
 */

const surfaces = [
  {
    title: 'Шоссе',
    description: `
        На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. 
        Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.`,
    sources: [
      { src: './images/surface/surface_highway_1.png', alt: 'Шоссе уходящее в закат' },
      { src: './images/surface/surface_dirt_1.png', alt: 'Грунтовая дорога через лес' },
    ],
    pulse: 'surface__gallery_pulse-line_highway',
  },
  {
    title: 'Грэвел',
    description: `
        Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, 
        всё для того чтобы проехать по лёгкому бездорожью.`,
    sources: [
      { src: './images/surface/surface_dirt_1.png', alt: 'Грунтовая дорога через лес' },
      { src: './images/surface/surface_highway_2.png', alt: 'Шоссе уходящее в закат' },
    ],
    pulse: 'surface__gallery_pulse-line_dirt',
  },
  {
    title: 'ТТ',
    description: `
        ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, 
        велик очень быстрые и аэродинамичный.`,
    sources: [
      { src: './images/surface/surface_highway_2.png', alt: 'Шоссе уходящее в закат' },
      { src: './images/surface/surface_highway_1.png', alt: 'Шоссе уходящее в закат' },
    ],
    pulse: 'surface__gallery_pulse-line_tt',
  },
];

let galleryIdx = 0;

const surfaceTitle = document.querySelector('.surface__title');
const surfaceDescription = document.querySelector('.surface__description');
const surfaceImgMain = document.querySelector('.surface__gallery_img-main');
const surfaceImgSecondary = document.querySelector('.surface__gallery_img-secondary');
const surfacePulse = document.querySelector('.surface__gallery_pulse');

document.querySelector('.surface__control_previous').addEventListener('click', () => switchGallery(false));
document.querySelector('.surface__control_next').addEventListener('click', () => switchGallery(true));

const switchGallery = (forward) => {
  galleryIdx += forward ? 1 : -1;

  if (galleryIdx > surfaces.length - 1) {
    galleryIdx = 0;
  } else if (galleryIdx < 0) {
    galleryIdx = surfaces.length - 1;
  }

  const surface = surfaces[galleryIdx];
  surfaceTitle.textContent = surface.title;
  surfaceDescription.textContent = surface.description;
  surfaceImgMain.src = surface.sources[0].src;
  surfaceImgMain.alt = surface.sources[0].alt;
  surfaceImgSecondary.src = surface.sources[1].src;
  surfaceImgSecondary.alt = surface.sources[1].alt;
  surfacePulse.firstChild.classList = [surface.pulse];
};

/**
 * Переключение блока с велосипедами.
 */

const bikeTypes = [
  {
    type: 'highway',
    sources: [
      {
        src: './images/bycicles/cervelo_caledonia_5.png',
        name: 'Cervelo Caledonia-5',
        link: 'https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN ',
      },
      {
        src: './images/bycicles/cannondale_systemsix_himod.png',
        name: 'Cannondale Systemsix Himod',
        link: 'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J',
      },
      {
        src: './images/bycicles/trek_domane_sl-7.png',
        name: 'Trek Domane SL-7',
        link: 'https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF',
      },
    ],
  },
  {
    type: 'dirt',
    sources: [
      {
        src: './images/bycicles/cervelo_aspero_grx_810.png',
        name: 'Cervelo Aspero GRX 810',
        link: 'https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE',
      },
      {
        src: './images/bycicles/specialized_s-works_diverge.png',
        name: 'Specialized S-Works Diverge',
        link: 'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9',
      },
      {
        src: './images/bycicles/cannondale_topstone_lefty_3.png',
        name: 'Cannondale Topstone Lefty 3',
        link: 'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8',
      },
    ],
  },
  {
    type: 'tt',
    sources: [
      {
        src: './images/bycicles/specialized_s-works_shiv.png',
        name: 'Specialized S-Works Shiv',
        link: 'https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9 ',
      },
      {
        src: './images/bycicles/bmc_timemachine_01_one.png',
        name: 'BMC Timemachine 01 ONE',
        link: 'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835',
      },
      {
        src: './images/bycicles/cervelo_p-series.png',
        name: 'Cervelo P-Series',
        link: 'https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q',
      },
    ],
  },
];

const bikeTemplate = document.querySelector('#bycicles-template').content.querySelector('.bycicles__card');
const byciclesDisplays = document.querySelector('.bycicles__displays');

const switchBikes = (type) => {
  const bikes = bikeTypes.filter((t) => t.type === type)[0];
  byciclesDisplays.innerHTML = '';
  bikes.sources.map((b) => createBikeDisplay(b)).forEach((e) => insertBike(e));

  document.querySelectorAll('.bycicles__type').forEach((el) => {
    if (el.id === `bycicles_${type}`) {
      el.classList.add('bycicles__type_active');
    } else {
      el.classList.remove('bycicles__type_active');
    }
  });
};

const createBikeDisplay = (bike) => {
  const bikeEl = bikeTemplate.cloneNode(true);

  bikeEl.querySelector('.bycicles__link').href = bike.link;
  bikeEl.querySelector('.bycicles__display_img').src = bike.src;
  bikeEl.querySelector('.bycicles__display_img').alt = `Велосипед ${bike.name}`;
  bikeEl.querySelector('.bycicles__display_caption').textContent = bike.name;

  return bikeEl;
};

const createCard = (name, link) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__title').textContent = name;

  const imgElelemnt = cardElement.querySelector('.card__image');
  imgElelemnt.src = link;
  imgElelemnt.alt = name;

  cardElement.querySelector('.card__image').addEventListener('click', () => viewImage(link, name));
  cardElement.querySelector('.card__btn-like').addEventListener('click', toggleLike);
  cardElement.querySelector('.card__btn-remove').addEventListener('click', dropCard);

  return cardElement;
};

const insertBike = (bikeDisplay) => {
  byciclesDisplays.appendChild(bikeDisplay);
};

switchBikes('highway');

/**
 * Переключение темы.
 */

const themes = [
  {
    type: 'light',
    body: '#f4f4f4',
    font: '#151515',
    footer: '#efefef',
  },
  {
    type: 'dark',
    body: '#333',
    font: '#fff',
    footer: '#2f2f2f',
  },
];

let isLightTheme = true;

const switchTheme = () => {
  isLightTheme = !isLightTheme;

  const theme = themes.filter((t) => t.type === (isLightTheme ? 'light' : 'dark'))[0];

  const bodyStyle = document.querySelector('.body').style;
  bodyStyle.setProperty('--background-color', theme.body);
  bodyStyle.setProperty('--color', theme.font);

  const footerStyle = document.querySelector('.footer').style;
  footerStyle.setProperty('--background-color', theme.footer);
};
