// app.js

// Array of image URLs
const images = [
    ``,
    'https://via.placeholder.com/500x300?text=Image+2',
    'https://via.placeholder.com/500x300?text=Image+3'
];


function initializeSlider() {
    const slider = document.getElementById('slider');
    const thumbnailsContainer = document.getElementById('thumbnails');

    
    const mainImage = createImageElement(images[0], 'slider-image');
    slider.appendChild(mainImage);

    
    images.forEach((image, index) => {
        const thumbnail = createImageElement(image, 'thumbnail');
        thumbnail.addEventListener('click', () => {
            updateSlider(image, thumbnail);
        });
        thumbnailsContainer.appendChild(thumbnail);
    });
}
function createImageElement(src, className) {
    const img = document.createElement('img');
    img.src = src;
    img.className = className;
    return img;
}
function updateSlider(imageSrc, selectedThumbnail) {
    const slider = document.getElementById('slider');
    const existingImage = slider.querySelector('.slider-image');
    if (existingImage) {
        slider.removeChild(existingImage);
    }
    const newImage = createImageElement(imageSrc, 'slider-image');
    slider.appendChild(newImage);

    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove('selected');
    });
    selectedThumbnail.classList.add('selected');
}

document.addEventListener('DOMContentLoaded', initializeSlider);
