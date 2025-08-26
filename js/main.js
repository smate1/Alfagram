// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function () {
	// Бургер меню
	const burger = document.querySelector('.header__burger')
	const menu = document.querySelector('.header__menu')
	const body = document.body

	if (burger && menu) {
		burger.addEventListener('click', function () {
			burger.classList.toggle('active')
			menu.classList.toggle('active')
			body.classList.toggle('no-scroll')
		})

		// Закрытие меню при клике на ссылку
		const menuLinks = menu.querySelectorAll('.header__link')
		menuLinks.forEach(link => {
			link.addEventListener('click', function () {
				burger.classList.remove('active')
				menu.classList.remove('active')
				body.classList.remove('no-scroll')
			})
		})

		// Закрытие меню при клике вне его
		document.addEventListener('click', function (e) {
			if (!burger.contains(e.target) && !menu.contains(e.target)) {
				burger.classList.remove('active')
				menu.classList.remove('active')
				body.classList.remove('no-scroll')
			}
		})
	}

	const accordionItems = document.querySelectorAll('.questions__accordion-item')

	accordionItems.forEach(item => {
		const header = item.querySelector('.questions__accordion-header')

		header.addEventListener('click', function () {
			const isActive = item.classList.contains('active')

			// Close all other accordion items
			accordionItems.forEach(otherItem => {
				if (otherItem !== item) {
					otherItem.classList.remove('active')
				}
			})

			// Toggle current item
			if (isActive) {
				item.classList.remove('active')
			} else {
				item.classList.add('active')
			}
		})
	})

	// Optional: Open first item by default
	if (accordionItems.length > 0) {
		accordionItems[0].classList.add('active')
	}

	// Анімації в порядку від 1 до 7 згідно з зображенням
	function startAnimations() {
		// 1. Заголовок "ALFAGRAM TELEGRAM ДЛЯ ДЕТЕЙ"
		const title = document.querySelector('.header__title')
		if (title) {
			setTimeout(() => {
				title.style.opacity = '0'
				title.style.transform = 'translateY(30px)'
				title.style.transition = 'all 0.8s ease-out'

				setTimeout(() => {
					title.style.opacity = '1'
					title.style.transform = 'translateY(0)'
				}, 100)
			}, 200)
		}

		// 2. Слоган "СОХРАНЯЕМ ЛИЧНОЕ - ЗАЩИЩАЕМ ГЛАВНОЕ"
		const description = document.querySelector('.header__description')
		if (description) {
			setTimeout(() => {
				description.style.opacity = '0'
				description.style.transform = 'translateY(30px)'
				description.style.transition = 'all 0.8s ease-out'

				setTimeout(() => {
					description.style.opacity = '1'
					description.style.transform = 'translateY(0)'
				}, 100)
			}, 600)
		}

		// 2.5. Текст опису
		const text = document.querySelector('.header__text')
		if (text) {
			setTimeout(() => {
				text.style.opacity = '0'
				text.style.transform = 'translateY(30px)'
				text.style.transition = 'all 0.8s ease-out'

				setTimeout(() => {
					text.style.opacity = '1'
					text.style.transform = 'translateY(0)'
				}, 100)
			}, 800)
		}

		// 3. Зображення з Minecraft персонажами
		const headerImg = document.querySelector('.header__img-wrapper')
		if (headerImg) {
			setTimeout(() => {
				headerImg.style.opacity = '0'
				headerImg.style.transform = 'translateX(50px)'
				headerImg.style.transition = 'all 0.8s ease-out'

				setTimeout(() => {
					headerImg.style.opacity = '1'
					headerImg.style.transform = 'translateX(0)'
				}, 100)
			}, 1000)
		}

		// 4. Кнопки завантаження (App Store та Google Play)
		const buttons = document.querySelector('.header__buttons')
		if (buttons) {
			setTimeout(() => {
				buttons.style.opacity = '0'
				buttons.style.transform = 'translateY(30px)'
				buttons.style.transition = 'all 0.8s ease-out'

				setTimeout(() => {
					buttons.style.opacity = '1'
					buttons.style.transform = 'translateY(0)'
				}, 100)
			}, 1200)
		}

		// 5. Перша функція - "Добавление нового контакта..."
		const firstFeature = document.querySelector(
			'.header__items .header__item:nth-child(1)'
		)
		if (firstFeature) {
			setTimeout(() => {
				firstFeature.style.opacity = '0'
				firstFeature.style.transform = 'translateY(30px)'
				firstFeature.style.transition = 'all 0.8s ease-out'

				setTimeout(() => {
					firstFeature.style.opacity = '1'
					firstFeature.style.transform = 'translateY(0)'
				}, 100)
			}, 1600)
		}

		// 6. Друга функція - "ИИ в режиме реального времени..."
		const secondFeature = document.querySelector(
			'.header__items .header__item:nth-child(2)'
		)
		if (secondFeature) {
			setTimeout(() => {
				secondFeature.style.opacity = '0'
				secondFeature.style.transform = 'translateY(30px)'
				secondFeature.style.transition = 'all 0.8s ease-out'

				setTimeout(() => {
					secondFeature.style.opacity = '1'
					secondFeature.style.transform = 'translateY(0)'
				}, 100)
			}, 2000)
		}

		// 7. Третя функція - "ИИ уберет из поиска..."
		const thirdFeature = document.querySelector(
			'.header__items .header__item:nth-child(3)'
		)
		if (thirdFeature) {
			setTimeout(() => {
				thirdFeature.style.opacity = '0'
				thirdFeature.style.transform = 'translateY(30px)'
				thirdFeature.style.transition = 'all 0.8s ease-out'

				setTimeout(() => {
					thirdFeature.style.opacity = '1'
					thirdFeature.style.transform = 'translateY(0)'
				}, 100)
			}, 2400)
		}

		// Альтернативний спосіб анімації всіх елементів
		const allHeaderItems = document.querySelectorAll(
			'.header__items .header__item'
		)
		allHeaderItems.forEach((item, index) => {
			setTimeout(() => {
				item.style.opacity = '0'
				item.style.transform = 'translateY(30px)'
				item.style.transition = 'all 0.8s ease-out'

				setTimeout(() => {
					item.style.opacity = '1'
					item.style.transform = 'translateY(0)'
				}, 100)
			}, 1600 + index * 400) // 1600ms, 2000ms, 2400ms
		})
	}

	// Запускаємо анімації при завантаженні сторінки
	startAnimations()

	// Додаємо можливість повторного запуску анімацій при скролі до початку
	let animationTriggered = false
	window.addEventListener('scroll', () => {
		if (window.scrollY < 100 && !animationTriggered) {
			animationTriggered = true
			setTimeout(() => {
				startAnimations()
			}, 500)
		} else if (window.scrollY > 200) {
			animationTriggered = false
		}
	})

	// Анімації при скролі для інших секцій
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px',
	}

	// Елементи для анімації при скролі (без animate.css)
	const scrollAnimateElements = document.querySelectorAll(
		'.standards__item, .controls__item, .download__inner'
	)
	scrollAnimateElements.forEach(el => {
		el.style.opacity = '0'
		el.style.transform = 'translateY(50px)'
		el.style.transition = 'all 0.6s ease-out'

		// Проста анімація при появі в viewport
		const elementObserver = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.style.opacity = '1'
						entry.target.style.transform = 'translateY(0)'
						elementObserver.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
		)

		elementObserver.observe(el)
	})

	// Анімація для кнопок при кліку
	const buttons = document.querySelectorAll(
		'.header__button, .standards__button'
	)
	buttons.forEach(button => {
		button.addEventListener('click', function (e) {
			// Додаємо ефект ripple
			const ripple = document.createElement('span')
			const rect = button.getBoundingClientRect()
			const size = Math.max(rect.width, rect.height)
			const x = e.clientX - rect.left - size / 2
			const y = e.clientY - rect.top - size / 2

			ripple.style.width = ripple.style.height = size + 'px'
			ripple.style.left = x + 'px'
			ripple.style.top = y + 'px'
			ripple.classList.add('ripple')

			button.appendChild(ripple)

			setTimeout(() => {
				ripple.remove()
			}, 600)
		})
	})

	// Анімації для зображень на сторінках FAQ та Download
	function initImageAnimations() {
		// Функція для перевірки видимості елемента
		function isElementInViewport(el) {
			const rect = el.getBoundingClientRect()
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <=
					(window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <=
					(window.innerWidth || document.documentElement.clientWidth)
			)
		}

		// Функція для перевірки чи це адаптивний пристрій
		function isMobileDevice() {
			return window.innerWidth <= 768
		}

		// Функція для активації анімації зображення
		function activateImageAnimation(img) {
			if (!img.classList.contains('animated')) {
				img.classList.add('animated')

				// Отримуємо тип анімації з data-атрибута
				const animationType = img.getAttribute('data-animate')
				if (animationType) {
					// Застосовуємо відповідну анімацію
					switch (animationType) {
						case 'float':
							img.style.animation = 'float 4s ease-in-out infinite'
							break
						case 'pulse':
							img.style.animation = 'pulse 3s ease-in-out infinite'
							break
						case 'bounce':
							img.style.animation = 'bounce 2.5s ease-in-out infinite'
							break
						case 'rotate':
							img.style.animation = 'rotate 4s linear infinite'
							break
						default:
							img.style.animation = 'float 4s ease-in-out infinite'
					}
				}

				// Додаємо затримку для різних зображень
				const delay = Math.random() * 1000
				setTimeout(() => {
					img.style.animationDelay = '0s'
				}, delay)
			}
		}

		// Знаходимо всі зображення для анімації
		const animatedImages = document.querySelectorAll(
			'.questions__img, .download__img, .footer__img, .standards__img'
		)

		// Ініціалізація зображень в залежності від пристрою
		function initializeImages() {
			if (isMobileDevice()) {
				// На мобільних пристроях зображення відразу видимі без анімації появи
				animatedImages.forEach(img => {
					img.style.opacity = '1'
					img.style.transform = 'translateY(0)'
					img.style.transition = 'none'
				})
			} else {
				// На десктопі зображення спочатку приховані
				animatedImages.forEach(img => {
					img.style.opacity = '0'
					img.style.transform = 'translateY(20px)'
					img.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
				})
			}
		}

		// Функція для перевірки та активації анімацій
		function checkAndActivateAnimations() {
			animatedImages.forEach(img => {
				if (isElementInViewport(img) && !img.classList.contains('animated')) {
					if (isMobileDevice()) {
						// На мобільних пристроях тільки активація анімації без появи
						activateImageAnimation(img)
					} else {
						// На десктопі анімація появи + анімація
						img.style.opacity = '1'
						img.style.transform = 'translateY(0)'
						setTimeout(() => {
							activateImageAnimation(img)
						}, 300)
					}
				}
			})
		}

		// Функція для перевірки та активації анімацій (тільки для мобільних)
		function checkAndActivateAnimationsMobile() {
			animatedImages.forEach(img => {
				if (isElementInViewport(img) && !img.classList.contains('animated')) {
					// На мобільних пристроях тільки активація анімації
					activateImageAnimation(img)
				}
			})
		}

		// Ініціалізуємо зображення
		initializeImages()

		// Запускаємо перевірку при завантаженні
		if (isMobileDevice()) {
			checkAndActivateAnimationsMobile()
		} else {
			checkAndActivateAnimations()
		}

		// Запускаємо перевірку при скролі
		let scrollTimeout
		window.addEventListener('scroll', () => {
			clearTimeout(scrollTimeout)
			scrollTimeout = setTimeout(() => {
				if (isMobileDevice()) {
					checkAndActivateAnimationsMobile()
				} else {
					checkAndActivateAnimations()
				}
			}, 100)
		})

		// Запускаємо перевірку при зміні розміру вікна
		window.addEventListener('resize', () => {
			// Перезавантажуємо ініціалізацію при зміні розміру
			initializeImages()
			if (isMobileDevice()) {
				checkAndActivateAnimationsMobile()
			} else {
				checkAndActivateAnimations()
			}
		})

		// Додаємо інтерактивні ефекти при наведенні
		animatedImages.forEach(img => {
			img.addEventListener('mouseenter', function () {
				if (window.innerWidth > 768) {
					// Тільки на десктопі
					this.style.transform = 'scale(1.05)'
					this.style.transition = 'transform 0.3s ease'
				}
			})

			img.addEventListener('mouseleave', function () {
				if (window.innerWidth > 768) {
					// Тільки на десктопі
					this.style.transform = 'scale(1)'
				}
			})
		})

		// Спеціальні анімації для різних сторінок
		const currentPage = window.location.pathname

		if (currentPage.includes('faq.html')) {
			// Анімація для зображення на FAQ сторінці
			const faqImage = document.querySelector('.questions__img')
			if (faqImage) {
				faqImage.addEventListener('click', function () {
					this.style.animation = 'pulse 0.5s ease-in-out'
					setTimeout(() => {
						this.style.animation = ''
					}, 500)
				})
			}
		}

		if (currentPage.includes('download.html')) {
			// Анімація для зображень на Download сторінці
			const downloadImages = document.querySelectorAll('.download__img')
			downloadImages.forEach((img, index) => {
				// Різні затримки для різних зображень
				setTimeout(() => {
					if (isElementInViewport(img)) {
						if (isMobileDevice()) {
							// На мобільних пристроях тільки активація анімації
							activateImageAnimation(img)
						} else {
							// На десктопі анімація появи + анімація
							img.style.opacity = '1'
							img.style.transform = 'translateY(0)'
							setTimeout(() => {
								activateImageAnimation(img)
							}, 200)
						}
					}
				}, index * 200)
			})

			// Додаткова перевірка для мобільних пристроїв - забезпечуємо видимість зображень
			if (isMobileDevice()) {
				downloadImages.forEach(img => {
					img.style.opacity = '1'
					img.style.transform = 'translateY(0)'
				})
			}
		}
	}

	// Запускаємо анімації зображень
	initImageAnimations()

	// Додаємо CSS для додаткових анімацій
	const imageAnimationStyle = document.createElement('style')
	imageAnimationStyle.textContent = `
		/* Додаткові анімації для зображень */
		.questions__img,
		.download__img,
		.footer__img,
		.standards__img {
			cursor: pointer;
			will-change: transform;
		}

		/* Ефект світіння при наведенні */
		.questions__img:hover,
		.download__img:hover,
		.footer__img:hover,
		.standards__img:hover {
			filter: brightness(1.1) drop-shadow(0 0 10px rgba(16, 144, 203, 0.3));
		}

		/* Анімація завантаження */
		@keyframes imageLoad {
			0% {
				opacity: 0;
				transform: scale(0.8) translateY(20px);
			}
			100% {
				opacity: 1;
				transform: scale(1) translateY(0);
			}
		}

		.image-loading {
			animation: imageLoad 0.8s ease-out forwards;
		}

		/* Адаптивні налаштування */
		@media (max-width: 768px) {
			.questions__img:hover,
			.download__img:hover,
			.footer__img:hover,
			.standards__img:hover {
				filter: none;
				transform: none;
			}
		}

		@media (max-width: 480px) {
			.questions__img.animated,
			.download__img.animated,
			.footer__img.animated,
			.standards__img.animated {
				animation: none;
			}
		}
	`
	document.head.appendChild(imageAnimationStyle)
})

