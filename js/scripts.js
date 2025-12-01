document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const footer = document.getElementById('footer');

    navbar.innerHTML =
        `<ul>
            <li><a href="index.html">Начало</a></li>
            <li><a href="za-nas.html">За нас</a></li>
            <li><a href="kontakti.html">Контакти</a></li>
        </ul>
    `;

    footer.innerHTML = '<p>&copy; 2025 Примерен сайт</p>';
});