import { addClass, nestElements } from "../utils.js"

export let usingNavMenu = false

export function toggleSidebar() {
    const sb = document.querySelector('.sidebar')
    sb.style.transform =
        sb.style.transform === 'translateX(0%)'
        ? 'translateX(-100%)'
        : 'translateX(0%)'
}
export function makeHeader(classes=[], nestElement=[], id='') {
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('def-header')
    if (id) headerDiv.id = id
    addClass(classes, headerDiv, 'def-header')
    nestElements(headerDiv, nestElement)

    return headerDiv
}


export function makeSideBar(classes=[], nestElement=[], id='') {
    const container = document.createElement('div')     
    const listWrapper = document.createElement('ul')
    if (id) container.id = id
    nestElement.forEach(li => {
        const list = document.createElement('li');
        list.textContent = li;
        listWrapper.appendChild(list)
    });
    
    container.appendChild(listWrapper) 
    addClass(classes, container, 'def-sidebar')
    container.classList.add('sidebar')
    return container;
}

export function makeHamburgerMenu(classes=[], func, id='') {
    const container = document.createElement('div')
    const line1 = document.createElement('div')
    const line2 = document.createElement('div')
    const line3 = document.createElement('div')
    if (id) container.id = id
    addClass(classes, container, 'def-hamburger-container')
    
    line1.classList.add('def-hamburger-lines')
    line2.classList.add('def-hamburger-lines')
    line3.classList.add('def-hamburger-lines')

    const lines = [line1, line2, line3]
    lines.forEach((line)=>{
        container.appendChild(line)
    })

    if (func) container.addEventListener('click', func)

    return container
}

export function makeNavMenu(classes=[], nestElement=[], id='') {
    usingNavMenu = true;
    const container = document.createElement('div')
    if (id) container.id = id
    addClass(classes, container, 'def-navbar')

    const listWrapper = document.createElement('ul')

    nestElement.forEach(li => {
        const list = document.createElement('li');
        list.textContent = li;
        listWrapper.appendChild(list)
    });
    
    container.appendChild(listWrapper)


    return container
}