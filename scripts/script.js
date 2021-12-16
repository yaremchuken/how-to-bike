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
