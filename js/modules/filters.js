export const Fitlers = {
    filter: document.querySelector('.filters'),

    init() {
        if(this.filter) {
            this.open()
            inputDrop.init()
        }
    },
    
    open() {
        const button = this.filter.querySelector('.filters-button');
        const fitersWrapper = this.filter.querySelector('.filters-wrapper');
        const fitersWrapperHeight = fitersWrapper.scrollHeight;
        button.onclick = () => {
            if(this.filter.classList.contains('open')) {
                this.filter.classList.remove('open');
                fitersWrapper.style.paddingTop = '0px';
                fitersWrapper.style.maxHeight = '0px'
            }else {
                this.filter.classList.add('open');
                fitersWrapper.style.paddingTop = '16px';
                fitersWrapper.style.maxHeight = `${fitersWrapperHeight}px`
            }
        }
    },

    removeDropClass() {
        this.filter.onclick = (e) => {
            if(e.target.classList.contains('filters-wrapper')) {
                inputDrop.removeAllClass();
            }
        }
    }
}

const inputDrop = {
    inputs: document.querySelectorAll('.input-item-drop'),

    init() {
        if(this.inputs.length > 0) {
            this.listener();
            Fitlers.removeDropClass();
        }
    },

    listener() {
        this.inputs.forEach(input => {
            input.onclick = () => {
                this.removeAllClass();
                input.classList.add('open');
            }

            const list = input.querySelector('.drop-list')
            const inputText = input.querySelector('input')
            if(list) {
                const listItems = list.querySelectorAll('.drop-item');

                let listArray = [];
                for(let i = 0; i < listItems.length; i++) {
                    listArray.push(listItems[i].textContent);
                }

                list.onclick = (e) => {
                    this.inputValue(inputText, listItems, listArray, this.listListener(e));
                }

                if(input.classList.contains('input-item-search')) {
                    inputText.oninput = (e) => {
                        this.inputSearch(e.target, listItems)
                    }
                }
            }
        })
    },

    removeAllClass() {
        for(let i = 0; i < this.inputs.length; i++) {
            this.inputs[i].classList.remove('open')
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
    }
}