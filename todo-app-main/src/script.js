const el = document.getElementById("themeChange");

el.addEventListener('click', (e) => {
    e.preventDefault();

    const next = e.target.getAttribute('data-next');
    const current = (next === 'light-theme') ? 'dark-theme' : 'light-theme';
    const nextImg = (next === 'light-theme') ? '../images/icon-sun.svg' : '../images/icon-moon.svg';

    const main = document.getElementsByClassName('main');

    main[0].classList.remove(current)
    main[0].classList.add(next);

    e.target.setAttribute('data-next', current);
    e.target.setAttribute('src', nextImg);
});