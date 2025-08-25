# Alfagram - Використання шрифтів

## Основні шрифти

**Poppins** - основний шрифт проекту (підключений через Google Fonts)

## Додаткові шрифти

У проекті також підключені шрифти Intro з різними вагами:

- **Intro Thin Alt** - вага 100
- **Intro Light Alt** - вага 300
- **Intro Regular Alt** - вага 400
- **Intro Book Alt** - вага 500
- **Intro Bold Alt** - вага 700
- **Intro Black Alt** - вага 900

## Як використовувати

### Poppins (основний шрифт)

Poppins автоматично застосовується до всього тексту через `body`:

```css
body {
	font-family: 'Poppins', sans-serif;
	font-weight: 400; /* Regular */
}
```

### Intro (додаткові шрифти)

#### 1. Через CSS класи

```css
.text-thin      /* вага 100 */
/* вага 100 */
/* вага 100 */
/* вага 100 */
/* вага 100 */
/* вага 100 */
/* вага 100 */
/* вага 100 */
.text-light     /* вага 300 */
.text-regular   /* вага 400 */
.text-book      /* вага 500 */
.text-bold      /* вага 700 */
.text-black; /* вага 900 */
```

#### 2. Через font-weight

```css
.my-text {
	font-family: 'Intro', sans-serif;
	font-weight: 700; /* Bold */
}
```

#### 3. Пряме використання

```css
h1 {
	font-family: 'Intro', sans-serif;
	font-weight: 900; /* Black */
}
```

## Структура файлів

```
fonts/
├── Intro Thin Alt.otf
├── Intro Light Alt.otf
├── Intro Regular Alt.otf
├── Intro Book Alt.otf
├── Intro Bold Alt.otf
└── Intro Black Alt.otf

css/
├── fonts.css (містить @font-face правила та класи для Intro)
├── style.css (основні стилі)
└── reset.css

index.html (приклад використання)
```

## Примітки

- Poppins підключений через Google Fonts
- Шрифти Intro підключені через `@font-face` з `font-display: swap`
- Poppins встановлений як основний для body
- Всі шрифти мають fallback на sans-serif
- Шрифти Intro та їх класи винесені в окремий файл `fonts.css`
# Alfagram
