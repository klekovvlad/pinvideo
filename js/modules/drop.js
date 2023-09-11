export const DropItem = {
    elements: document.querySelectorAll('.drop'),

    init() {
        if(this.elements.length > 0) {
            this.elements.forEach(element =>{
                this.listener(element)
            })
        }
    },

    listener(element) {
        try {
            const button = element.querySelector('.drop-button');
            button.onclick = () => {
                this.open(element)
            }
        }
        catch(error) {
            console.log(`Ошибка в раскрывающемся списке ${error}`)
        }
    },

    open(element) {
        element.classList.contains('open') ? element.classList.remove('open') : element.classList.add('open')
    }
}