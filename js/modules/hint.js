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
                this.hint.style.transform = `translate(calc(-50% + ${el.offsetWidth / 2}px), calc(${el.offsetHeight}px + 10px))`
                
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