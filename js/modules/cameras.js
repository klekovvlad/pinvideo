import { Hint } from "./hint.js"
import { HINT, WORDS, STATUS } from "./resourses.js"

export const Cameras = {
    wrapper: document.querySelector('.cameras-wrapper'),
    viewButtons: document.querySelector('.cameras-view-buttons'),
    grid: document.createElement('div'),
    table: document.createElement('table'),

    async getList() {
        return CamerasList
    },

    init() {
        if(this.wrapper) {
            this.render('grid')
            this.viewButtonsListener()
        }
    },

    render(type) {
        this.wrapper.innerHTML = ''
        this.grid.innerHTML = ''
        this.table.innerHTML = ''
        this.getList().then(cameras => {
            if(type === 'grid') {
                this.grid.classList.add('cameras-grid');
                cameras.forEach(item => {
                    this.grid.insertAdjacentHTML('beforeend', this.cameraCard(item))
                })
                this.wrapper.append(this.grid);
            }else if(type === 'table') {
                this.table.cellPadding = '0';
                this.table.cellSpacing = '0'
                const tableBody = this.getTableBody()
                this.table.classList.add('cameras-table');
                this.table.insertAdjacentHTML('beforeend', 
                    this.getTableHead(),
                )
                cameras.forEach(item => {
                    tableBody.insertAdjacentHTML('beforeend', this.getTableRow(item))
                })
    
                this.table.append(tableBody)
                this.wrapper.append(this.table)
            }
            this.cameraHight(2)
            Hint.init();
        })

    },

    getHeight() {
        return this.wrapper.offsetHeight;
    },

    cameraHight(rows) {
        [...this.grid.children].forEach(item => {
            item.style.height = `${(this.getHeight() / rows) - (16 * (rows - 1))}px`
        })
    },

    cameraCard(item) {
        return `
            <div class="camera" data-status="${item.record ? 'record' : 'error'}" ${!item.record ? `data-message="${STATUS.ERROR}"` : ''}>
                <div class="camera-status"></div>
                <a class="camera-open" href="#" data-hint="${HINT.SCREEN}"></a>
                <div class="camera-info">
                    <div class="camera-name">${item.name}</div>
                    <a href="#" class="camera-edit" data-hint="${HINT.EDIT}"></a>
                </div>
            </div>
        `
    },

    viewButtonsListener() {
        if(this.viewButtons) {
            this.viewButtons.onclick = (e) => {
                if(e.target.dataset.view) {
                    this.render(e.target.dataset.view)
                }
            }
        }
    },

    getTableHead() {
        return `
            <thead>
                <tr>
                    <td>Название</td>
                    <td>Теги</td>
                    <td>Запись</td>
                    <td>Время архива</td>
                    <td>Глубина архива</td>
                    <td>Тариф</td>
                </tr>
            </thead>
        `
    },

    getTableBody() {
        return document.createElement('tbody');
    },

    getTableRow(item) {
        return `
            <tr class="${item.record ? 'record' : 'error'}">
                <td>
                    <a href="">${item.name}</a>
                </td>
                <td>
                    ${item.tags}
                </td>
                <td>
                    ${item.record ? 'Вкл' : 'Выкл'}
                </td>
                <td>
                    ${item.time_archive} ${this.wordCase(WORDS.HOURS, item.time_archive)}
                </td>
                <td>
                    ${item.depth_archive} ${this.wordCase(WORDS.DAYS, item.depth_archive)}
                </td>
                <td>
                    ${item.tariff}
                </td>
            </tr>
        `
    },

    wordCase(words, num) {
        if(Array.isArray(words)) {
            return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
        }else{
            return ''
        }
    }
}

const CamerasList = [
    {
        name: 'Камера 1',
        record: true,
        tags: 'teg1, teg2, teg3, teg4',
        time_archive: 3,
        depth_archive: 2,
        tariff: 'Standart'
    },
    {
        name: 'Камера 2',
        record: true,
        tags: 'teg1, teg2, teg3, teg4',
        time_archive: 1,
        depth_archive: 2,
        tariff: 'Standart'
    },
    {
        name: 'Камера 3',
        record: true,
        tags: 'teg1, teg2, teg3, teg4',
        time_archive: 5,
        depth_archive: 2,
        tariff: 'Standart'
    },
    {
        name: 'Камера 4',
        record: true,
        tags: 'teg1, teg2, teg3, teg4',
        time_archive: 2,
        depth_archive: 2,
        tariff: 'Standart'
    },
    {
        name: 'Камера 5',
        record: true,
        tags: 'teg1, teg2, teg3, teg4',
        time_archive: 2,
        depth_archive: 2,
        tariff: 'Standart'
    },
    {
        name: 'Камера 6',
        record: false,
        tags: 'teg1, teg2, teg3, teg4',
        time_archive: 2,
        depth_archive: 2,
        tariff: 'Standart'
    },
]