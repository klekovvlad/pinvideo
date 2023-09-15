class Cameras {
    constructor(element) {
        if(element) {
            this.element = element;
            this.wrapper = this.element.querySelector('.cameras-wrapper')
            this.grid = this.element.querySelector('.cameras-grid');
        }
        if(this.grid) {
            this.cameras = this.grid.querySelectorAll('.camera')
        }
    }

    init() {
        try {
            if(this.grid) {
                this.changeHeight()
            }
        }
        catch(error) {
            console.log(error)
        }
    }

    changeHeight() {
        if(window.innerWidth > 767) {
            const height = ((this.wrapper.clientHeight - this.grid.dataset.gap) / this.grid.dataset.row) - 5;
            this.cameras.forEach(camera => {
                camera.style.height = `${height}px`
            });
        }
    }
}

export default Cameras