const images = [
    'image/image1.jpg',
    'image/image2.jpg',
    'image/image3.jpg',
    'image/image4.jpg',
    'image/image5.jpg',
    'image/image6.jpg',
    'image/image7.jpg',
    'image/image8.jpg',
    'image/image9.jpg',

]

let imgIndex = 0;
const imgEl = document.getElementById('slider-img');
setInterval( () => {
    if(imgIndex === images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    // console.log(imgIndex, imgUrl);
    imgEl.setAttribute('src', imgUrl);
    imgIndex++;
} , 1000)