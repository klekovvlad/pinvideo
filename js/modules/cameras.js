export const Cameras = {
    wrapper: document.querySelector('.cameras-wrapper'),
    viewButtons: document.querySelector('.cameras-view-buttons'),
    grid: document.createElement('div'),
    table: document.createElement('table'),

    getList() {
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
        if(type === 'grid') {
            this.grid.classList.add('cameras-grid');
            this.getList().forEach(item => {
                this.grid.insertAdjacentHTML('beforeend', this.cameraCard(item))
            })
            this.wrapper.append(this.grid);
        }else if(type === 'table') {
            this.table.classList.add('cameras-table');
            this.table.insertAdjacentHTML('beforeend', 
                this.getTableHead(),
            )
            this.getList().forEach(item => {
                this.table.insertAdjacentHTML('beforeend', this.getTableRow(item))
            })
            this.wrapper.append(this.table)
        }

        this.cameraHight(2)
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
            <div class="camera" data-status="${item.record ? 'record' : 'error'}">
                <div class="camera-status"></div>
                <a class="camera-open hint" href="#" data-hint="На полный экран"></a>
                <div class="camera-info">
                    <div class="camera-name">${item.name}</div>
                    <a href="#" class="camera-edit hint" data-hint="Перейти к редактированию"></a>
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

    getTableRow(item) {
        return `
            <tr>
                <td>
                    ${item.name}
                </td>
                <td>
                    ${item.tags}
                </td>
                <td>
                    ${item.record ? 'Вкл' : 'Выкл'}
                </td>
                <td>
                    ${item.time_archive}
                </td>
                <td>
                    ${item.depth_archive}
                </td>
                <td>
                    ${item.tariff}
                </td>
            </tr>
        `
    }
}

const CamerasList = [
    {
        name: 'Камера 1',
        record: true,
        tags: 'teg1, teg2, teg3, teg4',
        time_archive: 2,
        depth_archive: 2,
        tariff: 'Standart'
    },
    {
        name: 'Камера 2',
        record: true,
        tags: 'teg1, teg2, teg3, teg4',
        time_archive: 2,
        depth_archive: 2,
        tariff: 'Standart'
    },
    {
        name: 'Камера 3',
        record: true,
        tags: 'teg1, teg2, teg3, teg4',
        time_archive: 2,
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