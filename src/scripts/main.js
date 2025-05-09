document.addEventListener('DOMContentLoaded', function () {
	const links = document.querySelectorAll('.social-link');
	const popup = document.getElementById('qr-popup');
	const popupImg = document.getElementById('qr-popup-img');
	const popupLink = document.getElementById('qr-popup-link');
	const popupClose = document.getElementById('qr-popup-close');

	// Thêm vùng hiển thị thông tin ngân hàng nếu chưa có
	let bankInfo = document.getElementById('bank-info');
	if (!bankInfo) {
		bankInfo = document.createElement('div');
		bankInfo.id = 'bank-info';
		bankInfo.style.marginTop = '10px';
		bankInfo.style.fontSize = '1rem';
		bankInfo.style.color = '#2d3e50';
		bankInfo.style.fontWeight = '500';
		bankInfo.style.lineHeight = '1.6';
		document.querySelector('.qr-popup-content').appendChild(bankInfo);
	}

	links.forEach((link) => {
		link.addEventListener('click', function (event) {
			event.preventDefault();
			const qrCodeSrc = this.getAttribute('data-qr');
			const linkHref = this.getAttribute('href');
			const bank = this.getAttribute('data-bank');
			if (qrCodeSrc) {
				popupImg.src = qrCodeSrc;
				popupLink.href = linkHref && linkHref !== '#' ? linkHref : '#';
				popup.style.display = 'flex';
				// Hiển thị thông tin ngân hàng nếu có
				if (bank) {
					bankInfo.innerHTML = bank;
					bankInfo.style.display = 'block';
				} else {
					bankInfo.innerHTML = '';
					bankInfo.style.display = 'none';
				}
			}
		});
	});

	popupClose.addEventListener('click', function () {
		popup.style.display = 'none';
		popupImg.src = '';
		bankInfo.innerHTML = '';
		bankInfo.style.display = 'none';
	});

	// Đóng popup khi click ra ngoài nội dung
	popup.addEventListener('click', function (e) {
		if (e.target === popup) {
			popup.style.display = 'none';
			popupImg.src = '';
			bankInfo.innerHTML = '';
			bankInfo.style.display = 'none';
		}
	});
});
