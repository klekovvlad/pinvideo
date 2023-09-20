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
}