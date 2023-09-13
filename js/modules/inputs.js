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

        input.value = `${input.dataset.pre ? input.dataset.pre : ''}${value}`;

        this.changeNumberText(element, value);
    },

    changeNumberText(element, value) {
        const text = element.parentElement.querySelector('.input-number-text')
        if(text) {
            text.textContent = WORDS.CASE(WORDS[text.dataset.type.toUpperCase()], value)
        }
    }
}

export const inputDrop = {
    inputs: document.querySelectorAll('.input-item-drop'),

    init() {
        if(this.inputs.length > 0) {
            this.listener();
        }
    },

    listener() {
        this.inputs.forEach(input => {
            input.onclick = (e) => {
                this.removeAllClass(e);
                if(input.classList.contains('open')) {
                    input.classList.remove('open');
                }else{
                    input.classList.add('open');
                }
            }

            const list = input.querySelector('.drop-list')
            const inputText = input.querySelector('input')
            if(list) {
                const listItems = list.querySelectorAll('.drop-item');

                if(input.classList.contains('input-item-options')) {
                    let listArray = [];
                    for(let i = 0; i < listItems.length; i++) {
                        listArray.push(listItems[i].textContent);
                    }
    
                    list.onclick = (e) => {
                        this.inputValue(inputText, listItems, listArray, this.listListener(e));
                    }
                }else {
                    list.onclick = (e) => {
                        this.inputRadio(inputText, listItems, this.listListener(e))
                    }
                }

                if(input.classList.contains('input-item-search')) {
                    inputText.addEventListener('input', (e) => {
                        this.inputSearch(e.target, listItems)
                    })
                }
            }
        })
    },

    removeAllClass(e) {
        for(let i = 0; i < this.inputs.length; i++) {
            if(e.target !== this.inputs[i]) {
                this.inputs[i].classList.remove('open')
            }
        }
    },

    listListener(e) {
        if(e.target.classList.contains('drop-item') && !e.target.classList.contains('active')) {
            e.target.classList.add('active')
            return {
                remove: false,
                data: e.target.textContent,
            };
        }
        if(e.target.classList.contains('active')) {
            e.target.classList.remove('active')
            return {
                remove: true,
                data: e.target.textContent,
            };
        }
    },

    inputValue(input, listItems, listArray, obj) {
        let array = input.value.split(', ');
        
        if(obj.remove) {
            array.splice(array.indexOf(obj.data), 1)
        }else {
            if(array.indexOf('') === 0) {
                array.splice(array.indexOf(''), 1)
            }
            array.push(obj.data)
        }
        
        array.forEach((item, index) => {
            if(listArray.indexOf(item) < 0) {
                array.splice(index, 1)
            }
        })

        listItems.forEach(item => {
            item.style.display = 'flex'
        })
        
        input.value = array.join(', ')
    },

    inputSearch(input, listItems) {
        let array = input.value.split(', ');
        listItems.forEach(item => {
            if(item.textContent.toLowerCase().indexOf(array[array.length - 1].toLowerCase()) >= 0) {
                item.style.display = 'flex'
            }else{
                item.style.display = 'none'
            }
        })
    },

    inputRadio(input, array, obj) {
        for(let i = 0; i < array.length; i++) {
            if(array[i].textContent !== obj.data) {
                array[i].classList.remove('active')
            }
        }
        if(obj.remove) {
            input.value = ''
        }else{
            input.value = obj.data
        }
    }   
}