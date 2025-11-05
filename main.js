
import { makeHeader, makeSideBar, toggleSidebar, makeHamburgerMenu, makeNavMenu, usingNavMenu } from "./components/header.js";
import { makeHero, makeSliderHero } from "./components/hero.js";
import { makeText } from "./components/texts.js";
import { makeButton, makeFormButton } from "./components/buttons.js";
import { makeCardGrid } from "./components/grids.js";
import { makeFooter } from "./components/footer.js";
import { makeCheckbox, makeFormInput, makeRadioGroup, makeSelect, makeTextArea } from "./components/forms.js";
import { addClass, nestElements } from "./utils.js";
import { makeImage } from "./components/image.js";



const appContainer = document.getElementById("app-container");

export function makeBody(classses=[], nestElement=[], id='') {
    const container = document.createElement('div')
    if (id) container.id = id
    addClass(classses, container, 'def-page-body-wrapper')

    if (usingNavMenu) {
        appContainer.style.cssText += `
            padding-top: 120px;
        `;
    } else {
        appContainer.style.cssText += `
            padding-top: 70px;
        `;
    }
    nestElements(container, nestElement)
    return container
}

function render(elem) {
    appContainer.appendChild(elem)
}



// PAGE LAYOUT TEMPLATE
// Create sections seperatelly and stack to layyout

// const pageLayout = [h1Text, formInput, formInput2, formInput3, textArea, formButton, checkboxSection, radioSection, countrySelect, textGrid, imageGrid]
// const pageBody = makeBody('', pageLayout)

document.addEventListener("DOMContentLoaded", () => {
    // RENDER ELEMENTS TO PAGE
    // render(pageBody)
});

