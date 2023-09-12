import { Accordion } from "./modules/accordion.js";
import { Cameras } from "./modules/cameras.js";
import { DropItem } from "./modules/drop.js";
import { Fitlers, inputDrop } from "./modules/filters.js";
import { Hint } from "./modules/hint.js";
import { InputsNumbers } from "./modules/inputs.js";
import { Popup } from "./modules/popup.js";
import { userMenu } from "./modules/userMenu.js";

userMenu.listener();
Fitlers.init();
Cameras.init();
Hint.init();
inputDrop.init()
InputsNumbers.init();
Popup.listener();
DropItem.init();

const accordions = document.querySelectorAll('.accordion');
if(accordions.length > 0) {
    accordions.forEach(accodrion => {
        const AccordionElement = new Accordion(accodrion);
        AccordionElement.init();
    })
}