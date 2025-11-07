import { addClass } from "../utils.js";


export function makeImage(src='', alt='', classes=[], id) {
    const image = document.createElement('img');
    image.src = src
    image.alt = alt
    if (id) image.id = id
    addClass(classes, image)
    return image
}