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