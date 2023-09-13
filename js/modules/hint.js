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
                this.hint.style.left = `${el.getBoundingClientRect().left}px`;
                this.hint.style.top = `${el.getBoundingClientRect().top}px`;
                this.hint.innerHTML = el.dataset.hint;
                let translateDif = el.offsetWidth / 2;

                if((el.getBoundingClientRect().left + this.hint.getBoundingClientRect().width) > window.outerWidth) {
                    this.hint.classList.add('hint__right');
                    translateDif = -(this.hint.getBoundingClientRect().width / 2) + 30;
                }else if(el.getBoundingClientRect().left - (this.hint.getBoundingClientRect().width / 2) < 0) {
                    this.hint.classList.add('hint__left')
                    translateDif = (this.hint.getBoundingClientRect().width / 2) - 10
                }

                this.hint.style.transform = `translate(calc(-50% + ${(translateDif)}px), calc(${el.offsetHeight}px + 10px))`;
                this.hint.classList.add('active');
            }
            el.onmouseleave = () => {
                this.hint.className = 'hint';
            }
        })
    },

    createHint() {
        const el = document.createElement('div');
        el.classList.add('hint');
        return el;
    }
}