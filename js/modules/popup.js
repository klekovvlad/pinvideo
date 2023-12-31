import { SYSTEM_ERRORS } from "./resourses.js"

export const Popup = {
    buttons: document.querySelectorAll('[data-popup]'),

    listener() {
        if(this.buttons.length > 0) {
            this.buttons.forEach(button => {
                button.onclick = () => {
                    try {
                        this.removeOpenClass()
                        const popup = document.querySelector(`#${button.dataset.popup}`)
                        if(!popup.classList.contains('open')) {
                            popup.classList.add('open')
                            this.popupListener(popup)
                        }
                    }
                    catch {
                        console.log(SYSTEM_ERRORS.POPUP.NOT_FOUND)
                    }
                }
            })
        }
    },

    popupListener(popup) {
        popup.addEventListener('click', function open(e) {
            if(e.target.id === popup.id || e.target.classList.contains('popup-close')) {
                popup.classList.remove('open')
                popup.removeEventListener('click', open, false)
            }
        })
    },

    removeOpenClass() {
        document.querySelectorAll('.popup').forEach(popup => popup.classList.remove('open'))
    }
}