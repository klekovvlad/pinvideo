export const tariffPage = () => {
    const page = document.querySelector('.tariffpage')
    if(page) {
        try{
            const tariffs = page.querySelectorAll('input[type="radio"]');
            const popup = document.querySelector('#tariff_payment')
            const list = popup.querySelectorAll('.drop-item')
            tariffs.forEach(tariff => {
                tariff.addEventListener('input', () => {
                    list.forEach(li => {
                        console.log(li.textContent, tariff.value)
                        if(li.textContent == tariff.value) {
                            li.click()
                            popup.querySelector('.input-item-drop').classList.remove('open')
                        }
                    })
                })
            })
        }catch(e) {
            console.log(e)
        }
    }
}