export class Tab {
    constructor(element) {
        this.buttons = element.querySelector('.tab-buttons');
        this.contents = element.querySelector('.tab-contents');
        if(this.contents) {
            this.tabs_content = [...this.contents.children]
            this.tabs_buttons = [...this.buttons.children]
        }
    }

    listener() {
        try {
            this.buttons.addEventListener('click', (e) => {
                if(e.target.dataset.tab) {
                    this.action(e.target.dataset.tab)
                }
            })
        }
        catch(error) {
            console.log(error)
        }
    }
    
    action(id) {
        for(let i = 0; i < this.tabs_content.length; i++) {
            if(this.tabs_content[i].id !== id) {
                this.tabs_content[i].classList.remove('active')
            }else if(this.tabs_content[i].id === id) {
                this.tabs_content[i].classList.add('active')
            }
        }
        for(let i = 0; i < this.tabs_buttons.length; i++) {
            if(this.tabs_buttons[i].dataset.tab !== id) {
                this.tabs_buttons[i].classList.remove('active')
            }else{
                this.tabs_buttons[i].classList.add('active')
            }
        }
    }
}