import { SETTINGS, SYSTEM_ERRORS } from "./resourses.js";
import {Accordion} from './accordion.js';


export class Fitlers extends Accordion {
    constructor(...args) {
        super(...args)
    }

    listener(cameras) {
        if(cameras.grid) {
            this.button.addEventListener('click', () => {
                cameras.wrapper.classList.add('loader')
                setTimeout(() => {
                    cameras.changeHeight();
                    cameras.wrapper.classList.remove('loader')
                }, 500)
            })
        }
    }

    renderTableList() {
        if(this.element) {
            try{
                for(let key in SETTINGS.TABLES[SETTINGS.CHECK_WIDTH()]) {
                    const el = document.createElement('li');
                    el.classList.add('drop-item');
                    el.textContent = key;
                    this.element.querySelector('.filters-table .drop-list').append(el)
                }
            }
            catch(error) {
                console.log(`${SYSTEM_ERRORS.FITLERS.TABLE_MASK} ${error}`)
            }
        }
    }
}