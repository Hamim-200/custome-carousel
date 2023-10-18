const images = [
    'image/image1.jpg',
    'image/image2.jpg',
    'image/image3.jpg',
    'image/image4.jpg',
    'image/image5.jpg',
    'image/image6.jpg',
    'image/image7.jpg',
    'image/image8.jpg',

]

let imgIndex = 0;
const img = document.getElementById('carousel-img');
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgLink = images[imgIndex];
    img.setAttribute('src', imgLink);
    console.log(imgLink)
    imgIndex++;


}, 2000)