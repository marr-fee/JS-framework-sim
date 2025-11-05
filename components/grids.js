import { addClass } from "../utils.js";
import { makeImage } from "./image.js";


export function makeCardGrid(contentType='', contents=[], classes=[], id='') {
    const container = document.createElement('div')
    container.classList.add('def-grid-container')
    if (id) container.id = id
    if (contents){
       contents.forEach(content => {
            const item = document.createElement('div')
            item.classList.add('def-grid-items')

            if (contentType === 'text'){
                const itemTxt = document.createElement('p')
                itemTxt.textContent = content 
                addClass(classes, itemTxt, 'def-grid-p') 
                item.appendChild(itemTxt)

            }else if(contentType === 'img'){
                const image = makeImage(content, ['def-grid-img'])                
                item.append(image)

            }else{
                console.warn(`Unknown grid content type: ${contentType}`)
            }    
            container.appendChild(item) 
        });
    }
    return container
}