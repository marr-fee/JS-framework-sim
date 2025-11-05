import { addClass, nestElements } from "../utils.js";


export function makeFooter(classes=[], nestElement=[], id) {
    const footerDiv = document.createElement('div')
    if (id) footerDiv.id = id 
    addClass(classes, footerDiv, 'def-footer')
    nestElements(footerDiv, nestElement)

    return footerDiv
}
