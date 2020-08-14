document.addEventListener('DOMContentLoaded', () => {
    console.log('działam');
    const imagesContainerEl = document.querySelector('.slider__images-container');
    const imgFirst = document.querySelector('.slider__image-container--first img');
    const imgSecond = document.querySelector('.slider__image-container--second img');

    function adjustImagesSize() {
        const imagesContainerWidth = imagesContainerEl.offsetWidth;
        imgFirst.style.width = imagesContainerWidth + 'px';
        imgSecond.style.width = imagesContainerWidth + 'px';

    };
    window.addEventListener('resize', adjustImagesSize);
    adjustImagesSize();

});