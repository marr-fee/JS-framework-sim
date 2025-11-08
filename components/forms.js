import { addClass, nestElements } from "../utils.js";

export function makeForm(action = "", method = "", classes = [], nestElement=[], id) {
    const form = document.createElement("form");

    if (action) form.action = action;
    if (method) form.method = method;
    if (id) form.id = id;
    addClass(classes, form, "def-form")
    nestElements(form, nestElement)

    return form;
}


export function makeFormInput(label="", type = "text", name="", placeholder = "", classes = [], id) {
    const labelElem = document.createElement('label')
    labelElem.textContent = label
    labelElem.htmlFor = id
    const input = document.createElement("input");
    input.type = type;
    input.id = id
    input.name = name
    input.placeholder = placeholder;
    labelElem.appendChild(input)
    addClass(classes, labelElem, 'def-input')

  return labelElem;
}

export function makeSelect(label = "", name = "", options = [], classes = [], id) {
    const labelElem = document.createElement("label");
    if (label) labelElem.textContent = label;
    if (id) labelElem.htmlFor = id;

    const select = document.createElement("select");
    if (id) select.id = id;
    if (name) select.name = name;

    options.forEach(opt => {
        const optionElem = document.createElement("option");
        optionElem.value = opt.value ?? "";
        optionElem.textContent = opt.text ?? opt.value ?? "";
        select.appendChild(optionElem);
    });

    labelElem.appendChild(select);
    addClass(classes, labelElem, "def-select")

    return labelElem;
}


export function makeCheckbox( label = "", name = "", checked = false, classes = [], id) {
    const labelElem = document.createElement("label");
    if (label) labelElem.textContent = label;
    if (id) labelElem.htmlFor = id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    if (id) checkbox.id = id;
    if (name) checkbox.name = name;
    checkbox.checked = checked;

    labelElem.insertBefore(checkbox, labelElem.firstChild);

    addClass(classes, labelElem, "def-checkbox")
    addClass(classes, checkbox, "def-checkbox")

    return labelElem;
}



export function makeRadioElem( label = "", name = "", options = [], classes = [], id) {
    const wrapper = document.createElement("fieldset");
    
    if (id) wrapper.id = id;

    if (label) {
        const legend = document.createElement('legend')
        legend.textContent = label
        wrapper.appendChild(legend);
    }

    options.forEach(opt => {
        const radioLabel = document.createElement("label");

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = name;
        radio.value = opt.value;

        radioLabel.textContent = opt.text;
        radioLabel.insertBefore(radio, radioLabel.firstChild);

        wrapper.appendChild(radioLabel);

        addClass(classes, wrapper, "def-radio-group")
        addClass(classes, radioLabel, "def-radio-item")
        addClass(classes, radio, "def-radio-item")
    });

    return wrapper;
}


export function makeTextArea( label = "", name = "", placeholder = "", classes = [], id) {
    const labelElem = document.createElement("label");
    if (label) labelElem.textContent = label;
    if (id) labelElem.htmlFor = id;

    const textarea = document.createElement("textarea");
    if (id) textarea.id = id;
    if (name) textarea.name = name;
    if (placeholder) textarea.placeholder = placeholder;

    labelElem.appendChild(textarea);

    addClass(classes, labelElem, "def-textarea")
    addClass(classes, textarea, "def-textarea")

    return labelElem;
}

