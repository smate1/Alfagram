# Анімації в проекті Alfagram

## Підключені бібліотеки

- **Animate.css** - основна бібліотека анімацій
- **Кастомні CSS анімації** - додаткові ефекти
- **JavaScript анімації** - анімації при скролі та кліках

## Доступні класи анімацій

### Основні анімації Animate.css

```html
<!-- Поява знизу -->
<div class="animate__animated animate__fadeInUp">Елемент</div>

<!-- Поява справа -->
<div class="animate__animated animate__fadeInRight">Елемент</div>

<!-- Поява зліва -->
<div class="animate__animated animate__fadeInLeft">Елемент</div>

<!-- Поява зверху -->
<div class="animate__animated animate__fadeInDown">Елемент</div>

<!-- Масштабування -->
<div class="animate__animated animate__zoomIn">Елемент</div>

<!-- Обертання -->
<div class="animate__animated animate__rotateIn">Елемент</div>
```

### Затримки анімацій

```html
<!-- Затримка 0.5 секунди -->
<div class="animate__animated animate__fadeInUp animate__delay-1s">Елемент</div>

<!-- Затримка 1 секунда -->
<div class="animate__animated animate__fadeInUp animate__delay-2s">Елемент</div>

<!-- Затримка 1.5 секунди -->
<div class="animate__animated animate__fadeInUp animate__delay-3s">Елемент</div>
```

### Швидкість анімацій

```html
<!-- Швидка анімація -->
<div class="animate__animated animate__fadeInUp animate__fast">Елемент</div>

<!-- Повільна анімація -->
<div class="animate__animated animate__fadeInUp animate__slow">Елемент</div>
```

## Приклади використання

### 1. Анімація заголовка при завантаженні

```html
<h1 class="animate__animated animate__fadeInUp">Заголовок</h1>
```

### 2. Послідовна анімація елементів

```html
<div class="animate__animated animate__fadeInUp">Елемент 1</div>
<div class="animate__animated animate__fadeInUp animate__delay-1s">
	Елемент 2
</div>
<div class="animate__animated animate__fadeInUp animate__delay-2s">
	Елемент 3
</div>
```

### 3. Анімація при наведенні

```css
.element:hover {
	transform: translateY(-10px);
	transition: all 0.3s ease;
}
```

### 4. Анімація при скролі

```javascript
// Елемент автоматично анімується при появі в області видимості
const element = document.querySelector('.my-element')
element.classList.add('animate__animated')
element.style.opacity = '0'
element.style.transform = 'translateY(50px)'
```

## Кастомні анімації

### Ripple ефект для кнопок

Кнопки автоматично мають ripple ефект при кліку:

```html
<button class="header__button">Кнопка</button>
```

### Анімація при наведенні

```css
/* Кнопки піднімаються при наведенні */
.header__button:hover {
	transform: translateY(-5px);
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Елементи піднімаються при наведенні */
.header__item:hover {
	transform: translateY(-10px);
}

/* Зображення збільшуються при наведенні */
.header__img:hover {
	transform: scale(1.05);
}
```

## Налаштування

### Зміна швидкості анімацій

```css
.animate__animated {
	animation-duration: 1s; /* За замовчуванням */
}

.animate__fast {
	animation-duration: 0.5s;
}

.animate__slow {
	animation-duration: 2s;
}
```

### Зміна затримок

```css
.animate__delay-1s {
	animation-delay: 0.5s; /* За замовчуванням */
}

.animate__delay-2s {
	animation-delay: 1s;
}

.animate__delay-3s {
	animation-delay: 1.5s;
}
```

## Поради

1. **Не перестарайтеся** - занадто багато анімацій може відволікати користувача
2. **Використовуйте затримки** для створення послідовності анімацій
3. **Тестуйте на різних пристроях** - анімації можуть сповільнювати слабкі пристрої
4. **Додавайте анімації поступово** - починайте з основних елементів

## Підтримувані браузери

- Chrome 43+
- Firefox 16+
- Safari 9+
- Edge 12+
- IE 10+ (з обмеженнями)

## Документація

- [Animate.css офіційний сайт](https://animate.style/)
- [Animate.css на GitHub](https://github.com/animate-css/animate.css)
