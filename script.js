// Навигация между страницами
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + pageId);
    if(target) target.classList.add('active');
    window.scrollTo(0,0);
}

// Генерация 15 отзывов
const track = document.getElementById('reviews-track');
const names = ["Игорь", "Анна", "Сергей", "Елена", "Дмитрий", "Ольга", "Виктор", "Марина", "Алексей", "Светлана", "Иван", "Наталья", "Артем", "Кирилл", "Мария"];
const texts = [
    "Тараканы исчезли после первой обработки! Спасибо DEZDRY за тишину на кухне.",
    "Вызывала травить клопов. Мастер приехал вовремя, всё объяснил. Результат 5+",
    "Лучший сервис в Москве. Быстро, без запаха, эффективно.",
    "Год мучились с муравьями на даче. Одной обработки хватило навсегда.",
    "Рекомендую! Очень вежливые специалисты и реально работающая химия."
];

for(let i=0; i<15; i++) {
    const card = document.createElement('div');
    card.className = 'review-card';
    const randomName = names[i];
    const randomText = texts[Math.floor(Math.random()*texts.length)];
    const stars = "★".repeat(Math.random() > 0.3 ? 5 : 4);
    
    card.innerHTML = `
        <div class="stars">${stars}</div>
        <p>"${randomText}"</p>
        <strong>${randomName} В.</strong>
    `;
    track.appendChild(card);
}

// Автоматический слайдер
let scrollPos = 0;
function animateSlider() {
    scrollPos += 1;
    if (scrollPos > track.scrollWidth - track.clientWidth) scrollPos = 0;
    track.style.transform = translateX(-${scrollPos}px);
    requestAnimationFrame(animateSlider);
}
animateSlider();

// Логика модального окна
function openOrderModal(service) {
    document.getElementById('selected-service-name').innerText = "Услуга: " + service;
    document.getElementById('orderModal').style.display = 'flex';
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
    document.getElementById('order-form-step').style.display = 'block';
    document.getElementById('order-success-step').style.display = 'none';
}

function submitFinalOrder() {
    const phone = document.getElementById('phone').value;
    if(phone.length < 5) return alert("Введите телефон");

    // Эффект отправки
    document.getElementById('order-form-step').style.display = 'none';
    document.getElementById('order-success-step').style.display = 'flex';
    document.getElementById('order-success-step').style.flexDirection = 'column';
    document.getElementById('order-success-step').style.alignItems = 'center';
}

// Кастомный курсор
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});
