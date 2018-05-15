const form = document.forms['search'];
const input = form.elements.searchInput;
input.value = "Search Here";

input.addEventListener('focus', function() {
    if (input.value === "Search Here") {
        input.value = '';
    }
}, false);

input.addEventListener('blur', function() {
    if (input.value === '') {
        input.value = "Search Here";
    }
}, false);

form.addEventListener('submit', search, false);

function search(event) {
    const myValue = form.elements.searchInput.value;
    alert('Your searched for: ' + myValue);
    event.preventDefault();
}

/* BUTTON LISTENERS */
//input.addEventListener('focus', () => alert('focused'), false);
//input.addEventListener('blur', () => alert('blured'), false);
//input.addEventListener('change', () => alert('changed'), false);

/* FORMS */
// const form = document.forms[0]; works the same
// const form = document.forms.search;
// const form = document.forms['search'];

/* ELEMENTS */
// const [input, button] = form.elements;
// const input = form.searchInput;
// const input = form['searchInput'];

/* SUBMISSIONS */
// form.action = 'an/other.url'