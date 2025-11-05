import { addClass } from "../utils.js";


export function makeHero(imageUrl='', classes=[], nestElement=[], id='') {
    const container = document.createElement('div')
    if (id) container.id = id
    addClass(classes, container, 'def-hero-container')
    
    if (imageUrl){
        container.style.backgroundImage = `url(${imageUrl})`  
    }else{container.style.backgroundImage = "images/placeholder.jpg"}
    
    if (nestElement) {
        nestElement.forEach(elem => {
            const [func, params] = elem;
            const newElem = func(...params);
            container.appendChild(newElem);
        });
    }

    return container
}



export function makeSliderHero(imageUrl=[], text=[], classes=[], id='') {
    const container = document.createElement('div')
    if (id) container.id = id
    addClass(classes, container, 'def-hero-slider-container')

    const slides = document.createElement('div');
    slides.classList.add('slides');

    imageUrl.forEach((src) => {
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('slide');
        imageDiv.style.backgroundImage = `url(${src})`
        slides.appendChild(imageDiv);
    });

    if (Array.isArray(text) && imageUrl.length === text.length) {
        for (let i = 0; i < text.length; i++) {
            const captionText = text[i];
            if (captionText == null) continue;

            const caption = document.createElement('p');
            caption.classList.add('caption');
            caption.textContent = captionText;


            const slide = slides.children[i];
            if (slide){
                slide.appendChild(caption);
            } 
        }
    }
    container.append(slides)
    
    let current = 0;

    function nextSlide() {
        const slides = document.querySelector(".slides");
        current = (current + 1) % slides.children.length;
        slides.style.transform = `translateX(-${current * 100}%)`;
    }

    //setInterval(nextSlide, 4000);
    return container
}