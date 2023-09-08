import { WORDS } from "./resourses.js";

export const InputsNumbers = {
    elements: document.querySelectorAll('.input-number'),

    init() {
        if(this.elements.length > 0) {
            this.elements.forEach(element => {
                const input = element.querySelector('input');
                element.onclick = (e) => {
                    this.listener(e, input, element)
                }
            })
        }
    },

    listener(e, input, element) {
        let value = Number(input.value)
        if(input.dataset.pre) {
            value = Number(input.value.replace(input.dataset.pre, ''))
        }
        
        if(e.target.classList.contains('input-number-prev')) {
            if(value > 1) {
                value--;
            }
        }else if(e.target.classList.contains('input-number-next')) {
            value++
        }

        input.value = `${input.dataset.pre}${value}`;

        this.changeNumberText(element, value);
    },

    changeNumberText(element, value) {
        const text = element.parentElement.querySelector('.input-number-text')
        if(text) {
            text.textContent = WORDS.CASE(WORDS[text.dataset.type.toUpperCase()], value)
        }
    }
}