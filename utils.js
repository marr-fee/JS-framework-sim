
export function addClass(classes=[], elem, defaultClass) {
    if (classes && classes.length > 0) {
        classes.forEach(cls => {
            elem.classList.add(cls)
        });
    } else {
        elem.classList.add(defaultClass)
    }
}

export function nestElements(container, elements) {
    if (elements) {
        elements.forEach(elem => {
            container.appendChild(elem);
        });
    }
}