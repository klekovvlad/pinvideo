export const Hint = {
    elements: [],
    hint: null,

    init() {
        this.elements = document.querySelectorAll('[data-hint]');

        if(this.elements.length > 0) {
            if(!this.hint) {
                this.hint = this.createHint()
                document.querySelector('body').append(this.hint)
            }
            this.listener()
        }
    },

    listener() {
        this.elements.forEach(el => {
            el.onmouseenter = () => {
                this.hint.classList.add('active');
                this.hint.style.left = `${el.getBoundingClientRect().left}px`;
                this.hint.style.top = `${el.getBoundingClientRect().top}px`;
                this.hint.innerHTML = el.dataset.hint;
                let diff = 0
                let padding = 64;
                if(window.innerWidth < 768) {
                    padding = 12
                }
                if((el.getBoundingClientRect().left + this.hint.offsetWidth) - padding > window.innerWidth) {
                    diff = (window.innerWidth - (el.getBoundingClientRect().left + (this.hint.offsetWidth / 2))) - 32;
                }
                this.hint.style.transform = `translate(calc(-50% + ${((el.offsetWidth + diff) / 2)}px), calc(${el.offsetHeight}px + 10px))`
            }
            el.onmouseleave = () => {
                this.hint.classList.remove('active');
            }
        })
    },

    createHint() {
        const el = document.createElement('div');
        el.classList.add('hint');
        return el;
    }
}