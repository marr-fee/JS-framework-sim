import { addClass } from "../utils.js";

export function makeButton(text, classes=[], func, id) {
    const button = document.createElement('button');
    addClass(classes, button, 'def-button')
    
    if (id) button.id = id
    if (text) button.textContent = text;
    if (func) button.addEventListener("click", func);
    return button;

}

export function makeFormButton(text='', classes=[], func='', id) {
    const button = document.createElement('button')
    if (text) button.textContent = text;
    if (id) button.id = id;
    addClass(classes, button, 'def-form-btn')
    if (func) button.addEventListener("click", func);
    return button;
}