
import { makeHeader, makeSideBar, toggleSidebar, makeHamburgerMenu, makeNavMenu, usingNavMenu } from "./components/header.js";
import { makeHero, makeSliderHero } from "./components/hero.js";
import { makeCaption, makeText } from "./components/texts.js";
import { makeButton, makeFormButton } from "./components/buttons.js";
import { makeCardGrid } from "./components/grids.js";
import { makeFooter } from "./components/footer.js";
import { makeCheckbox, makeForm, makeFormInput, makeRadioElem, makeSelect, makeTextArea } from "./components/forms.js";
import { addClass, nestElements } from "./utils.js";
import { makeImage } from "./components/image.js";
import { makeStoreTemplate } from "./components/shop-template.js";



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

const hambuerger = makeHamburgerMenu('', toggleSidebar)
const pageTitle = makeText('h1', 'Page Title')
const navBtn = makeButton('Click Me', '', toggleSidebar)
const sideContent = ['Hi', 'Hey', 'How']
const sidebar = makeSideBar(sideContent)
const headElems = [sidebar, hambuerger, pageTitle, navBtn]
const headSection = makeHeader('', headElems)

const heroTitle = makeText('h1', 'Page Title')
const heroSec = makeHero('', heroTitle)


const firstNameIn = makeFormInput('First Name', 'text', 'first name', 'First Name')
const lastNameIn = makeFormInput('Last Name', 'text', 'last name', 'Last Name')
const emailIn = makeFormInput('Email Address', 'email', 'email', 'Email Address')
const passwordIn = makeFormInput('Password', 'password', 'password', 'Password')
const textArea = makeTextArea('What d you think?', 'opinion', "I believe that...")
const checkB = makeCheckbox('Do you have that?', 'quest', false)
const radioOptions = [{value:'seven', text:'Seven'}, {value:'one',text:'One'}, {value:'eight',text:'Eight'}, {value:'zero',text:'Zero'}]
const radio = makeRadioElem('How many? qwqwd wefewf fqwf weg34 4fw f23432rf 23f 23f243 32 r23r23r 23t4 3t43tg 432t2 3t2twgsg svsgrgrvS gaegaa ga h hghre.', 'radio', radioOptions)
const cap = makeCaption('This Caption')
const formBtn = makeFormButton('Log In')
const formContent = [firstNameIn, lastNameIn, emailIn, passwordIn, radio, checkB, textArea, formBtn, cap]
const formSec = makeForm('', '', '', formContent)

const textGridContent = ['Hi', 'Hey', 'How']
const textGrid = makeCardGrid('text', textGridContent)
const gridImg = ["images/cotton-socks.png", "images/plain-t-shirt.png", "images/placeholder.jpg"]

const imageGrid = makeCardGrid('img', gridImg)
const moveHero = makeSliderHero(gridImg, textGridContent)
// PAGE LAYOUT TEMPLATE
// Create sections seperatelly and stack to layyout

 const products = [
  {
    image: "images/cotton-socks.png",
    item: { name: "Cool Sneakers", description: "Stylish and comfy." },
    "item cost": { cost: "$99", shopIcon: "🛒" }
  },
  {
    image: "images/plain-t-shirt.png",
    item: { name: "Denim Jacket", description: "Classic blue denim." },
    "item cost": { cost: "$79" }
  },
  {
    image: "images/placeholder.jpg",
    item: { name: "Cap", description: "Adjustable cotton cap." },
    "item cost": { cost: "$89" }
  }
  ,
  {
    image: "images/placeholder.jpg",
    item: { name: "Cap", description: "Adjustable cotton cap." },
    "item cost": { cost: "$89" }
  }
];

const footer = makeFooter()
const grid = makeStoreTemplate(products)
const topPage = [headSection, heroSec]
const pageLayout = [formSec, textGrid, imageGrid, grid, ]
const pageBody = makeBody('', pageLayout)
const navbar = makeNavMenu(textGridContent)
function render(elem) {
    if (Array.isArray(elem)){
      elem.forEach((e)=>{appContainer.appendChild(e)})
    } else{appContainer.appendChild(elem)}
    
}
document.addEventListener("DOMContentLoaded", () => {
    // RENDER ELEMENTS TO PAGE
    render(topPage)
    render(navbar)
    render(moveHero)
    render(pageBody)
    render(footer)
});

