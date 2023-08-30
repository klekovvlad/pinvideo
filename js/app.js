import { Cameras } from "./modules/cameras.js";
import { Fitlers } from "./modules/filters.js";
import { userMenu } from "./modules/userMenu.js";

userMenu.listener();
Fitlers.init();
Cameras.init();