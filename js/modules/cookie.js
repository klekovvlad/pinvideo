import { store } from "./store.js";

export const Cookie = {
    element: document.querySelector('.cookie'),
    timeout: 3000,

    init() {
        if(this.element && (!JSON.parse(store.getLocalUser()) || !JSON.parse(store.getLocalUser()).cookie)) {
            this.show();
            this.element.querySelector('.cookie-accept').addEventListener('click', () => {
                this.close()
            }, {once: true})
        }
    },

    show() {
        setTimeout(() => {
            this.element.classList.add('active')
        }, this.timeout);
    },

    close() {
        store.setLocalUserParam('cookie', true)
        this.element.classList.remove('active')
    }
}