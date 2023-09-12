import { Cameras } from "./cameras.js";
import { SETTINGS } from "./resourses.js";

export const Fitlers = {
    filter: document.querySelector('.filters'),
    

    init() {
        if(this.filter) {
            // this.open()
            this.renderTableList();
        }
    },

    renderTableList() {
        try{
            for(let key in SETTINGS.TABLES) {
                const el = document.createElement('li');
                el.classList.add('drop-item');
                el.textContent = key;
                this.filter.querySelector('.filters-table .drop-list').append(el)
            }
        }
        catch{
            console.log('Ошибка фильтра')
        }
    },
    
    // open() {
    //     // const button = this.filter.querySelector('.filters-button');
    //     // const fitersWrapper = this.filter.querySelector('.filters-wrapper');
    //     // const fitersWrapperHeight = fitersWrapper.scrollHeight;
    //     // button.onclick = (e) => {
    //     //     if(this.filter.classList.contains('open')) {
    //     //         this.filter.classList.remove('open');
    //     //         fitersWrapper.style.paddingTop = '0px';
    //     //         fitersWrapper.style.maxHeight = '0px';
    //     //         inputDrop.removeAllClass(e);
    //     //         if(!Cameras.wrapper.dataset.filter) {
    //     //             this.changeGrid([2, 2, 16])
    //     //         }else{
    //     //             this.changeGrid(Cameras.wrapper.dataset.filter.split(','))
    //     //         }
    //     //     }else {
    //     //         this.filter.classList.add('open');
    //     //         fitersWrapper.style.paddingTop = '16px';
    //     //         fitersWrapper.style.maxHeight = `${fitersWrapperHeight}px`
    //     //         if(!Cameras.wrapper.dataset.filter) {
    //     //             this.changeGrid([3, 2, 16])
    //     //         }else{
    //     //             console.log(Cameras.wrapper.dataset.filter.split(','))
    //     //             this.changeGrid(Cameras.wrapper.dataset.filter.split(','))
    //     //         }
    //     //     }
    //     // }
    // },

    changeGrid(array) {
        if(Cameras.grid.classList.contains('cameras-grid')) {
            Cameras.grid.style.gridTemplateColumns = `repeat(${array[0]}, 1fr)`;
            Cameras.grid.style.gap = `${array[2]}px`
            Cameras.cameraHight(array[1], array[2]);
        }
    },

    removeDropClass() {
        this.filter.onclick = (e) => {
            if(e.target.classList.contains('filters-wrapper')) {
                inputDrop.removeAllClass(e);
            }
        }
    }
}

export const inputDrop = {
    inputs: document.querySelectorAll('.input-item-drop'),

    init() {
        if(this.inputs.length > 0) {
            this.listener();
            if(Fitlers.filter) {
                Fitlers.removeDropClass();
            }
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
        if(input.parentElement.classList.contains('filters-table')) {
            Fitlers.changeGrid(SETTINGS.TABLES[obj.data])
            Cameras.wrapper.dataset.filter = SETTINGS.TABLES[obj.data];
        }
    }   
}