// Create a class for the element
class BookLoader extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Create spans
        const wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'book');

        const inner = document.createElement('div');
        inner.setAttribute('class', 'inner');

        const innerLeft = document.createElement('div');
        innerLeft.setAttribute('class', 'left');
        inner.appendChild(innerLeft);

        const innerMiddle = document.createElement('div');
        innerMiddle.setAttribute('class', 'middle');
        inner.appendChild(innerMiddle);

        const innerRight = document.createElement('div');
        innerRight.setAttribute('class', 'right');
        inner.appendChild(innerRight);


        const list = document.createElement('ul');
        list.setAttribute('style', 'list-style: none;');
        for (var i = 0; i < 18; i++) {
            const listItem = document.createElement('li');
            list.appendChild(listItem);
        }

        // Apply external styles to the shadow dom
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', '/assets/css/loader.css');

        wrapper.appendChild(inner);
        wrapper.appendChild(list);

        shadow.appendChild(linkElem);
        shadow.appendChild(wrapper);
    }
}

// Define the new element
customElements.define('book-loader', BookLoader);