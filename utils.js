
export function addClass(classes=[], elem, defaultClass) {
    elem.classList.add(defaultClass);
    if (Array.isArray(classes) && classes.length > 0) {
        classes.forEach(cls => elem.classList.add(cls));
    }
}


export function nestElements(container, elements) {
    if (Array.isArray(elements) && elements.length > 0) {
        elements.forEach(elem => container.appendChild(elem));
    }
}