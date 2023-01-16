let offset = 0; // ! смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
	offset += 445; // урощенная запись для offset = offset + 445
	if (offset > 890) {
		offset = 0;
	}
	sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
	offset -= 445; // урощенная запись для offset = offset - 445
	if (offset < 0) {
		offset = 890;
	}
	sliderLine.style.left = -offset + 'px';
});
