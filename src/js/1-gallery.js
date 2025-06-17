import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    alt: 'Hokkaido Flower',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    alt: 'Container Haulage Freight',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    alt: 'Aerial Beach View',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    alt: 'Flower Blooms',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    alt: 'Alpine Mountains',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    alt: 'Mountain Lake Sailing',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.gallery');

const galleryItems = images
  .map(image => {
    return `
    <li class="gallery-item">
      <a class="gallery-link" href="${image.url}">
        <img
          class="gallery-image"
          src="${image.url}"
          alt="${image.alt}"
        />
      </a>
    </li>
  `;
  })
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
