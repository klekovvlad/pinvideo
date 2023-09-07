import { Cameras } from "./modules/cameras.js";
import { Fitlers } from "./modules/filters.js";
import { Hint } from "./modules/hint.js";
import { Popup } from "./modules/popup.js";
import { userMenu } from "./modules/userMenu.js";

userMenu.listener();
Fitlers.init();
Cameras.init();
Hint.init();
Popup.listener();

// window.onmousemove = (e) => {
//     Hint.listener(e);
// }