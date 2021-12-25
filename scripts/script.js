const breakpoint = 1050;

/**
 * Мобильное меню.
 */

document.querySelector('.header__mobile-toggle').addEventListener('click', () => openMobileMenu());
document.querySelector('.header__mobile-close').addEventListener('click', () => closeMobileMenu());

document.querySelectorAll('.header__link').forEach((link) => link.addEventListener('click', () => closeMobileMenu()));

const openMobileMenu = () => {
  document.querySelector('.header').classList.add('header__expanded');
  document.querySelector('.header__mobile-toggle').classList.remove('header__mobile_btn_visible');
  document.querySelector('.header__mobile-close').classList.add('header__mobile_btn_visible');
  document.querySelector('.header__nav-bar').classList.add('header__nav-bar_visible');
  document.querySelector('.footer__theme-picker').classList.add('footer__theme-picker_visible');
};

const closeMobileMenu = () => {
  document.querySelector('.header').classList.remove('header__expanded');
  document.querySelector('.header__mobile-toggle').classList.add('header__mobile_btn_visible');
  document.querySelector('.header__mobile-close').classList.remove('header__mobile_btn_visible');
  document.querySelector('.header__nav-bar').classList.remove('header__nav-bar_visible');
  document.querySelector('.footer__theme-picker').classList.remove('footer__theme-picker_visible');
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
const surfaceImgMain = document.querySelector('.surface__main-image');
const surfaceImgSecondary = document.querySelector('.surface__secondary-image');
const surfacePulse = document.querySelector('.surface__pulse');

document.querySelectorAll('.surface__control').forEach((el) =>
  el.addEventListener('click', (e) => {
    e.stopPropagation();
    switchGallery(e.target.closest('.surface__control').id === 'control-next');
  })
);

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
      {
        src: './images/bycicles/cervelo_r5_lamborghini.png',
        name: 'Cervelo R5 Lamborghini',
        link: 'https://www.sigmasports.com/item/Cervelo/R5-Lamborghini-Disc-Road-Bike/TZ6P',
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

const bikeTemplate = document.querySelector('#bycicles-template').content.querySelector('.bycicles__card');
const byciclesDisplays = document.querySelector('.bycicles__displays');

const switchBikes = (type) => {
  const bikes = bikeTypes.filter((t) => t.type === type)[0];
  byciclesDisplays.innerHTML = '';
  bikes.sources
    .filter((_, idx) => idx < 3)
    .map((b) => createBikeDisplay(b))
    .forEach((e) => insertBike(e));

  document.querySelectorAll('.bycicles__type').forEach((el) => {
    if (el.id === `bycicles_${type}`) {
      el.classList.add('bycicles__type_active');
    } else {
      el.classList.remove('bycicles__type_active');
    }
  });
  document.querySelector('.bycicles__type-select').value = type;
};

const switchBikesMobile = (idx = 0) => {
  const type = document.querySelector('.bycicles__type-select').value;
  const bikes = bikeTypes.filter((t) => t.type === type)[0];
  byciclesDisplays.innerHTML = '';
  insertBike(createBikeDisplay(bikes.sources[idx]));

  const switchesContainer = document.querySelector('.bycicles__switches');
  switchesContainer.innerHTML = '';
  bikes.sources.forEach((_, i) => {
    const el = document.createElement('li');
    el.classList.add('bycicles__switcher');
    el.id = `bycicle__switch_${i}`;
    if (i === idx) {
      el.classList.add('bycicles__switcher_active');
    }
    el.addEventListener('click', () => switchBikesMobile(i));

    switchesContainer.appendChild(el);
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

/**
 * Переключение темы.
 */

document.addEventListener('keyup', (e) => {
  if (e.key === 'Control') switchTheme();
});

document.querySelector('.footer__theme-switch').addEventListener('click', () => switchTheme());
document.querySelector('.footer__theme-plug').style.left = '2px';

let isLightTheme = true;

const switchTheme = () => {
  isLightTheme = !isLightTheme;

  document.querySelector('.body').classList.toggle('theme__dark_background_main');
  document.querySelector('.body').classList.toggle('theme__dark_color_text-main');

  document.querySelector('.header').classList.toggle('theme__dark_background_main');
  document.querySelector('.header__mobile-toggle').classList.toggle('theme__dark_mobile_toggle');
  document.querySelector('.header__mobile-close').classList.toggle('theme__dark_mobile_close');

  document.querySelector('.legend__description').classList.toggle('theme__dark_color_text-secondary');

  document.querySelector('.proposition__author-occupation').classList.toggle('theme__dark_color_text-secondary');

  document.querySelector('.surface__description').classList.toggle('theme__dark_color_text-secondary');
  document.querySelectorAll('.surface__control').forEach((el) => {
    el.classList.toggle('theme__dark_control_background');
    el.children[0].classList.toggle('theme__dark_control_filter');
  });

  document.querySelectorAll('.bycicles__type').forEach((el) => el.classList.toggle('theme__dark_color_text-secondary'));
  document.querySelector('.bycicles__type-select').classList.toggle('theme__dark_color_text-main');
  document.querySelector('.bycicles__type-select').classList.toggle('theme__dark_background_main');
  document.querySelectorAll('.bycicles__option').forEach((el) => el.classList.toggle('theme__dark_color_text-main'));

  byciclesLinksColor();

  document.querySelector('.training__description').classList.toggle('theme__dark_color_text-secondary');

  document.querySelector('.footer').classList.toggle('theme__dark_background_footer');
  document.querySelector('.footer__form-submit').classList.toggle('theme__dark_color_text-main');
  document.querySelector('.footer__theme-switch').classList.toggle('theme__dark_background_switcher');
  document.querySelector('.footer__copyright').classList.toggle('theme__dark_footer_copyright');
  document.querySelector('.footer__icon-sun').classList.toggle('theme__dark_footer_icon-sun');
  document.querySelector('.footer__icon-moon').classList.toggle('theme__dark_footer_icon-moon');

  const plugStyle = document.querySelector('.footer__theme-plug').style;
  if (isLightTheme) {
    plugStyle.left = '2px';
    plugStyle.right = null;
  } else {
    plugStyle.right = '2px';
    plugStyle.left = null;
  }
};

const byciclesLinksColor = () => {
  const displays = document.querySelectorAll('.bycicles__displays');
  if (isLightTheme) {
    displays.forEach((el) => el.classList.add('theme__dark_color_text-dark'));
    displays.forEach((el) => el.classList.remove('theme__dark_color_text-main'));
  } else {
    if (window.innerWidth <= breakpoint) {
      displays.forEach((el) => el.classList.add('theme__dark_color_text-dark'));
      displays.forEach((el) => el.classList.remove('theme__dark_color_text-main'));
    } else {
      displays.forEach((el) => el.classList.remove('theme__dark_color_text-dark'));
      displays.forEach((el) => el.classList.add('theme__dark_color_text-main'));
    }
  }
};

/**
 * Форма в футере.
 */

document.querySelector('.footer__form').addEventListener('submit', (e) => {
  e.preventDefault();
  const emailEl = e.target.parentElement.querySelector('.footer__form-email');
  if (emailEl.value) {
    emailEl.value = 'Круто!';
  }
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
  if (size === 'desktop' && window.innerWidth <= breakpoint) {
    switchBikesMobile();
    size = 'mobile';
  }
  if (size === 'mobile' && window.innerWidth > breakpoint) {
    switchBikes('highway');
    size = 'desktop';
  }
  closeMobileMenu();
  byciclesLinksColor();
};

if (window.innerWidth <= breakpoint) {
  switchBikesMobile();
} else {
  switchBikes('highway');
}
