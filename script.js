// Scroll Gallery
function scrollGallery(amount){
  const gallery = document.getElementById('gallery-grid');
  gallery.scrollBy({ left: amount, behavior: 'smooth' });
}

// Lightbox
const galleryGrid = document.getElementById('gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

const MAX_IMAGES = 200; // change if more images
for(let i=1;i<=MAX_IMAGES;i++){
  const img = document.createElement('img');
  img.src = `images/gallery/image-${i}.jpg`;
  img.alt = "Stone Gallery";
  img.addEventListener('click', ()=> {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
  galleryGrid.appendChild(img);
}

function closeLightbox(){
  lightbox.style.display = 'none';
}