// Додаємо CSS для ripple ефекту
const style = document.createElement('style')
style.textContent = `
	.ripple {
		position: absolute;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.6);
		transform: scale(0);
		animation: ripple-animation 0.6s linear;
		pointer-events: none;
	}

	@keyframes ripple-animation {
		to {
			transform: scale(4);
			opacity: 0;
		}
	}

	.header__button, .standards__button {
		position: relative;
		overflow: hidden;
	}

	/* Початкові стани для анімацій */
	.header__title,
	.header__description,
	.header__text,
	.header__img-wrapper,
	.header__buttons,
	.header__items .header__item {
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease-out;
	}

	.header__img-wrapper {
		transform: translateX(50px);
	}

	/* Додаткові стилі для плавності */
	.header__title span {
		transition: color 0.3s ease;
	}

	.header__item-img {
		transition: transform 0.3s ease;
	}

	.header__item:hover .header__item-img {
		transform: scale(1.1);
	}

	/* Анімація невагомості тільки для футерської картинки */
	.footer__img {
		animation: float 6s ease-in-out infinite;
	}

	@keyframes float {
		0%, 100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-20px);
		}
	}

	/* Прибираємо всі анімації в хедері на мобільних пристроях */
	@media (max-width: 768px) {
		.header__title,
		.header__description,
		.header__text,
		.header__img-wrapper,
		.header__buttons,
		.header__items .header__item {
			opacity: 1 !important;
			transform: none !important;
			transition: none !important;
			animation: none !important;
		}

		/* Прибираємо анімацію невагомості в футері на мобільних */
		.footer__img {
			animation: none !important;
		}
	}

	@media (max-width: 480px) {
		.header__title,
		.header__description,
		.header__text,
		.header__img-wrapper,
		.header__buttons,
		.header__items .header__item {
			opacity: 1 !important;
			transform: none !important;
			transition: none !important;
			animation: none !important;
		}

		.footer__img {
			animation: none !important;
		}
	}

	@media (max-width: 375px) {
		.header__title,
		.header__description,
		.header__text,
		.header__img-wrapper,
		.header__buttons,
		.header__items .header__item {
			opacity: 1 !important;
			transform: none !important;
			transition: none !important;
			animation: none !important;
		}

		.footer__img {
			animation: none !important;
		}
	}
`
document.head.appendChild(style)
