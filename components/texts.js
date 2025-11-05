import { addClass } from "../utils.js";

export function makeText(type, text='', classes=[], id='') {
   const textElem = document.createElement(type);
   textElem.textContent = text
   if (id) textElem.id = id
   addClass(classes, textElem)
   
   return textElem
}

