import { addClass } from "../utils.js";


export function makeImage(src='', classes=[], id) {
    const image = document.createElement('img');
    image.src = src
    if (id) image.id = id
    addClass(classes, image)
    return image
}