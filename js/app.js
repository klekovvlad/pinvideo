import { Accordion } from "./modules/accordion.js";
import Cameras from "./modules/cameras.js";
import { DropItem } from "./modules/drop.js";
import { Fitlers } from "./modules/filters.js";
import { Hint } from "./modules/hint.js";
import { InputsNumbers, inputDrop } from "./modules/inputs.js";
import { Popup } from "./modules/popup.js";
import { userMenu } from "./modules/userMenu.js";

userMenu.listener();
Hint.init();
inputDrop.init()
InputsNumbers.init();
Popup.listener();
DropItem.init();

document.querySelectorAll('.accordion').forEach(accodrion => {
    const AccordionElement = new Accordion(accodrion);
    if(AccordionElement) {
        AccordionElement.init();
    }
})

const FilterElement = new Fitlers(document.querySelector('.filters'))
if(FilterElement) {
    FilterElement.init();
    FilterElement.renderTableList();
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