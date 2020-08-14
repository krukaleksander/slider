document.addEventListener('DOMContentLoaded', () => {
    console.log('działam');
    const imagesContainerEl = document.querySelector('.slider__images-container');
    const imgFirst = document.querySelector('.slider__image-container--first img');
    const imgSecond = document.querySelector('.slider__image-container--second img');
    let dragging = false;
    let imagesContainerLeftOffset;
    const imageFirstContainer = document.querySelector('.slider__image-container slider__image-container--first');
    const imageSecondContainer = document.querySelector('.slider__image-container--second');
    const handleEl = document.querySelector('.slider__handle');
    const dividerEl = document.querySelector('.slider__divider');
    let imagesContainerWidth;

    function getoffset(clientX) {
        const offset = clientX - imagesContainerLeftOffset;
        if (offset < 0) {
            return 0
        } else if (offset > imagesContainerWidth) {
            return imagesContainerWidth
        } else {
            return offset;
        }
    };

    function move(clientX) {
        const offset = getoffset(clientX);
        const percent = offset / imagesContainerWidth * 100;
        dividerEl.style.left = percent + '%';
        imageSecondContainer.style.width = percent + '%';
    };

    function initEvents() {
        handleEl.addEventListener('mousedown', () => {
            dragging = true;

        });

        handleEl.addEventListener('mouseup', () => {
            dragging = false;

        });
        window.addEventListener('mousemove', event => {
            if (dragging) {
                move(event.clientX);
            }
        });
        handleEl.addEventListener('touchstart', () => {
            dragging = true;

        });

        handleEl.addEventListener('touchend', () => {
            dragging = false;

        });
        window.addEventListener('touchmove', event => {
            if (dragging) {
                move(event.touches[0].clientX);
            }
        });

    };

    function adjustImagesSize() {
        imagesContainerWidth = imagesContainerEl.offsetWidth;
        imagesContainerLeftOffset = imagesContainerEl.offsetLeft;
        imgFirst.style.width = imagesContainerWidth + 'px';
        imgSecond.style.width = imagesContainerWidth + 'px';

    };
    window.addEventListener('resize', adjustImagesSize);
    adjustImagesSize();
    initEvents();

});