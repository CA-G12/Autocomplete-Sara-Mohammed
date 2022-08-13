window.addEventListener('load', () => {
  window.setTimeout(() => {
    spinner.style.opacity = '0';
    spinner.style.display = 'none';
  }, 2000);
});

// fetching search result
const searchInput = document.querySelector('input');
const submit = document.querySelector('form button');
const results = document.querySelector('.results');

const getSearchResults = (data) => {
  results.textContent = '';
  data.forEach((e) => {
    let card = document.createElement('div');
    let title = document.createElement('p');
    let btn = document.createElement('button');
    let icon = document.createElement('i');

    results.classList = 'results';
    card.classList = 'card';
    card.id = e.id;
    icon.classList = 'fa-solid fa-chevron-right';

    title.textContent = e.title;

    results.appendChild(card);
    card.appendChild(title);
    card.appendChild(btn);
    btn.appendChild(icon);
  });
};

searchInput.addEventListener('input', () => {
  fetch(`/search/${searchInput.value}`, getSearchResults);
});
