let errandItems = [];

function addErrand(text) {

const errand = {
    text,
    checked: false,
    id: Date.now(),
  };

  errandItems.push(errand);
 
  const list = document.getElementById('tasks');
  list.insertAdjacentHTML('beforeend', `
    <li class="errand-item" data-key="${errand.id}">
      <input id="${errand.id}" type="checkbox"/>
      <label for="${errand.id}" class="tick js-tick"></label>
      <span>${errand.text}</span>
      <button class="delete-errand js-delete-errand">
        <svg><use href="#delete-icon"></use></svg>
      </button>
    </li>
  `);
}

const form = document.getElementById('create-task-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.getElementById('new-task-description');

  const text = input.value.trim();
  if (text !== '') {
    addErrand(text);
    input.value = '';
    input.focus();
  }
});