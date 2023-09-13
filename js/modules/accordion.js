export class Accordion {
    constructor(element) {
        if(element) {
            this.element = element;
            this.button = this.element.querySelector('.accordion-label');
            this.content = this.element.querySelector('.accordion-content');
            this.contentHeight = this.content.scrollHeight;
        }
    }

    init() {
        if(this.element) {
            try {
                this.openCheckAfterInit();
                this.button.addEventListener('click', () => {
                    this.open()
                })
            }
            catch(error) {
                console.log(`Произошла ошибка, возможно нет кнопки у аккордеона ${this.element.className} ${error}`)
            }
        }
    }

    open() {
        try {
            if(this.element.classList.contains('open')) {
                this.element.classList.remove('open')
                this.content.style.maxHeight = '0'
            }else{
                this.element.classList.add('open')
                this.content.style.maxHeight = `${this.contentHeight}px`
            }
        }
        catch(error) {
            console.log(`Произошла ошибка во время скрытия/отображения ${error}`)
        }
    }

    openCheckAfterInit() {
        try {
            if(this.element.classList.contains('open')) {
                this.content.style.maxHeight = `${this.contentHeight}px`
            }
        }
        catch(error) {
            console.log(`Произошла ошибка во время инизиализации аккордеона ${error}`)
        }
    }
}