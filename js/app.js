import { Accordion } from "./modules/accordion.js";
import Cameras from "./modules/cameras.js";
import { Cookie } from "./modules/cookie.js";
import { DropItem } from "./modules/drop.js";
import { Fitlers } from "./modules/filters.js";
import { Hint } from "./modules/hint.js";
import { Input, InputsNumbers, inputDrop } from "./modules/inputs.js";
import { Popup } from "./modules/popup.js";
import { Tab } from "./modules/tabs.js";
import { tariffPage } from "./modules/tariffPage.js";
import { userMenu } from "./modules/userMenu.js";

userMenu.listener();
Hint.init();
inputDrop.init()
InputsNumbers.init();
Popup.listener();
DropItem.init();
Cookie.init();

document.querySelectorAll('.accordion').forEach(accodrion => {
    const AccordionElement = new Accordion(accodrion);
    if(AccordionElement) {
        AccordionElement.init();
    }
})

const FilterElement = new Fitlers(document.querySelector('.filters'))
if(FilterElement) {
    FilterElement.init();
}

const CamerasElements = new Cameras(document.querySelector('.cameras'))
if(CamerasElements) {
    CamerasElements.init();
    FilterElement.listener(CamerasElements);
}

const datePickerButtons = document.querySelectorAll('button.check-date');
if(datePickerButtons.length > 0) {
    datePickerButtons.forEach(button => {
        const datePicker = new Datepicker(button, {
            multiple: true,
        })
    })
}

const tabs = document.querySelectorAll('.tabs');
if(tabs.length > 0) {
    tabs.forEach(tab => {
        const tabElement = new Tab(tab)
        tabElement.listener()
    })
}

const inputs = document.querySelectorAll('.input-wrapper')
if(inputs.length > 0) {
    inputs.forEach(input => {
        const inputEl = new Input(input)
        inputEl.init();
    })
}

tariffPage()