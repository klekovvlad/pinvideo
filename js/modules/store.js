export const store = {
    
    setLocalUserParam(key, param) {
        let obj = {}
        obj[key] = param

        if(localStorage.getItem('user')) {
            obj = {...obj, ...JSON.parse(localStorage.getItem('user'))}
        }
        
        localStorage.setItem('user', JSON.stringify(obj))
    },

    getLocalUser() {
        return localStorage.getItem('user')
    }
}