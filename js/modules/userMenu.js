export const userMenu = {
    wrapper: document.querySelector('.user'),
    
    listener() {
        if(this.wrapper) {
            this.wrapper.onclick = () => {
                this.action()
            }
        }
    },

    action() {
        this.wrapper.classList.contains('open') ? this.wrapper.classList.remove('open') : this.wrapper.classList.add('open')
    }

}