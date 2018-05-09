// single click
const clickParagraph = document.getElementById('click');

if (clickParagraph != null) {
    clickParagraph.addEventListener('click', console.log('click'));
    
    clickParagraph.addEventListener('mousedown', console.log('click'));

    clickParagraph.addEventListener('mouseup', console.log('up'));
}

// double 
const dblclickParagraph = document.getElementById('dblclick');

if (dblclickParagraph) {
    dblclickParagraph.addEventListener('dblclick', highlight);
}

function highlight(event) {
    event.target.classList.toggle('highlight');
}

// mouse
const mouseParagraph = document.getElementById('mouse');

if (mouseParagraph) {
    mouseParagraph.addEventListener('mouseover', highlight);

    mouseParagraph.addEventListener('mouseout', highlight);

    mouseParagraph.addEventListener('mousemove', () => console.log('You Moved!'));
}

addEventListener('keydown', highlight);
addEventListener('keyup', (event) => console.log('You stopped pressing the key on ${new Date}'));
addEventListener('keypress', (event) => console.log('You pressed the ${event.key} character'));

addEventListener('keydown', (event) => {
    if (event.key === 'c' && event.ctrlKey) {
        console.log('Action cancelled.');
    }
});

addEventListener('touchend', () => console.log('Touch stopped'));

//const onceParagraph = document.getElementById('once');
//if (onceParagraph) {
//    onceParagraph.addEventListener('click', remove);
//    console.log('Enjoy this while it lasts!');
//}

const brokenLink = document.getElementById('broken');
if (brokenLink) {
    brokenLink.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Broken Link!');
    });
}

ulElement = document.getElementById('list');

if (ulElement) {
    ulElement.addEventListener('click', (event) => console.log('Clicked on ul'), true);
}

liElement = document.getElementById('#list li');
if (liElement) {
    liElement.addEventListener('click', (event) => console.log('Clicked on li'), true);
}

//addEventListener('click', doSomething);
//
//function doSomething(event){
//    console.log('screen: (${event.screenX}, ${event.screenY}), page: (${event.pageX}, ${event.pageY}), client: (${event.screenX}, ${event.screenY})')
//}
//
//function doSomething(event){
//    console.log(event.type);
//}