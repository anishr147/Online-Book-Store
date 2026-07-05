const searchForm = document.querySelector('.search-form');
const loginForm = document.querySelector('.login-form-container');
const headerNav = document.querySelector('.header .header-2');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
};

document.querySelector('#close-login-btn').onclick = () => {
  loginForm.classList.remove('active');
};

window.onscroll = () => {
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');

  if (window.scrollY > 80) {
    headerNav.classList.add('active');
  } else {
    headerNav.classList.remove('active');
  }
};

window.onload = () => {
  if (window.scrollY > 80) {
    headerNav.classList.add('active');
  } else {
    headerNav.classList.remove('active');
  }
};

searchBox.addEventListener('input', () => {
  const query = searchBox.value.toLowerCase().trim();
  const productCards = document.querySelectorAll('.book-container .box, .arrival-container .box');

  productCards.forEach((card) => {
    const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
    const description = card.querySelector('p')?.textContent.toLowerCase() || '';
    card.style.display = title.includes(query) || description.includes(query) ? 'flex' : 'none';
  });
});
