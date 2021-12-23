/**
 * Мобильное меню.
 */

document.querySelector('.header__mobile_btn_toggle').addEventListener('click', () => toggleMobileMenu());

document.querySelectorAll('.header__link').forEach((link) => link.addEventListener('click', () => closeMobileMenu()));

const closeMobileMenu = () => {
  document.querySelector('.header').classList.remove('header__expanded');
  document.querySelector('.header__mobile_btn_toggle').classList.remove('header__mobile_close');
  document.querySelector('.header__nav-bar').classList.remove('header__nav-bar_visible');
  document.querySelector('.footer__theme-picker').classList.remove('footer__theme-picker_visible');
};

const toggleMobileMenu = () => {
  document.querySelector('.header').classList.toggle('header__expanded');
  document.querySelector('.header__mobile_btn_toggle').classList.toggle('header__mobile_close');
  document.querySelector('.header__nav-bar').classList.toggle('header__nav-bar_visible');
  document.querySelector('.footer__theme-picker').classList.toggle('footer__theme-picker_visible');
};

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
    pulse: 'surface__pulse-line surface__pulse-line_type_highway',
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
    pulse: 'surface__pulse-line surface__pulse-line_type_dirt',
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
    pulse: 'surface__pulse-line surface__pulse-line_type_tt',
  },
];

let galleryIdx = 0;

const surfaceTitle = document.querySelector('.surface__title');
const surfaceDescription = document.querySelector('.surface__description');
const surfaceImgMain = document.querySelector('.surface__img_type_main');
const surfaceImgSecondary = document.querySelector('.surface__img_type_secondary');
const surfacePulse = document.querySelector('.surface__pulse');

document.querySelector('.surface__control_type_previous').addEventListener('click', () => switchGallery(false));
document.querySelector('.surface__control_type_next').addEventListener('click', () => switchGallery(true));

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

document
  .querySelectorAll('.bycicles__type')
  .forEach((el) => el.addEventListener('click', () => switchBikes(el.id.replace('bycicles_', ''))));

document.querySelector('.bycicles__type-select').addEventListener('change', () => switchBikesMobile());

document
  .querySelectorAll('.bycicles__switcher')
  .forEach((el) => el.addEventListener('click', () => switchBikesMobile(+el.id.replace('bycicle__switch_', ''))));

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

const switchBikesMobile = (idx = 0) => {
  const type = document.querySelector('.bycicles__type-select').value;
  const bikes = bikeTypes.filter((t) => t.type === type)[0];
  byciclesDisplays.innerHTML = '';
  insertBike(createBikeDisplay(bikes.sources[idx]));

  document.querySelectorAll('.bycicles__switcher').forEach((s) => {
    if (s.id === `bycicle__switch_${idx}`) {
      s.classList.add('bycicles__switcher_active');
    } else {
      s.classList.remove('bycicles__switcher_active');
    }
  });
};

const createBikeDisplay = (bike) => {
  const bikeEl = bikeTemplate.cloneNode(true);

  bikeEl.querySelector('.bycicles__link').href = bike.link;
  bikeEl.querySelector('.bycicles__display_type_img').src = bike.src;
  bikeEl.querySelector('.bycicles__display_type_img').alt = `Велосипед ${bike.name}`;
  bikeEl.querySelector('.bycicles__display_type_caption').textContent = bike.name;

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

if (window.innerWidth <= 1024) {
  switchBikesMobile();
} else {
  switchBikes('highway');
}

/**
 * Переключение темы.
 */

const themes = [
  {
    type: 'light',
    body: '#f4f4f4',
    font: '#151515',
    fontSecondary: '#222',
    footer: '#efefef',
    control: '#ebebeb',
    controlBrightness: 0,
    copyright: '#cfcfcf',
    switcher: '#fff',
    iconSun: 'url(../../images/theme_sun_light.svg)',
    iconMoon: 'url(../../images/theme_moon_light.svg)',
  },
  {
    type: 'dark',
    body: '#333',
    font: '#fff',
    fontSecondary: '#e5e5e5',
    footer: '#2f2f2f',
    control: '#434343',
    controlBrightness: 100,
    copyright: '#565656',
    switcher: '#545454',
    iconSun: 'url(../../images/theme_sun_dark.svg)',
    iconMoon: 'url(../../images/theme_moon_dark.svg)',
  },
];

document.querySelector('.footer__theme-switch').addEventListener('click', () => switchTheme());
document.querySelector('.footer__theme-plug').style.left = '2px';

let isLightTheme = true;

const switchTheme = () => {
  isLightTheme = !isLightTheme;

  const theme = themes.filter((t) => t.type === (isLightTheme ? 'light' : 'dark'))[0];

  const bodyStyle = document.querySelector('.body').style;
  bodyStyle.setProperty('--background-color', theme.body);
  bodyStyle.setProperty('--color', theme.font);

  const headerStyle = document.querySelector('.header').style;
  headerStyle.setProperty('--background-color', theme.body);

  const legendStyle = document.querySelector('.legend').style;
  legendStyle.setProperty('--font-secondary', theme.fontSecondary);

  const propositionStyle = document.querySelector('.proposition').style;
  propositionStyle.setProperty('--font-secondary', theme.fontSecondary);

  const surfaceStyle = document.querySelector('.surface').style;
  surfaceStyle.setProperty('--font-secondary', theme.fontSecondary);
  surfaceStyle.setProperty('--control', theme.control);
  surfaceStyle.setProperty('--control-brightness', theme.controlBrightness);

  const byciclesStyle = document.querySelector('.bycicles').style;
  byciclesStyle.setProperty('--font-secondary', theme.fontSecondary);

  const trainingStyle = document.querySelector('.training').style;
  trainingStyle.setProperty('--font-secondary', theme.fontSecondary);

  const footerStyle = document.querySelector('.footer').style;
  footerStyle.setProperty('--background-color', theme.footer);
  footerStyle.setProperty('--theme-switch', theme.switcher);
  footerStyle.setProperty('--copyright', theme.copyright);
  footerStyle.setProperty('--icon-sun', theme.iconSun);
  footerStyle.setProperty('--icon-moon', theme.iconMoon);

  const plugStyle = document.querySelector('.footer__theme-plug').style;
  if (isLightTheme) {
    plugStyle.left = '2px';
    plugStyle.right = null;
  } else {
    plugStyle.right = '2px';
    plugStyle.left = null;
  }
};

/**
 * Форма в футере.
 */

document.querySelector('.footer__form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.parentElement.querySelector('.footer__form-email').value = 'Круто!';
});

document.querySelector('.footer__form-email').addEventListener('focus', () => showOkBtn());
document.querySelector('.footer__form-email').addEventListener('blur', () => hideOkBtn());

const submitBtn = document.querySelector('.footer__form-submit');

const showOkBtn = () => {
  submitBtn.style.opacity = 1;
};

const hideOkBtn = () => {
  submitBtn.style.opacity = 0;
};

hideOkBtn();

/**
 * При изменении размеров окна.
 */

let size = 'desktop';

window.onresize = () => {
  if (size === 'desktop' && window.innerWidth <= 1024) {
    switchBikesMobile();
    size = 'mobile';
  }
  if (size === 'mobile' && window.innerWidth > 1024) {
    switchBikes('highway');
    size = 'desktop';
  }
  closeMobileMenu();
};
