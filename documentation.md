✅ Main System Functions
## makeBody(classses = [], nestElement = [], id="")

File: ## main.js
Purpose: Creates the main <div> wrapper for the page and optionally nests other elements inside it.

## Parameters:
classes — Array<string> — CSS class names to apply.
nestElement — Array<HTMLElement> — Elements to append inside the body wrapper.

## Returns:
HTMLElement — a <div> element that acts as the page container.




## => render(elem)

File: main.js
Purpose: Appends an already-built element (or tree of elements) into the page's #app container in the DOM.

## Parameters:
elem — HTMLElement — root element to attach to the page.

## Returns:
void



✅ Header Components
## makeHeader(classes = [], nestElement = [], id="")

File: components/header.js
Purpose: Creates a <header> with optional content.

## Parameters:
classes — Array<string> — CSS classes.
nestElement — Array<HTMLElement> — elements to insert inside header.

## Returns: HTMLElement — <header>

## makeNavMenu(classes = [], nestElement = [], id="")

File: components/header.js
Purpose: Creates a navigation menu container.
## Parameters:

classes — Array<string>
nestElement — Array<HTMLElement>
id - string

## Returns: HTMLElement — <nav>




✅ Hero Components
## makeHero(imageUrl = '', classes = [], nestElement = [], id="")

File: components/hero.js
Purpose: Creates a hero section with a background image.

## Parameters:
imageUrl — string — background image source.
classes — Array<string>
nestElement — Array<HTMLElement>
id - string

## Returns: HTMLElement — <section> (hero container)

## makeSliderHero(imageUrl = [], text = [], classes = [], nestElement = [], id="")

File: components/hero.js
Purpose: Creates a sliding hero banner (image slideshow + text).
## Parameters:

imageUrl — Array<string> — image URLs.
text — Array<string> — captions or text.
classes — Array<string>
nestElement — Array<HTMLElement>
id - string

## Returns: HTMLElement — slider container

## nextSlide()

File: components/hero.js
Purpose: Advances to next slide in slider system.
## Parameters: none

## Returns:
void




✅ Image Components
## makeImage(src = '', classes = [], id="")

File: components/image.js
Purpose: Generates an <img> element.

## Parameters:
src — string — image path
classes — Array<string>
id - string

## Returns: HTMLImageElement




✅ Text Components
## makeText(type, text = '', classes = [], id="")

File: components/texts.js
Purpose: Creates a text element (h1, p, etc.).

## Parameters:
type — string — tag (e.g., "p", "h2")
text — string
classes — Array<string>
id - string

## Returns: HTMLElement




✅ Button Components
## makeButton(text, classes = [], func, id="")

File: components/buttons.js
Purpose: Creates a clickable button.

## Parameters:
text — string — label
classes — Array<string>
func — Function — click handler (optional)
id - string

## Returns: HTMLButtonElement





✅ Grid Components
## makeGrid(contentType = '', content = [], classes = [], id="")

File: components/grids.js
Purpose: Creates a grid layout (products, images, etc.).

## Parameters:
contentType — string — type of grid items (e.g., "text", "image")
content — Array<any> — data for grid items
classes — Array<string>
id - string

## Returns: HTMLElement — grid container




✅ Footer
## makeFooter(classes = [], nestElement = [], id="")

File: components/footer.js
Purpose: Creates a footer section.

## Parameters:
classes — Array<string>
nestElement — Array<HTMLElement>

## Returns: HTMLElement




✅ Form Components

File: components/forms.js
Purpose: Creates a <form> element with optional action/method settings.
Automatically falls back to browser defaults when values are empty:

## action empty → submit to current page
## method empty → defaults to "GET"

## Parameters:
| Name      | Type          | Description                                                         |
| --------- | ------------- | ------------------------------------------------------------------- |
| `action`  | string        | Form submit URL; if empty, form submits to current page             |
| `method`  | string        | HTTP method (e.g., `"GET"`, `"POST"`); defaults to `"GET"` if empty |
| `classes` | Array<string> | CSS classes applied to the form                                     |
| `id`      | string        | Optional ID for the form                                            |

## Returns: HTMLElement — <form> element


## makeFormInput(label = "", type = "text", name = "", placeholder = "", classes = [], id = "")

File: components/forms.js
Purpose: Creates a labeled <input> element (text, email, number, password, etc.).

## Parameters:
| Name          | Type          | Description                                          |
| ------------- | ------------- | ---------------------------------------------------- |
| `label`       | string        | Label text shown above input                         |
| `type`        | string        | Input type (e.g., `"text"`, `"email"`, `"password"`) |
| `name`        | string        | Form name attribute                                  |
| `placeholder` | string        | Placeholder text                                     |
| `classes`     | Array<string> | CSS classes applied to the label & input             |
| `id`          | string        | Optional ID for linking label to input               |

## Returns: HTMLElement — <label> containing an <input>



## makeSelect(label = "", name = "", options = [], classes = [], id = "")

Purpose: Creates a labeled <select> dropdown with dynamic options.

## Parameters:
| Name      | Type                   | Description                       |
| --------- | ---------------------- | --------------------------------- |
| `label`   | string                 | Label text                        |
| `name`    | string                 | Select element name attribute     |
| `options` | Array<{ value, text }> | Array of options: `{value, text}` |
| `classes` | Array<string>          | CSS classes for label/select      |
| `id`      | string                 | Optional ID for label+select      |


## Returns: HTMLElement — <label> containing a <select>


## makeCheckbox(label = "", name = "", checked = false, classes = [], id = "")

Purpose: Creates a checkbox input wrapped in a <label>.

## Parameters:
| Name      | Type          | Description                             |
| --------- | ------------- | --------------------------------------- |
| `label`   | string        | Label text                              |
| `name`    | string        | Checkbox name attribute                 |
| `checked` | boolean       | Initial checked state                   |
| `classes` | Array<string> | CSS classes applied to label & checkbox |
| `id`      | string        | Optional ID                             |

## Returns: HTMLElement — <label> with a <input type="checkbox">


## makeRadioGroup(label = "", name = "", options = [], classes = [], id = "")

Purpose: Creates a group of radio buttons with a label.

## Parameters:
| Name      | Type                   | Description                      |
| --------- | ---------------------- | -------------------------------- |
| `label`   | string                 | Group title                      |
| `name`    | string                 | `name` shared by all radios      |
| `options` | Array<{ value, text }> | Radio buttons options            |
| `classes` | Array<string>          | CSS classes for wrapper & radios |
| `id`      | string                 | Optional wrapper ID              |


## makeTextArea(label = "", name = "", placeholder = "", classes = [], id = "")

Purpose: Creates a labeled <textarea> element.

## Parameters:
| Name          | Type          | Description                             |
| ------------- | ------------- | --------------------------------------- |
| `label`       | string        | Label text                              |
| `name`        | string        | Textarea name attribute                 |
| `placeholder` | string        | Placeholder text                        |
| `classes`     | Array<string> | CSS classes applied to label & textarea |
| `id`          | string        | Optional ID                             |

## Returns: HTMLElement — <label> containing a <textarea>