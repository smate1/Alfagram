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

	// Анімації при скролі
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px',
	}

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate__fadeInUp')
				observer.unobserve(entry.target)
			}
		})
	}, observerOptions)

	// Елементи для анімації при скролі
	const scrollAnimateElements = document.querySelectorAll(
		'.standards__item, .controls__item, .download__inner'
	)
	scrollAnimateElements.forEach(el => {
		el.classList.add('animate__animated')
		el.style.opacity = '0'
		el.style.transform = 'translateY(50px)'
		observer.observe(el)
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

	// Анімація для header при завантаженні
	setTimeout(() => {
		const headerElements = document.querySelectorAll(
			'.header__title, .header__description, .header__text, .header__buttons, .header__img-wrapper'
		)
		headerElements.forEach((el, index) => {
			setTimeout(() => {
				el.style.opacity = '1'
				el.style.transform = 'translateY(0)'
			}, index * 100)
		})
	}, 200)
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
`
document.head.appendChild(style)
