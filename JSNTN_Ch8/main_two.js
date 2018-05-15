const form = document.forms['hero'];
form.addEventListener('submit', validate, false);
form.addEventListener('submit', makeHero, false);

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}

//const label = form.querySelector('label');
//const error = document.createElement('div');
//error.classList.add('error');
//error.textContent = "! Your name is not allowed to start with X.";
//label.append(error);
//
//function validateInline() {
//    if (this.value) {
//        const heroName = this.value.toUpperCase();
//        if(heroName.startsWith('X')) {
//            error.style.display = "block";
//        }
//        else {
//            error.style.display = 'none';
//        }
//    }
//}

// function disableSubmit(event) {
//    if(event.target.value === '') {
//        document.getElementById('submit').disabled = true;
//    }
//    else {
//        document.getElementById('submit').disabled = false;
//    }
//}

function makeHero(event) {
    event.preventDefault();
    
    const hero = {};
    
    hero.category = form.category.value;
    hero.name = form.heroName.value; // create name property
    hero.realName = form.realName.value; // create real name property
    hero.powers = [];
    for (let i = 0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;
    
    // hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    // document.forms.hero.powers[0].checked = true;
    // form.type[2].checked = true;
    // form.city.options[form.city.selectedIndex].text
    // form.city.options[0].text
    // form.origin.value = "Born as Kal-El on the planet Krypton...";
    
    alert(JSON.stringify(hero)); // convert object to JSON
    
    return hero;
}